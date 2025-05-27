
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { category = 'popular', page = 1 } = await req.json()
    
    // You'll need to add your TMDB API key as a secret
    const tmdbApiKey = Deno.env.get('TMDB_API_KEY')
    if (!tmdbApiKey) {
      throw new Error('TMDB API key not configured')
    }

    // Fetch movies from TMDB API
    const tmdbResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${tmdbApiKey}&page=${page}&language=en-US`
    )
    
    if (!tmdbResponse.ok) {
      throw new Error('Failed to fetch from TMDB API')
    }

    const tmdbData = await tmdbResponse.json()
    
    // Store movies in our database
    const moviesToInsert = tmdbData.results.map((movie: any) => ({
      tmdb_id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      overview: movie.overview,
      release_date: movie.release_date || null,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      popularity: movie.popularity,
      genre_ids: movie.genre_ids,
      adult: movie.adult,
      original_language: movie.original_language,
      video: movie.video
    }))

    // Insert movies using upsert to avoid duplicates
    const { data: insertedMovies, error: insertError } = await supabaseClient
      .from('movies')
      .upsert(moviesToInsert, { 
        onConflict: 'tmdb_id',
        ignoreDuplicates: false 
      })
      .select()

    if (insertError) {
      console.error('Database insert error:', insertError)
      throw insertError
    }

    return new Response(
      JSON.stringify({
        movies: insertedMovies,
        total_pages: tmdbData.total_pages,
        total_results: tmdbData.total_results,
        page: tmdbData.page
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
