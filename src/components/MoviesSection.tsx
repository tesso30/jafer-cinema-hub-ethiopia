
import React, { useState } from 'react';
import { useMovies, useFetchMoviesFromAPI, type Movie } from '@/hooks/useMovies';
import { useToast } from '@/hooks/use-toast';
import { Language, moviesTranslations } from '@/utils/moviesTranslations';
import MoviesFilters from './movies/MoviesFilters';
import MoviesGrid from './movies/MoviesGrid';
import CountrySelector from './movies/CountrySelector';

interface MoviesSectionProps {
  language: Language;
}

export default function MoviesSection({ language }: MoviesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'rating'>('title');
  const [selectedCountry, setSelectedCountry] = useState('usa');
  
  const { data, isLoading, error } = useMovies(selectedCountry);
  const fetchMoviesMutation = useFetchMoviesFromAPI();
  const { toast } = useToast();

  const translations = moviesTranslations[language];

  const handleRefreshMovies = async () => {
    try {
      await fetchMoviesMutation.mutateAsync({ category: selectedCountry });
      toast({
        title: "Success",
        description: "Movies updated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch new movies. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredMovies = (movies: Movie[] | undefined) => {
    if (!movies) return [];
    
    let filtered = movies;
    
    // Filter by country based on selected country
    if (selectedCountry === 'usa') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'en' || 
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('US')
        )
      );
    } else if (selectedCountry === 'france') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'fr' || 
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('FR')
        )
      );
    } else if (selectedCountry === 'japan') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'ja' || 
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('JP')
        )
      );
    } else if (selectedCountry === 'korea') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'ko' || 
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('KR')
        )
      );
    } else if (selectedCountry === 'india') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'hi' || 
        movie.original_language === 'ta' ||
        movie.original_language === 'te' ||
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('IN')
        )
      );
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(movie => {
        return (
          movie.title.toLowerCase().includes(searchLower) ||
          movie.overview?.toLowerCase().includes(searchLower) ||
          movie.release_date?.includes(searchTerm)
        );
      });
    }

    // Sort movies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return new Date(b.release_date || '').getTime() - new Date(a.release_date || '').getTime();
        case 'rating':
          return (b.vote_average || 0) - (a.vote_average || 0);
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  };

  return (
    <section id="movies" className="section-container bg-jafer-darker px-4 sm:px-6">
      <h2 className="section-title gradient-text text-2xl sm:text-3xl lg:text-4xl">{translations.title}</h2>
      <p className="section-subtitle text-sm sm:text-base lg:text-lg">{translations.subtitle}</p>
      
      <MoviesFilters
        language={language}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onRefresh={handleRefreshMovies}
        isRefreshing={fetchMoviesMutation.isPending}
      />
      
      <CountrySelector
        language={language}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
      
      <MoviesGrid
        movies={filteredMovies(data?.movies)}
        language={language}
        viewMode={viewMode}
        isLoading={isLoading}
        error={error}
        onRefresh={handleRefreshMovies}
      />
    </section>
  );
}
