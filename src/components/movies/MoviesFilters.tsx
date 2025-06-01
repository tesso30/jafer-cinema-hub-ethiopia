
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List, RefreshCw } from "lucide-react";
import { Language, moviesTranslations } from '@/utils/moviesTranslations';

interface MoviesFiltersProps {
  language: Language;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  sortBy: 'title' | 'year' | 'rating';
  setSortBy: (sort: 'title' | 'year' | 'rating') => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export default function MoviesFilters({
  language,
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  onRefresh,
  isRefreshing
}: MoviesFiltersProps) {
  const translations = moviesTranslations[language];

  return (
    <div className="max-w-4xl mx-auto mb-6 sm:mb-8 space-y-3 sm:space-y-4">
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
        <Input
          type="search"
          placeholder={translations.search}
          className="pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-black/40 border-gray-700 focus:border-jafer-gold text-sm sm:text-lg rounded-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label={translations.search}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as 'title' | 'year' | 'rating')}
              className="bg-black/40 border border-gray-700 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm focus:border-jafer-gold focus:outline-none w-full sm:w-auto"
              aria-label={translations.sortBy}
            >
              <option value="title">{translations.sortBy}: Title</option>
              <option value="year">{translations.sortBy}: {translations.year}</option>
              <option value="rating">{translations.sortBy}: {translations.rating}</option>
            </select>
          </div>
          
          <Button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="bg-jafer-gold hover:bg-jafer-darkgold text-black text-xs sm:text-sm w-full sm:w-auto"
            size="sm"
          >
            <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">
              {isRefreshing ? translations.fetchingMovies : translations.refreshMovies}
            </span>
            <span className="sm:hidden">Refresh</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-gray-700 w-full sm:w-auto justify-center sm:justify-start">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={`text-xs sm:text-sm ${viewMode === 'grid' ? 'bg-jafer-gold text-black' : 'text-gray-400 hover:text-white'}`}
            aria-label={translations.gridView}
          >
            <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className={`text-xs sm:text-sm ${viewMode === 'list' ? 'bg-jafer-gold text-black' : 'text-gray-400 hover:text-white'}`}
            aria-label={translations.listView}
          >
            <List className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
