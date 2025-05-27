import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TMDB_CATEGORIES = [
  'now_playing',
  'popular',
  'top_rated',
  'upcoming',
  'latest'
];

async function fetchMovieDetails(movieId: number, tmdbApiKey: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}&append_to_response=credits,similar,recommendations,keywords,videos`
  );
  return response.json();
}

async function searchMovies(query: string, tmdbApiKey: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(query)}&include_adult=false`
  );
  return response.json();
}

async function fetchMoviesByYear(year: number, tmdbApiKey: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&primary_release_year=${year}&sort_by=popularity.desc`
  );
  return response.json();
}

async function fetchMoviesByGenre(genreId: number, tmdbApiKey: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_genres=${genreId}&sort_by=popularity.desc`
  );
  return response.json();
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

    const { 
      category = 'popular', 
      page = 1,
      query,
      year,
      genreId,
      movieId
    } = await req.json()
    
    const tmdbApiKey = Deno.env.get('TMDB_API_KEY')
    if (!tmdbApiKey) {
      throw new Error('TMDB API key not configured')
    }

    let tmdbData;

    // Handle different types of movie requests
    if (movieId) {
      tmdbData = await fetchMovieDetails(movieId, tmdbApiKey);
    } else if (query) {
      tmdbData = await searchMovies(query, tmdbApiKey);
    } else if (year) {
      tmdbData = await fetchMoviesByYear(year, tmdbApiKey);
    } else if (genreId) {
      tmdbData = await fetchMoviesByGenre(genreId, tmdbApiKey);
    } else {
      // Fetch movies from TMDB API for standard categories
      const tmdbResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${tmdbApiKey}&page=${page}&language=en-US`
      )
      
      if (!tmdbResponse.ok) {
        throw new Error('Failed to fetch from TMDB API')
      }

      tmdbData = await tmdbResponse.json()
    }
    
    // Transform and prepare movies for database insertion
    const moviesToInsert = (tmdbData.results || [tmdbData]).map((movie: any) => ({
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
      genre_ids: movie.genre_ids || movie.genres?.map((g: any) => g.id),
      adult: movie.adult,
      original_language: movie.original_language,
      video: movie.video,
      // Additional fields for detailed movie info
      runtime: movie.runtime,
      budget: movie.budget,
      revenue: movie.revenue,
      status: movie.status,
      tagline: movie.tagline,
      homepage: movie.homepage,
      imdb_id: movie.imdb_id,
      production_companies: movie.production_companies?.map((company: any) => ({
        id: company.id,
        name: company.name,
        logo_path: company.logo_path,
        origin_country: company.origin_country
      })),
      videos: movie.videos?.results,
      credits: movie.credits,
      similar: movie.similar?.results,
      recommendations: movie.recommendations?.results,
      keywords: movie.keywords?.keywords
    }));

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
        total_pages: tmdbData.total_pages || 1,
        total_results: tmdbData.total_results || 1,
        page: tmdbData.page || 1
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