import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Star, Clock, Calendar, Filter, Grid, List, RefreshCw } from "lucide-react";
import { useMovies, useFetchMoviesFromAPI, type Movie } from '@/hooks/useMovies';
import { useToast } from '@/hooks/use-toast';

type Language = 'en' | 'am' | 'or';

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

  const translations = {
    en: {
      title: "Explore Our Movie Database",
      subtitle: "Discover thousands of movies from The Movie Database. Browse by category and find your next favorite film.",
      trending: "Popular Movies",
      new: "Now Playing",
      old: "Top Rated",
      upcoming: "Coming Soon",
      search: "Search by title, genre, or year...",
      min: "min",
      rating: "Rating",
      sortBy: "Sort by",
      viewMode: "View",
      gridView: "Grid",
      listView: "List",
      year: "Year",
      duration: "Duration",
      noResults: "No movies found. Try refreshing to fetch new movies.",
      loadMore: "Load More Movies",
      refreshMovies: "Refresh Movies",
      fetchingMovies: "Fetching new movies..."
    },
    // ... keep existing code (am and or translations)
    am: {
      title: "የፊልም ቤተ-መጽሃፍታችንን ያስሱ",
      subtitle: "ሺዎች የሚቆጠሩ ፊልሞችን ያግኙ። የሚወዷቸውን ያግኙ እና መደብራችንን በሚጎበኙበት ጊዜ ይጠይቋቸው።",
      trending: "ተወዳጅ ፊልሞች",
      new: "አሁን እየታዩ ያሉ",
      old: "ከፍተኛ ደረጃ ያላቸው",
      upcoming: "በቅርቡ",
      search: "በርዕስ፣ በዓይነት፣ ወይም በዓመት ይፈልጉ...",
      min: "ደቂቃ",
      rating: "ደረጃ",
      sortBy: "ደርድር በ",
      viewMode: "እይታ",
      gridView: "ፍርግርግ",
      listView: "ዝርዝር",
      year: "ዓመት",
      duration: "ጊዜ",
      noResults: "ምንም ፊልም አልተገኘም። አዲስ ፊልሞችን ለማምጣት ሪፍሬሽ ያድርጉ።",
      loadMore: "ተጨማሪ ፊልሞች ጫን",
      refreshMovies: "ፊልሞችን አድስ",
      fetchingMovies: "አዲስ ፊልሞችን እናመጣለን..."
    },
    or: {
      title: "Mana Kitaabaa Fiilmii Keenya Sakatta'i",
      subtitle: "Fiilmii kumaatama argadhu. Filannoo kee argadhuun daawwannaa duka'ana keenyaatti gaafadhu.",
      trending: "Fiilmii Beekamaa",
      new: "Amma Mulhatan",
      old: "Sadarkaa Olaanaa",
      upcoming: "Dhihaatti Dhufaa",
      search: "Mata-duree, akaakuu ykn waggaatiin barbaadi...",
      min: "daqiiqaa",
      rating: "Sadarkaa",
      sortBy: "Tartiibiin",
      viewMode: "Ilaalcha",
      gridView: "Sarara",
      listView: "Tarree",
      year: "Waggaa",
      duration: "Yeroo",
      noResults: "Fiilmiin hin argamne. Fiilmii haaraa fiduu refresh godhi.",
      loadMore: "Fiilmii Dabalataa Fe'i",
      refreshMovies: "Fiilmii Refresh Godhi",
      fetchingMovies: "Fiilmii haaraa fidaa jirra..."
    }
  };

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

  const MovieCard = ({ movie }: { movie: Movie }) => {
    const posterUrl = movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Image';

    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

    if (viewMode === 'list') {
      return (
        <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-jafer-gold/10 group">
          <div className="flex">
            <div className="relative w-32 h-48 flex-shrink-0">
              <img 
                src={posterUrl}
                alt={movie.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-jafer-red text-white">
                  {translations[language].trending}
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-jafer-gold transition-colors">
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
              {translations[language].trending}
            </span>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-xs text-white font-medium">{movie.vote_average?.toFixed(1) || 'N/A'}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 text-white group-hover:text-jafer-gold transition-colors line-clamp-2">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">{movie.overview}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{movie.original_language?.toUpperCase()}</span>
            <span>{releaseYear}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="movies" className="section-container bg-jafer-darker">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      {/* Enhanced search and filters */}
      <div className="max-w-4xl mx-auto mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="search"
            placeholder={translations[language].search}
            className="pl-12 pr-4 py-3 bg-black/40 border-gray-700 focus:border-jafer-gold text-lg rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label={translations[language].search}
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as 'title' | 'year' | 'rating')}
                className="bg-black/40 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:border-jafer-gold focus:outline-none"
                aria-label={translations[language].sortBy}
              >
                <option value="title">{translations[language].sortBy}: Title</option>
                <option value="year">{translations[language].sortBy}: {translations[language].year}</option>
                <option value="rating">{translations[language].sortBy}: {translations[language].rating}</option>
              </select>
            </div>
            
            <Button
              onClick={handleRefreshMovies}
              disabled={fetchMoviesMutation.isPending}
              className="bg-jafer-gold hover:bg-jafer-darkgold text-black"
              size="sm"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${fetchMoviesMutation.isPending ? 'animate-spin' : ''}`} />
              {fetchMoviesMutation.isPending ? translations[language].fetchingMovies : translations[language].refreshMovies}
            </Button>
          </div>
          
          <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1 border border-gray-700">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-jafer-gold text-black' : 'text-gray-400 hover:text-white'}
              aria-label={translations[language].gridView}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-jafer-gold text-black' : 'text-gray-400 hover:text-white'}
              aria-label={translations[language].listView}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="popular" className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="mx-auto flex justify-center mb-8 bg-black/40 p-1 rounded-xl border border-gray-700">
          <TabsTrigger value="popular" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].trending}
          </TabsTrigger>
          <TabsTrigger value="now_playing" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].new}
          </TabsTrigger>
          <TabsTrigger value="top_rated" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].old}
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].upcoming}
          </TabsTrigger>
        </TabsList>
        
        {['popular', 'now_playing', 'top_rated', 'upcoming'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            {isLoading ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 animate-pulse">
                    <div className="aspect-[2/3] bg-gray-700"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg mb-4">Error loading movies: {error.message}</p>
                <Button onClick={handleRefreshMovies} className="bg-jafer-gold hover:bg-jafer-darkgold text-black">
                  Try Again
                </Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredMovies(data?.movies).length > 0 ? (
                  filteredMovies(data?.movies).map((movie) => (
                    <MovieCard key={movie.tmdb_id} movie={movie} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg mb-4">{translations[language].noResults}</p>
                    <Button onClick={handleRefreshMovies} className="bg-jafer-gold hover:bg-jafer-darkgold text-black">
                      {translations[language].refreshMovies}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
