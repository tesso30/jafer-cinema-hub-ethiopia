
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  tag: 'trending' | 'new' | 'old' | 'upcoming';
  poster: string;
}

export default function MoviesSection({ language }: MoviesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const translations = {
    en: {
      title: "Browse Our Movie Collection",
      subtitle: "Find your favorite movies to transfer during your next visit",
      trending: "Trending",
      new: "New",
      old: "Old",
      upcoming: "Upcoming",
      search: "Search movies by title, genre, or year...",
      min: "min"
    },
    am: {
      title: "የሚያስደስቱትን ፊልሞች ይፈልጉ",
      subtitle: "በሚቀጥለው ጉብኝትዎ መመላለስ የሚፈልጓቸውን ፊልሞች ያግኙ",
      trending: "ተወዳጅ",
      new: "አዲስ",
      old: "ያረጀ",
      upcoming: "የሚመጣ",
      search: "በርዕስ፣ በዓይነት ወይም በዓመት ፊልሞችን ይፈልጉ...",
      min: "ደቂቃ"
    },
    or: {
      title: "Filmiiwwan Keenya Daawwadhu",
      subtitle: "Daawwannaa kee itti aanutti dabarsuu barbaaddu filmi kee argadhu",
      trending: "Beekamaa",
      new: "Haaraa",
      old: "Moofaa",
      upcoming: "Dhufaa jiru",
      search: "Mata-duree, akaakuu ykn waggaatiin fiilmii barbaadi...",
      min: "daqiiqaa"
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
      genre: "Action, Adventure",
      year: 2019,
      duration: "181",
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
    },
    {
      id: 2,
      title: {
        en: "Oppenheimer",
        am: "ኦፔንሃይመር",
        or: "Oppenhayimerii"
      },
      genre: "Biography, Drama",
      year: 2023,
      duration: "180",
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id: 3,
      title: {
        en: "The Godfather",
        am: "ጎድፋዘር",
        or: "Goodfaazerii"
      },
      genre: "Crime, Drama",
      year: 1972,
      duration: "175",
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 4,
      title: {
        en: "Dune: Part Two",
        am: "ዱን: ክፍል ሁለት",
        or: "Duuni: Kutaa Lama"
      },
      genre: "Sci-Fi, Adventure",
      year: 2024,
      duration: "166",
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYjMtMGJiZjY2NjA5YWM2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
      id: 5,
      title: {
        en: "The Dark Knight",
        am: "ዘ ዳርክ ናይት",
        or: "Dhi Daarkii Nayitii"
      },
      genre: "Action, Crime, Drama",
      year: 2008,
      duration: "152",
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
      id: 6,
      title: {
        en: "The Garfield Movie",
        am: "የጋርፊልድ ፊልም",
        or: "Fiilmii Gaarfiildi"
      },
      genre: "Animation, Adventure",
      year: 2024,
      duration: "101",
      tag: "upcoming",
      poster: "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      id: 7,
      title: {
        en: "Gladiator II",
        am: "ግላዲዬተር 2",
        or: "Glaadiyeeterii 2"
      },
      genre: "Action, Drama, History",
      year: 2024,
      duration: "155",
      tag: "upcoming",
      poster: "https://m.media-amazon.com/images/M/MV5BNWZiM2Q1MzYtMDc5Zi00Y2VlLWE4OTItMzljNDRlZDgwZDQ5XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg"
    },
    {
      id: 8,
      title: {
        en: "Barbie",
        am: "ባርቢ",
        or: "Baarbii"
      },
      genre: "Adventure, Comedy",
      year: 2023,
      duration: "114",
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    }
  ];

  const filteredMovies = (tag: string) => {
    return movies
      .filter(movie => {
        if (tag !== 'all') {
          return movie.tag === tag;
        }
        return true;
      })
      .filter(movie => {
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            movie.title[language].toLowerCase().includes(searchLower) ||
            movie.genre.toLowerCase().includes(searchLower) ||
            movie.year.toString().includes(searchLower)
          );
        }
        return true;
      });
  };

  return (
    <section id="movies" className="section-container bg-jafer-darker">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={translations[language].search}
          className="pl-10 bg-black/30 border-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="trending">
        <TabsList className="mx-auto flex justify-center mb-8 bg-black/30 p-1 rounded-full">
          <TabsTrigger value="trending">{translations[language].trending}</TabsTrigger>
          <TabsTrigger value="new">{translations[language].new}</TabsTrigger>
          <TabsTrigger value="old">{translations[language].old}</TabsTrigger>
          <TabsTrigger value="upcoming">{translations[language].upcoming}</TabsTrigger>
        </TabsList>
        
        {['trending', 'new', 'old', 'upcoming'].map((tag) => (
          <TabsContent key={tag} value={tag} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMovies(tag).map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-black/30 rounded-lg overflow-hidden card-hover border border-gray-800"
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img 
                      src={movie.poster} 
                      alt={movie.title[language]} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`
                        px-2 py-1 text-xs font-semibold rounded-full
                        ${movie.tag === 'trending' ? 'bg-jafer-red text-white' : ''}
                        ${movie.tag === 'new' ? 'bg-green-600 text-white' : ''}
                        ${movie.tag === 'old' ? 'bg-blue-600 text-white' : ''}
                        ${movie.tag === 'upcoming' ? 'bg-purple-600 text-white' : ''}
                      `}>
                        {translations[language][movie.tag as keyof typeof translations[typeof language]]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1 text-white">{movie.title[language]}</h3>
                    <p className="text-sm text-gray-400 mb-2">{movie.genre} • {movie.year}</p>
                    <p className="text-sm text-gray-500">{movie.duration} {translations[language].min}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
