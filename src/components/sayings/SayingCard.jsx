
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Quote } from "lucide-react";

const categoryColors = {
  wisdom: "bg-emerald-100 text-emerald-700",
  warning: "bg-red-100 text-red-700",
  advice: "bg-blue-100 text-blue-700",
  observation: "bg-purple-100 text-purple-700",
  humor: "bg-yellow-100 text-yellow-700",
  love: "bg-pink-100 text-pink-700",
  work: "bg-gray-100 text-gray-700",
  family: "bg-orange-100 text-orange-700",
  friendship: "bg-cyan-100 text-cyan-700",
  life: "bg-indigo-100 text-indigo-700",
  other: "bg-slate-100 text-slate-700"
};

export default function SayingCard({ saying, onFavoriteToggle, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group"
    >
      <Card className="bg-white/10 backdrop-blur-xl hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-white/20 hover:border-white/30 cursor-pointer h-full">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <Quote className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg text-yellow-200 leading-relaxed group-hover:text-yellow-100 transition-colors">
                  "{saying.phrase}"
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${categoryColors[saying.category]} border-0 text-xs font-medium backdrop-blur-sm`}>
                  {saying.category}
                </Badge>
                {saying.origin && (
                  <Badge variant="outline" className="text-xs text-blue-200 border-white/30 bg-white/5 backdrop-blur-sm">
                    {saying.origin}
                  </Badge>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle(saying);
              }}
              className={`${
                saying.is_favorite 
                  ? 'text-pink-400 hover:text-pink-300' 
                  : 'text-blue-300 hover:text-pink-400'
              } transition-colors backdrop-blur-sm`}
            >
              <Heart 
                className={`w-4 h-4 ${saying.is_favorite ? 'fill-current' : ''}`} 
              />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent 
          className="pt-0 cursor-pointer"
          onClick={() => onViewDetails(saying)}
        >
          <div className="space-y-4">
            <div className="border-l-4 border-amber-400 pl-4 bg-white/5 rounded-r-lg py-3 backdrop-blur-sm">
              <p className="text-blue-100 leading-relaxed italic">
                {saying.meaning}
              </p>
            </div>
            
            {saying.example_usage && (
              <div className="pt-2">
                <p className="text-xs font-medium text-blue-300 uppercase tracking-wide mb-2">Example</p>
                <p className="text-sm text-blue-200 leading-relaxed">
                  {saying.example_usage}
                </p>
              </div>
            )}
            
            <div className="flex items-center justify-between pt-2 text-xs text-blue-400">
              <span>Click to view details</span>
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
