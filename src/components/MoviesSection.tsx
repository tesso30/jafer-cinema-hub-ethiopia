import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Star, Clock, Calendar, Filter, Grid, List } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface MoviesSectionProps {
  language: Language;
}

interface Movie {
  id: number;
  title: {
    en: string;
    am: string;
    or: string;
  };
  genre: string;
  year: number;
  duration: string;
  rating: number;
  tag: 'trending' | 'new' | 'old' | 'upcoming';
  poster: string;
  description: {
    en: string;
    am: string;
    or: string;
  };
}

export default function MoviesSection({ language }: MoviesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'rating'>('title');
  
  const translations = {
    en: {
      title: "Explore Our Extensive Movie Library",
      subtitle: "Discover thousands of movies across all genres. Find your favorites and request them during your visit to our store.",
      trending: "Trending Now",
      new: "Latest Releases",
      old: "Classic Movies",
      upcoming: "Coming Soon",
      search: "Search by title, genre, actor, or year...",
      min: "min",
      rating: "Rating",
      sortBy: "Sort by",
      viewMode: "View",
      gridView: "Grid",
      listView: "List",
      year: "Year",
      duration: "Duration",
      noResults: "No movies found. Try adjusting your search or filters.",
      loadMore: "Load More Movies"
    },
    am: {
      title: "ሰፊውን የፊልም ቤተ-መጽሃፍታችንን ያስሱ",
      subtitle: "በሁሉም ዓይነቶች ሺዎች የሚቆጠሩ ፊልሞችን ያግኙ። የሚወዷቸውን ያግኙ እና መደብራችንን በሚጎበኙበት ጊዜ ይጠይቋቸው።",
      trending: "አሁን ተወዳጅ",
      new: "አዳዲስ ልቀቶች",
      old: "ክላሲክ ፊልሞች",
      upcoming: "በቅርቡ",
      search: "በርዕስ፣ በዓይነት፣ በተዋናይ ወይም በዓመት ይፈልጉ...",
      min: "ደቂቃ",
      rating: "ደረጃ",
      sortBy: "ደርድር በ",
      viewMode: "እይታ",
      gridView: "ፍርግርግ",
      listView: "ዝርዝር",
      year: "ዓመት",
      duration: "ጊዜ",
      noResults: "ምንም ፊልም አልተገኘም። ፍለጋዎን ወይም ማጣሪያዎን ለመስተካከል ይሞክሩ።",
      loadMore: "ተጨማሪ ፊልሞች ጫን"
    },
    or: {
      title: "Mana Kitaabaa Fiilmii Bal'aa Keenya Sakatta'i",
      subtitle: "Akaakuu hundaan fiilmii kumaatama argadhu. Filannoo kee argadhuun daawwannaa duka'ana keenyaatti gaafadhu.",
      trending: "Amma Beekamaa",
      new: "Gadhiisa Haaraa",
      old: "Fiilmii Durii",
      upcoming: "Dhihaatti Dhufaa",
      search: "Mata-duree, akaakuu, taphataa ykn waggaatiin barbaadi...",
      min: "daqiiqaa",
      rating: "Sadarkaa",
      sortBy: "Tartiibiin",
      viewMode: "Ilaalcha",
      gridView: "Sarara",
      listView: "Tarree",
      year: "Waggaa",
      duration: "Yeroo",
      noResults: "Fiilmiin hin argamne. Barbaacha ykn gingilchaa kee sirreessuuf yaali.",
      loadMore: "Fiilmii Dabalataa Fe'i"
    }
  };

  const movies: Movie[] = [
    {
      id: 1,
      title: {
        en: "Avengers: Endgame",
        am: "አቬንጀርስ: እንድጌም",
        or: "Avenjersi: Endgeemii"
      },
      genre: "Action, Adventure, Sci-Fi",
      year: 2019,
      duration: "181",
      rating: 8.4,
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      description: {
        en: "The epic conclusion to the Infinity Saga.",
        am: "የኢንፊኒቲ ሳጋ ኤፒክ መደምደሚያ።",
        or: "Xumura Infinity Saga epic."
      }
    },
    {
      id: 2,
      title: {
        en: "Oppenheimer",
        am: "ኦፔንሃይመር",
        or: "Oppenhayimerii"
      },
      genre: "Biography, Drama, History",
      year: 2023,
      duration: "180",
      rating: 8.3,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
      description: {
        en: "The story of American scientist J. Robert Oppenheimer.",
        am: "የአሜሪካዊው ሳይንቲስት ጄ. ሮበርት ኦፔንሃይመር ታሪክ።",
        or: "Seenaa saayintistii Amerikaa J. Robert Oppenheimer."
      }
    }
    // ... keep existing movies data with enhanced descriptions and ratings
  ];

  const filteredMovies = (tag: string) => {
    let filtered = movies;
    
    if (tag !== 'all') {
      filtered = movies.filter(movie => movie.tag === tag);
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(movie => {
        return (
          movie.title[language].toLowerCase().includes(searchLower) ||
          movie.genre.toLowerCase().includes(searchLower) ||
          movie.year.toString().includes(searchLower) ||
          movie.description[language].toLowerCase().includes(searchLower)
        );
      });
    }

    // Sort movies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
        default:
          return a.title[language].localeCompare(b.title[language]);
      }
    });

    return filtered;
  };

  const MovieCard = ({ movie }: { movie: Movie }) => {
    if (viewMode === 'list') {
      return (
        <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-jafer-gold/10 group">
          <div className="flex">
            <div className="relative w-32 h-48 flex-shrink-0">
              <img 
                src={movie.poster} 
                alt={movie.title[language]} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  movie.tag === 'trending' ? 'bg-jafer-red text-white' :
                  movie.tag === 'new' ? 'bg-green-600 text-white' :
                  movie.tag === 'old' ? 'bg-blue-600 text-white' :
                  'bg-purple-600 text-white'
                }`}>
                  {translations[language][movie.tag as keyof typeof translations[typeof language]]}
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-jafer-gold transition-colors">
                {movie.title[language]}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{movie.description[language]}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {movie.year}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movie.duration} {translations[language].min}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  {movie.rating}
                </span>
              </div>
              <p className="text-sm text-gray-400">{movie.genre}</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-black/40 rounded-xl overflow-hidden border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-jafer-gold/10 group hover:-translate-y-1">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={movie.poster} 
            alt={movie.title[language]} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              movie.tag === 'trending' ? 'bg-jafer-red text-white' :
              movie.tag === 'new' ? 'bg-green-600 text-white' :
              movie.tag === 'old' ? 'bg-blue-600 text-white' :
              'bg-purple-600 text-white'
            }`}>
              {translations[language][movie.tag as keyof typeof translations[typeof language]]}
            </span>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-xs text-white font-medium">{movie.rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 text-white group-hover:text-jafer-gold transition-colors">
            {movie.title[language]}
          </h3>
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">{movie.description[language]}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{movie.genre.split(',')[0]}</span>
            <span>{movie.year}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{movie.duration} {translations[language].min}</span>
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
      
      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="mx-auto flex justify-center mb-8 bg-black/40 p-1 rounded-xl border border-gray-700">
          <TabsTrigger value="trending" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].trending}
          </TabsTrigger>
          <TabsTrigger value="new" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].new}
          </TabsTrigger>
          <TabsTrigger value="old" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].old}
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-jafer-gold data-[state=active]:text-black">
            {translations[language].upcoming}
          </TabsTrigger>
        </TabsList>
        
        {['trending', 'new', 'old', 'upcoming'].map((tag) => (
          <TabsContent key={tag} value={tag} className="mt-0">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredMovies(tag).length > 0 ? (
                filteredMovies(tag).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400 text-lg">{translations[language].noResults}</p>
                </div>
              )}
            </div>
            
            {filteredMovies(tag).length > 0 && (
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  className="border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black transition-all duration-300"
                >
                  {translations[language].loadMore}
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
