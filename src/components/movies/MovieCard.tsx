
import React from 'react';
import { Star, Calendar } from "lucide-react";
import { Movie } from '@/hooks/useMovies';
import { Language, moviesTranslations } from '@/utils/moviesTranslations';

interface MovieCardProps {
  movie: Movie;
  language: Language;
  viewMode: 'grid' | 'list';
}

export default function MovieCard({ movie, language, viewMode }: MovieCardProps) {
  const translations = moviesTranslations[language];
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

  if (viewMode === 'list') {
    return (
      <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-jafer-gold/10 group">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-32 h-48 flex-shrink-0">
            <img 
              src={posterUrl}
              alt={movie.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-jafer-red text-white">
                {translations.trending}
              </span>
            </div>
          </div>
          <div className="flex-1 p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-jafer-gold transition-colors">
              {movie.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2 line-clamp-3">{movie.overview}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {releaseYear}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                {movie.vote_average?.toFixed(1) || 'N/A'}
              </span>
            </div>
            <p className="text-sm text-gray-400">{movie.original_language?.toUpperCase()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-jafer-gold/10 group hover:-translate-y-1">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={posterUrl}
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-jafer-red text-white">
            {translations.trending}
          </span>
        </div>
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
          <Star className="w-3 h-3 text-yellow-500" />
          <span className="text-xs text-white font-medium">{movie.vote_average?.toFixed(1) || 'N/A'}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-lg font-bold mb-1 text-white group-hover:text-jafer-gold transition-colors line-clamp-2">
          {movie.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-2 line-clamp-2">{movie.overview}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{movie.original_language?.toUpperCase()}</span>
          <span>{releaseYear}</span>
        </div>
      </div>
    </div>
  );
}
