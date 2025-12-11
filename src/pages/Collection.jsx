
import React, { useState, useEffect } from "react";
import { Saying } from "@/entities/Saying";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Plus, BookOpen, Heart, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import SayingCard from "../components/sayings/SayingCard";
import SearchAndFilters from "../components/sayings/SearchAndFilters";

export default function Collection() {
  const [sayings, setSayings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    loadSayings();
  }, []);

  const loadSayings = async () => {
    setLoading(true);
    try {
      const data = await Saying.list("-created_date");
      setSayings(data);
    } catch (error) {
      console.error("Error loading sayings:", error);
    }
    setLoading(false);
  };

  const handleFavoriteToggle = async (saying) => {
    try {
      await Saying.update(saying.id, { 
        ...saying, 
        is_favorite: !saying.is_favorite 
      });
      loadSayings();
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  const handleViewDetails = (saying) => {
    // For now, we'll just scroll to top - in a real app this might open a modal or detail page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter sayings based on search and filters
  const filteredSayings = sayings.filter(saying => {
    const matchesSearch = !searchTerm || 
      saying.phrase.toLowerCase().includes(searchTerm.toLowerCase()) ||
      saying.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || saying.category === selectedCategory;
    const matchesFavorites = !showFavoritesOnly || saying.is_favorite;
    
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || showFavoritesOnly;

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setShowFavoritesOnly(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a9e037dda7ab1a74eb83af/d4be7c51a_20250620_1106_NobleportTokenEmblem_simple_compose_01jy6xyt72e3rr6a4n7geqm37q2.png"
              alt="Nobleport Token"
              className="w-16 h-16 object-contain drop-shadow-xl"
            />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent mb-2">
                Bygone Sayings Collection
              </h1>
              <p className="text-blue-200 text-lg">
                Preserve the wisdom of ages past • Powered by Nobleport
              </p>
            </div>
          </motion.div>
          
          <Link to={createPageUrl("AddSaying")}>
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 border border-amber-400">
              <Plus className="w-5 h-5 mr-2" />
              Add New Saying
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <BookOpen className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300">{sayings.length}</div>
            <div className="text-sm text-blue-200">Total Sayings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300">
              {sayings.filter(s => s.is_favorite).length}
            </div>
            <div className="text-sm text-blue-200">Favorites</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <Quote className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-300">
              {new Set(sayings.map(s => s.category)).size}
            </div>
            <div className="text-sm text-blue-200">Categories</div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            showFavoritesOnly={showFavoritesOnly}
            onFavoritesToggle={() => setShowFavoritesOnly(!showFavoritesOnly)}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </motion.div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-blue-200">
            Showing {filteredSayings.length} of {sayings.length} sayings
          </p>
        </div>

        {/* Sayings Grid */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 animate-pulse">
                <div className="h-6 bg-white/20 rounded mb-4"></div>
                <div className="h-4 bg-white/20 rounded mb-2"></div>
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : filteredSayings.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Quote className="w-16 h-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              {sayings.length === 0 ? "No sayings yet" : "No sayings match your filters"}
            </h3>
            <p className="text-blue-200 mb-6">
              {sayings.length === 0 
                ? "Start your collection by adding your first saying"
                : "Try adjusting your search or filters"}
            </p>
            {sayings.length === 0 && (
              <Link to={createPageUrl("AddSaying")}>
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Saying
                </Button>
              </Link>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredSayings.map((saying, index) => (
                <motion.div
                  key={saying.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SayingCard
                    saying={saying}
                    onFavoriteToggle={handleFavoriteToggle}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
