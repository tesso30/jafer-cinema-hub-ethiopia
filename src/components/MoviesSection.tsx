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
        en: "Parasite",
        am: "ፓራሳይት",
        or: "Paraasaayitii"
      },
      genre: "Thriller, Drama, Black Comedy",
      year: 2019,
      duration: "132",
      rating: 8.6,
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      description: {
        en: "A South Korean masterpiece about class warfare.",
        am: "ስለ ክፍል ጦርነት የደቡብ ኮሪያ ድንቅ ፊልም።",
        or: "Waa'ee waraana kutaa Koreea Kibbaa masterpiece."
      }
    },
    {
      id: 3,
      title: {
        en: "Dune",
        am: "ዱን",
        or: "Duunii"
      },
      genre: "Sci-Fi, Adventure, Drama",
      year: 2021,
      duration: "155",
      rating: 8.0,
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      description: {
        en: "Epic space opera based on Frank Herbert's novel.",
        am: "በፍራንክ ሄርበርት ልብወለድ ላይ የተመሰረተ ኤፒክ የጠፈር ኦፔራ።",
        or: "Walbii Frank Herbert irratti hundaa'e epic space opera."
      }
    },
    {
      id: 4,
      title: {
        en: "Everything Everywhere All at Once",
        am: "ሁሉም ነገር በሁሉም ቦታ በአንድ ጊዜ",
        or: "Wanti Hundi Bakka Hundatti Yeroo Tokkotti"
      },
      genre: "Sci-Fi, Comedy, Action",
      year: 2022,
      duration: "139",
      rating: 7.8,
      tag: "trending",
      poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
      description: {
        en: "A multiverse adventure with emotional depth.",
        am: "ስሜታዊ ጥልቀት ያለው የብዙ አለም ጀብደኝነት።",
        or: "Adventure multiverse miira gadi fagoo qabu."
      }
    },

    {
      id: 5,
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
    },
    {
      id: 6,
      title: {
        en: "Barbie",
        am: "ባርቢ",
        or: "Baarbii"
      },
      genre: "Comedy, Adventure, Fantasy",
      year: 2023,
      duration: "114",
      rating: 6.9,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description: {
        en: "A colorful journey of self-discovery in Barbie Land.",
        am: "በባርቢ ላንድ ውስጥ የራስን ማወቅ ጉዞ።",
        or: "Imala of baqaquu mataa Barbie Land keessatti."
      }
    },
    {
      id: 7,
      title: {
        en: "The Woman King",
        am: "የሴት ንጉስ",
        or: "Dubartii Mootii"
      },
      genre: "Action, Drama, History",
      year: 2022,
      duration: "135",
      rating: 6.9,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BMjE5NDcyNjAyN15BMl5BanBnXkFtZTgwMzkwODI4NzM@._V1_.jpg",
      description: {
        en: "Epic tale of the Agojie warriors of Dahomey.",
        am: "የዳሆሜ አጎጄ ተዋጊዎች ኤፒክ ታሪክ።",
        or: "Seena epic loltoota Agojie Dahomey."
      }
    },
    {
      id: 8,
      title: {
        en: "RRR",
        am: "አር አር አር",
        or: "Aarii Aarii Aarii"
      },
      genre: "Action, Drama, Adventure",
      year: 2022,
      duration: "187",
      rating: 7.9,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description: {
        en: "Indian epic action drama about friendship and revolution.",
        am: "ስለ ወዳጅነት እና አብዮት የህንድ ኤፒክ ድራማ።",
        or: "Drama epic Hindii waa'ee aangoo fi raashii."
      }
    },

    {
      id: 9,
      title: {
        en: "The Godfather",
        am: "ዘ ጎድፋዘር",
        or: "Godfaazerii"
      },
      genre: "Crime, Drama",
      year: 1972,
      duration: "175",
      rating: 9.2,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: {
        en: "The aging patriarch of an organized crime dynasty.",
        am: "የተደራጀ ወንጀል ሥርወ መንግሥት እየረገ ያለ አባት።",
        or: "Abbaa mana mootummaa yakka qindaa'e dulloomaa."
      }
    },
    {
      id: 10,
      title: {
        en: "Seven Samurai",
        am: "ሰባት ሳሙራይ",
        or: "Torba Samuraayii"
      },
      genre: "Action, Drama, Adventure",
      year: 1954,
      duration: "207",
      rating: 8.6,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BMTU4MDgxNzI5M15BMl5BanBnXkFtZTgwODk2NDM5NjE@._V1_.jpg",
      description: {
        en: "Akira Kurosawa's masterpiece about honor and sacrifice.",
        am: "የአኪራ ኩሮሳዋ ስለ ክብር እና መስዋዕትነት ድንቅ ተራማ።",
        or: "Hojii ajaa'ibaa Akira Kurosawa waa'ee ulfina fi aarsaa."
      }
    },
    {
      id: 11,
      title: {
        en: "Citizen Kane",
        am: "ዜጋ ኬን",
        or: "Lammii Keenii"
      },
      genre: "Drama, Mystery",
      year: 1941,
      duration: "119",
      rating: 8.3,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItSzBhOC00Nzg2LTg1OTEtMDhjNTEyODc4YTEyXkEyXkFqcGdeQXVyODkzNTA0ODQ@._V1_.jpg",
      description: {
        en: "Orson Welles' groundbreaking film about power and corruption.",
        am: "የኦርሰን ዌልስ ስለ ሥልጣን እና ሙስና አዲስ ፊልም።",
        or: "Film haaraa Orson Welles waa'ee aangoo fi raashii."
      }
    },
    {
      id: 12,
      title: {
        en: "8½",
        am: "8½",
        or: "8½"
      },
      genre: "Drama, Fantasy",
      year: 1963,
      duration: "138",
      rating: 8.0,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BYzU5ZmJiMGUtNmQ1OS00MGQ1LTk3ZTItOTU2OTZjNmU5NTk1XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
      description: {
        en: "Fellini's surreal exploration of artistic creation.",
        am: "የፈሊኒ ስለ ጥበባዊ ፍጥረት ወጣ ያለ ዳሰሳ።",
        or: "Qorannoo surreal Fellini waa'ee uumsa artiistikii."
      }
    },

    {
      id: 13,
      title: {
        en: "Deadpool 3",
        am: "ዴድፑል 3",
        or: "Deedpuul 3"
      },
      genre: "Action, Comedy, Superhero",
      year: 2024,
      duration: "120",
      rating: 0.0,
      tag: "upcoming",
      poster: "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg",
      description: {
        en: "The merc with a mouth returns in the MCU.",
        am: "በ MCU ውስጥ አፍ ያለው ተዋጊ ተመለሰ።",
        or: "Loltuu afaan qabu MCU keessatti deebi'e."
      }
    },
    {
      id: 14,
      title: {
        en: "Dune: Part Two",
        am: "ዱን: ክፍል ሁለት",
        or: "Duunii: Kutaa Lama"
      },
      genre: "Sci-Fi, Adventure, Drama",
      year: 2024,
      duration: "165",
      rating: 0.0,
      tag: "upcoming",
      poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description: {
        en: "Paul Atreides unites with Chani and the Fremen.",
        am: "ፖል አትሬይድስ ከቻኒ እና ከፍሬመን ጋር ተባበረ።",
        or: "Paul Atreides Chani fi Fremen waliin walitti makame."
      }
    },

    {
      id: 15,
      title: {
        en: "Spirited Away",
        am: "የተነሳሰ",
        or: "Kan Kakaase"
      },
      genre: "Animation, Adventure, Family",
      year: 2001,
      duration: "125",
      rating: 9.3,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description: {
        en: "Miyazaki's magical tale of a girl in a spirit world.",
        am: "የሚያዛኪ ስለ አንዲት ልጃገረድ በመንፈስ አለም ውስጥ አስማታዊ ታሪክ።",
        or: "Seenaa falfalaa Miyazaki waa'ee intalaa addunyaa hafuuraa keessatti."
      }
    },
    {
      id: 16,
      title: {
        en: "Amélie",
        am: "አሜሊ",
        or: "Ameelii"
      },
      genre: "Romance, Comedy, Drama",
      year: 2001,
      duration: "122",
      rating: 8.3,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
      description: {
        en: "A whimsical French film about finding joy in small things.",
        am: "በትንንሽ ነገሮች ውስጥ ደስታን ስለማግኘት የፈረንሳይ ፊልም።",
        or: "Film Faransaayii waa'ee gammachuu wantoota xixiqqoo keessatti argachuu."
      }
    },
    {
      id: 17,
      title: {
        en: "City of God",
        am: "የእግዚአብሔር ከተማ",
        or: "Magaalaa Waaqaa"
      },
      genre: "Crime, Drama",
      year: 2002,
      duration: "130",
      rating: 8.6,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: {
        en: "Brazilian masterpiece about life in Rio's favelas.",
        am: "ስለ ሪዮ ፋቬላስ ሕይወት የብራዚል ድንቅ ፊልም።",
        or: "Masterpiece Baraazil waa'ee jireenya favelas Rio."
      }
    },
    {
      id: 18,
      title: {
        en: "Oldboy",
        am: "ኦልድቦይ",
        or: "Ooldbooyii"
      },
      genre: "Thriller, Drama, Mystery",
      year: 2003,
      duration: "120",
      rating: 8.4,
      tag: "old",
      poster: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg",
      description: {
        en: "Korean revenge thriller that redefined cinema.",
        am: "ሲኒማን እንደገና የተወሰነ ኮሪያዊ የበቀል ፊልም።",
        or: "Film haaloo Koreeyaa kan siinimaa irra deebi'e ibse."
      }
    },
    {
      id: 19,
      title: {
        en: "Roma",
        am: "ሮማ",
        or: "Roomaa"
      },
      genre: "Drama",
      year: 2018,
      duration: "135",
      rating: 7.7,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BMTA2Njg2MTI2MTZeQTJeQWpwZ15BdWU4MDkzNDA5NTAz._V1_.jpg",
      description: {
        en: "Cuarón's personal tribute to his childhood nanny.",
        am: "የኩአሮን ለልጅነት እናታቸው ግላዊ ክብር።",
        or: "Kabaja dhuunfaa Cuarón haadha ijoolummaa isaatiif."
      }
    },
    {
      id: 20,
      title: {
        en: "The Handmaiden",
        am: "ዘ ሃንድሜይደን",
        or: "Handimeyidenii"
      },
      genre: "Drama, Romance, Thriller",
      year: 2016,
      duration: "145",
      rating: 8.1,
      tag: "new",
      poster: "https://m.media-amazon.com/images/M/MV5BYTczMzU0NDY2N15BMl5BanBnXkFtZTgwMTMyNDMzOTE@._V1_.jpg",
      description: {
        en: "Park Chan-wook's erotic psychological thriller.",
        am: "የፓርክ ቻን-ዉክ ኤሮቲክ ሳይኮሎጂካል ስሪላር።",
        or: "Thriller saayikoolojikaalii erotic Park Chan-wook."
      }
    }
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
