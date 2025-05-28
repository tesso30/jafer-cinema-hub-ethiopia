import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Movie {
  id: number;
  tmdb_id: number;
  title: string;
  original_title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
  genre_ids?: number[];
  adult?: boolean;
  original_language?: string;
  video?: boolean;
  created_at?: string;
  updated_at?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  tagline?: string;
  homepage?: string;
  imdb_id?: string;
  production_companies?: any;
  videos?: any;
  credits?: any;
  similar_movies?: any;
  recommendations?: any;
  keywords?: any;
}

interface MovieFilters {
  year?: number;
  genreId?: number;
  query?: string;
}

export const useMovies = (category: string = 'popular', page: number = 1, filters?: MovieFilters) => {
  return useQuery({
    queryKey: ['movies', category, page, filters],
    queryFn: async (): Promise<{ movies: Movie[]; total_pages: number }> => {
      // First, try to get movies from our database with filters
      let query = supabase
        .from('movies')
        .select('*')
        .order('popularity', { ascending: false });

      if (filters?.year) {
        query = query.ilike('release_date', `${filters.year}%`);
      }

      if (filters?.genreId) {
        query = query.contains('genre_ids', [filters.genreId]);
      }

      if (filters?.query) {
        query = query.or(`title.ilike.%${filters.query}%,original_title.ilike.%${filters.query}%`);
      }

      const { data: localMovies, error } = await query.limit(20);

      if (error) throw error;

      // If we have movies in database, return them
      if (localMovies && localMovies.length > 0) {
        return { movies: localMovies, total_pages: 1 };
      }

      // If no movies in database, fetch from API
      const { data, error: functionError } = await supabase.functions.invoke('fetch-movies', {
        body: { 
          category, 
          page,
          ...filters
        }
      });

      if (functionError) throw functionError;
      
      return data;
    }
  });
};

export const useFetchMoviesFromAPI = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ 
      category = 'popular', 
      page = 1,
      filters
    }: { 
      category?: string; 
      page?: number;
      filters?: MovieFilters;
    }) => {
      const { data, error } = await supabase.functions.invoke('fetch-movies', {
        body: { 
          category, 
          page,
          ...filters
        }
      });

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      // Invalidate movies queries to refetch with new data
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    }
  });
};

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: async () => {
      // Try to get detailed movie info from our database first
      const { data: localMovie, error } = await supabase
        .from('movies')
        .select('*')
        .eq('tmdb_id', movieId)
        .single();

      if (error) throw error;

      // If we have detailed info, return it
      if (localMovie && localMovie.runtime) {
        return localMovie;
      }

      // If not, fetch from API
      const { data, error: functionError } = await supabase.functions.invoke('fetch-movies', {
        body: { movieId }
      });

      if (functionError) throw functionError;
      return data.movies[0];
    }
  });
};

export const useMovieSearch = (query: string) => {
  return useQuery({
    queryKey: ['movie-search', query],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('fetch-movies', {
        body: { query }
      });

      if (error) throw error;
      return data;
    },
    enabled: query.length > 2
  });
};
