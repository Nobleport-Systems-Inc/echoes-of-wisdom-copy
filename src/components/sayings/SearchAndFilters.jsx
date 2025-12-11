import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  "all", "wisdom", "warning", "advice", "observation", "humor", 
  "love", "work", "family", "friendship", "life", "other"
];

export default function SearchAndFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange,
  showFavoritesOnly,
  onFavoritesToggle,
  onClearFilters,
  hasActiveFilters 
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-sage-200 p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sage-400" />
          <Input
            placeholder="Search sayings..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-sage-300 focus:border-sage-500 focus:ring-sage-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-sage-500" />
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-48 border-sage-300 focus:border-sage-500 focus:ring-sage-500">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Favorites Toggle */}
        <Button
          variant={showFavoritesOnly ? "default" : "outline"}
          onClick={onFavoritesToggle}
          className={`${
            showFavoritesOnly 
              ? 'bg-sage-600 hover:bg-sage-700 text-white' 
              : 'border-sage-300 text-sage-600 hover:bg-sage-50'
          } whitespace-nowrap`}
        >
          Favorites Only
        </Button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={onClearFilters}
            className="text-sage-500 hover:text-sage-700 hover:bg-sage-50"
          >
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4">
          {searchTerm && (
            <Badge variant="secondary" className="bg-sage-100 text-sage-700">
              Search: "{searchTerm}"
            </Badge>
          )}
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="bg-sage-100 text-sage-700">
              Category: {selectedCategory}
            </Badge>
          )}
          {showFavoritesOnly && (
            <Badge variant="secondary" className="bg-sage-100 text-sage-700">
              Favorites only
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}