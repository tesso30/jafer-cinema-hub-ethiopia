
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMovies, useFetchMoviesFromAPI, type Movie } from '@/hooks/useMovies';
import { useToast } from '@/hooks/use-toast';
import { Language, moviesTranslations } from '@/utils/moviesTranslations';
import MoviesFilters from './movies/MoviesFilters';
import MoviesGrid from './movies/MoviesGrid';

interface MoviesSectionProps {
  language: Language;
}

export default function MoviesSection({ language }: MoviesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'rating'>('title');
  const [activeCategory, setActiveCategory] = useState('popular');
  
  const { data, isLoading, error } = useMovies(activeCategory);
  const fetchMoviesMutation = useFetchMoviesFromAPI();
  const { toast } = useToast();

  const translations = moviesTranslations[language];

  const handleRefreshMovies = async () => {
    try {
      await fetchMoviesMutation.mutateAsync({ category: activeCategory });
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
    
    // Filter by country based on active category
    if (activeCategory === 'usa') {
      filtered = filtered.filter(movie => 
        movie.original_language === 'en' || 
        movie.production_companies?.some((company: any) => 
          company.origin_country?.includes('US')
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
      
      <Tabs defaultValue="popular" className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="mx-auto flex justify-center mb-6 sm:mb-8 bg-black/40 p-1 rounded-xl border border-gray-700 w-full sm:w-auto overflow-x-auto">
          <TabsTrigger value="popular" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">
            {translations.trending}
          </TabsTrigger>
          <TabsTrigger value="usa" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">
            {translations.usa}
          </TabsTrigger>
          <TabsTrigger value="top_rated" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">
            {translations.old}
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">
            {translations.upcoming}
          </TabsTrigger>
        </TabsList>
        
        {['popular', 'usa', 'top_rated', 'upcoming'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <MoviesGrid
              movies={filteredMovies(data?.movies)}
              language={language}
              viewMode={viewMode}
              isLoading={isLoading}
              error={error}
              onRefresh={handleRefreshMovies}
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
