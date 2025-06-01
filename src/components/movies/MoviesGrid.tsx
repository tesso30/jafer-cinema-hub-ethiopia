
import React from 'react';
import { Button } from "@/components/ui/button";
import { Movie } from '@/hooks/useMovies';
import { Language, moviesTranslations } from '@/utils/moviesTranslations';
import MovieCard from './MovieCard';

interface MoviesGridProps {
  movies: Movie[];
  language: Language;
  viewMode: 'grid' | 'list';
  isLoading: boolean;
  error: Error | null;
  onRefresh: () => void;
}

export default function MoviesGrid({
  movies,
  language,
  viewMode,
  isLoading,
  error,
  onRefresh
}: MoviesGridProps) {
  const translations = moviesTranslations[language];

  if (isLoading) {
    return (
      <div className={`grid gap-3 sm:gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
          : 'grid-cols-1'
      }`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 animate-pulse">
            <div className="aspect-[2/3] bg-gray-700"></div>
            <div className="p-3 sm:p-4 space-y-2">
              <div className="h-3 sm:h-4 bg-gray-700 rounded"></div>
              <div className="h-2 sm:h-3 bg-gray-700 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 sm:py-12">
        <p className="text-red-400 text-sm sm:text-lg mb-4">Error loading movies: {error.message}</p>
        <Button onClick={onRefresh} className="bg-jafer-gold hover:bg-jafer-darkgold text-black text-sm">
          Try Again
        </Button>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="col-span-full text-center py-8 sm:py-12">
        <p className="text-gray-400 text-sm sm:text-lg mb-4">{translations.noResults}</p>
        <Button onClick={onRefresh} className="bg-jafer-gold hover:bg-jafer-darkgold text-black text-sm">
          {translations.refreshMovies}
        </Button>
      </div>
    );
  }

  return (
    <div className={`grid gap-3 sm:gap-6 ${
      viewMode === 'grid' 
        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
        : 'grid-cols-1'
    }`}>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.tmdb_id} 
          movie={movie} 
          language={language} 
          viewMode={viewMode} 
        />
      ))}
    </div>
  );
}
