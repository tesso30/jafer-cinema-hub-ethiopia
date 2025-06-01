
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Sample movies for each country - these will be inserted if no movies exist
const COUNTRY_SAMPLES = {
  usa: [
    { tmdb_id: 550, title: "Fight Club", original_language: "en", overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", release_date: "1999-10-15", vote_average: 8.4 },
    { tmdb_id: 13, title: "Forrest Gump", original_language: "en", overview: "A man with a low IQ has accomplished great things in his life.", release_date: "1994-06-23", vote_average: 8.8 },
    { tmdb_id: 680, title: "Pulp Fiction", original_language: "en", overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine.", release_date: "1994-09-10", vote_average: 8.9 },
    { tmdb_id: 155, title: "The Dark Knight", original_language: "en", overview: "Batman faces the Joker in Gotham City.", release_date: "2008-07-18", vote_average: 9.0 },
    { tmdb_id: 27205, title: "Inception", original_language: "en", overview: "A thief who steals corporate secrets through dream-sharing technology.", release_date: "2010-07-16", vote_average: 8.8 },
    { tmdb_id: 278, title: "The Shawshank Redemption", original_language: "en", overview: "Two imprisoned men bond over years, finding solace and redemption.", release_date: "1994-09-23", vote_average: 9.3 },
    { tmdb_id: 238, title: "The Godfather", original_language: "en", overview: "The aging patriarch of an organized crime dynasty transfers control.", release_date: "1972-03-24", vote_average: 9.2 },
    { tmdb_id: 424, title: "Schindler's List", original_language: "en", overview: "In German-occupied Poland, Oskar Schindler saves over a thousand Jews.", release_date: "1993-12-15", vote_average: 8.9 },
    { tmdb_id: 389, title: "12 Angry Men", original_language: "en", overview: "A jury holdout attempts to prevent a miscarriage of justice.", release_date: "1957-04-10", vote_average: 8.9 },
    { tmdb_id: 129, title: "Spirited Away", original_language: "ja", overview: "A girl enters a world ruled by gods and witches.", release_date: "2001-07-20", vote_average: 8.6 }
  ],
  france: [
    { tmdb_id: 389, title: "The 400 Blows", original_language: "fr", overview: "A young Parisian boy runs away from home.", release_date: "1959-05-04", vote_average: 8.1 },
    { tmdb_id: 578, title: "Amélie", original_language: "fr", overview: "A shy waitress decides to help those around her find happiness.", release_date: "2001-04-25", vote_average: 8.3 },
    { tmdb_id: 194, title: "Breathless", original_language: "fr", overview: "A small-time thief kills a policeman and tries to persuade a girl to hide in Italy.", release_date: "1960-03-16", vote_average: 7.8 },
    { tmdb_id: 872585, title: "Oppenheimer", original_language: "en", overview: "The story of American scientist J. Robert Oppenheimer.", release_date: "2023-07-21", vote_average: 8.1 },
    { tmdb_id: 11216, title: "Cinema Paradiso", original_language: "it", overview: "A filmmaker recalls his childhood in a small Italian town.", release_date: "1988-11-17", vote_average: 8.5 },
    { tmdb_id: 1895, title: "Star Wars", original_language: "en", overview: "Luke Skywalker joins forces with a Jedi Knight.", release_date: "1977-05-25", vote_average: 8.6 },
    { tmdb_id: 769, title: "GoodFellas", original_language: "en", overview: "The story of Henry Hill and his life in the mob.", release_date: "1990-09-12", vote_average: 8.7 },
    { tmdb_id: 346, title: "Seven Samurai", original_language: "ja", overview: "A village's women seek the help of samurai.", release_date: "1954-04-26", vote_average: 8.6 },
    { tmdb_id: 11324, title: "Shutter Island", original_language: "en", overview: "A U.S. Marshal investigates a psychiatric facility.", release_date: "2010-02-14", vote_average: 8.2 },
    { tmdb_id: 122, title: "The Lord of the Rings: The Return of the King", original_language: "en", overview: "Gandalf and Aragorn lead the World of Men against Sauron's army.", release_date: "2003-12-17", vote_average: 8.9 }
  ],
  japan: [
    { tmdb_id: 129, title: "Spirited Away", original_language: "ja", overview: "A girl enters a world ruled by gods and witches.", release_date: "2001-07-20", vote_average: 8.6 },
    { tmdb_id: 346, title: "Seven Samurai", original_language: "ja", overview: "A village's women seek the help of samurai.", release_date: "1954-04-26", vote_average: 8.6 },
    { tmdb_id: 508442, title: "Soul", original_language: "en", overview: "A musician who has lost his passion for music is transported out of his body.", release_date: "2020-12-25", vote_average: 8.1 },
    { tmdb_id: 1359, title: "Princess Mononoke", original_language: "ja", overview: "A prince becomes involved in a struggle between the gods of a forest.", release_date: "1997-07-12", vote_average: 8.4 },
    { tmdb_id: 4935, title: "Howl's Moving Castle", original_language: "ja", overview: "When a curse turns her into an old woman, Sophie seeks the wizard Howl.", release_date: "2004-11-20", vote_average: 8.2 },
    { tmdb_id: 628, title: "Akira", original_language: "ja", overview: "A secret military project endangers Neo-Tokyo.", release_date: "1988-07-16", vote_average: 8.0 },
    { tmdb_id: 8587, title: "The Lion King", original_language: "en", overview: "A young lion prince flees his kingdom only to learn the true meaning of responsibility.", release_date: "1994-06-24", vote_average: 8.5 },
    { tmdb_id: 12477, title: "Grave of the Fireflies", original_language: "ja", overview: "Two siblings struggle to survive in Japan during World War II.", release_date: "1988-04-16", vote_average: 8.5 },
    { tmdb_id: 13475, title: "Star Trek", original_language: "en", overview: "The brash James T. Kirk tries to live up to his father's legacy.", release_date: "2009-05-06", vote_average: 7.9 },
    { tmdb_id: 14160, title: "Up", original_language: "en", overview: "An elderly man and a young boy scout travel to South America.", release_date: "2009-05-29", vote_average: 8.3 }
  ],
  korea: [
    { tmdb_id: 496243, title: "Parasite", original_language: "ko", overview: "A poor family schemes to become employed by a wealthy family.", release_date: "2019-05-30", vote_average: 8.5 },
    { tmdb_id: 44865, title: "Oldboy", original_language: "ko", overview: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released.", release_date: "2003-11-21", vote_average: 8.4 },
    { tmdb_id: 87101, title: "Terminator 2: Judgment Day", original_language: "en", overview: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son.", release_date: "1991-07-03", vote_average: 8.5 },
    { tmdb_id: 1422, title: "The Departed", original_language: "en", overview: "An undercover cop and a police informant play a cat and mouse game.", release_date: "2006-10-06", vote_average: 8.5 },
    { tmdb_id: 76341, title: "Mad Max: Fury Road", original_language: "en", overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", release_date: "2015-05-15", vote_average: 8.1 },
    { tmdb_id: 330457, title: "Frozen", original_language: "en", overview: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice.", release_date: "2013-11-27", vote_average: 7.3 },
    { tmdb_id: 475557, title: "Joker", original_language: "en", overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.", release_date: "2019-10-04", vote_average: 8.2 },
    { tmdb_id: 120, title: "The Lord of the Rings: The Fellowship of the Ring", original_language: "en", overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.", release_date: "2001-12-19", vote_average: 8.8 },
    { tmdb_id: 603, title: "The Matrix", original_language: "en", overview: "A computer hacker learns from mysterious rebels about the true nature of his reality.", release_date: "1999-03-31", vote_average: 8.7 },
    { tmdb_id: 901362, title: "Trolls Band Together", original_language: "en", overview: "When Branch's brother Floyd is kidnapped, Branch and Poppy embark on a journey to reunite the other brothers.", release_date: "2023-10-12", vote_average: 7.3 }
  ],
  india: [
    { tmdb_id: 447365, title: "Dangal", original_language: "hi", overview: "A former wrestler trains his daughters to become world-class wrestlers.", release_date: "2016-12-23", vote_average: 8.2 },
    { tmdb_id: 254128, title: "San Andreas", original_language: "en", overview: "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey.", release_date: "2015-05-29", vote_average: 6.2 },
    { tmdb_id: 19404, title: "Dilwale Dulhania Le Jayenge", original_language: "hi", overview: "Two young people fall in love on a trip across Europe.", release_date: "1995-10-20", vote_average: 8.7 },
    { tmdb_id: 76203, title: "12 Years a Slave", original_language: "en", overview: "In the antebellum United States, Solomon Northup is abducted and sold into slavery.", release_date: "2013-10-18", vote_average: 8.1 },
    { tmdb_id: 49026, title: "The Dark Knight Rises", original_language: "en", overview: "Eight years after the Joker's reign of anarchy, Batman is forced from his exile.", release_date: "2012-07-20", vote_average: 8.0 },
    { tmdb_id: 673, title: "Harry Potter and the Prisoner of Azkaban", original_language: "en", overview: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry.", release_date: "2004-05-31", vote_average: 8.0 },
    { tmdb_id: 597, title: "Titanic", original_language: "en", overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", release_date: "1997-11-18", vote_average: 7.9 },
    { tmdb_id: 274, title: "The Silence of the Lambs", original_language: "en", overview: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer.", release_date: "1991-02-14", vote_average: 8.3 },
    { tmdb_id: 724089, title: "Gabriel's Inferno Part II", original_language: "en", overview: "Professor Gabriel Emerson has left his position at the University of Toronto.", release_date: "2020-07-31", vote_average: 8.8 },
    { tmdb_id: 406759, title: "Moonlight", original_language: "en", overview: "The tender, heartbreaking story of a young man's struggle to find himself.", release_date: "2016-10-21", vote_average: 7.4 }
  ]
};

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

    // Check if this is a country-specific request and we have sample data
    if (COUNTRY_SAMPLES[category]) {
      // Check if we already have movies for this country in the database
      const { data: existingMovies } = await supabaseClient
        .from('movies')
        .select('*')
        .limit(1);

      if (!existingMovies || existingMovies.length === 0) {
        // Insert sample movies for the country
        const sampleMovies = COUNTRY_SAMPLES[category].map(movie => ({
          ...movie,
          poster_path: `/sample_${movie.tmdb_id}.jpg`,
          backdrop_path: `/sample_backdrop_${movie.tmdb_id}.jpg`,
          vote_count: Math.floor(Math.random() * 10000) + 1000,
          popularity: Math.floor(Math.random() * 100) + 10,
          genre_ids: [28, 12, 16], // Action, Adventure, Animation
          adult: false,
          video: false
        }));

        const { data: insertedMovies, error: insertError } = await supabaseClient
          .from('movies')
          .upsert(sampleMovies, { 
            onConflict: 'tmdb_id',
            ignoreDuplicates: false 
          })
          .select();

        if (insertError) {
          console.error('Sample movies insert error:', insertError);
        }

        return new Response(
          JSON.stringify({
            movies: insertedMovies || sampleMovies,
            total_pages: 1,
            total_results: sampleMovies.length,
            page: 1
          }),
          { 
            headers: { 
              ...corsHeaders, 
              'Content-Type': 'application/json' 
            } 
          }
        );
      }
    }

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
      similar_movies: movie.similar?.results,
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
