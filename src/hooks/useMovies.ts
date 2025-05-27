
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
}

export const useMovies = (category: string = 'popular', page: number = 1) => {
  return useQuery({
    queryKey: ['movies', category, page],
    queryFn: async (): Promise<{ movies: Movie[]; total_pages: number }> => {
      // First, try to get movies from our database
      const { data: localMovies, error } = await supabase
        .from('movies')
        .select('*')
        .order('popularity', { ascending: false })
        .limit(20);

      if (error) throw error;

      // If we have movies in database, return them
      if (localMovies && localMovies.length > 0) {
        return { movies: localMovies, total_pages: 1 };
      }

      // If no movies in database, fetch from API
      const { data, error: functionError } = await supabase.functions.invoke('fetch-movies', {
        body: { category, page }
      });

      if (functionError) throw functionError;
      
      return data;
    }
  });
};

export const useFetchMoviesFromAPI = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ category = 'popular', page = 1 }: { category?: string; page?: number }) => {
      const { data, error } = await supabase.functions.invoke('fetch-movies', {
        body: { category, page }
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

export const useMoviesByCategory = () => {
  const queryClient = useQueryClient();

  const fetchByCategory = async (category: string) => {
    const { data, error } = await supabase
      .from('movies')
      .select('*')
      .order('popularity', { ascending: false })
      .limit(20);

    if (error) throw error;
    return data;
  };

  return {
    fetchTrending: () => fetchByCategory('popular'),
    fetchNew: () => fetchByCategory('now_playing'),
    fetchUpcoming: () => fetchByCategory('upcoming'),
    fetchTopRated: () => fetchByCategory('top_rated')
  };
};
