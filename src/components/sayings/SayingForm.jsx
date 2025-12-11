import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Save, X } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "wisdom", "warning", "advice", "observation", "humor", 
  "love", "work", "family", "friendship", "life", "other"
];

export default function SayingForm({ saying, onSubmit, onCancel, isEditing = false }) {
  const [formData, setFormData] = useState(saying || {
    phrase: "",
    meaning: "",
    category: "wisdom",
    origin: "",
    example_usage: "",
    is_favorite: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-lg">
        <CardHeader className="border-b border-sage-200">
          <CardTitle className="flex items-center gap-3 text-xl text-sage-800">
            <BookOpen className="w-6 h-6 text-sage-600" />
            {isEditing ? 'Edit Saying' : 'Add New Saying'}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phrase" className="text-sm font-semibold text-sage-700">
                The Saying *
              </Label>
              <Input
                id="phrase"
                value={formData.phrase}
                onChange={(e) => handleInputChange('phrase', e.target.value)}
                placeholder="e.g., The grass is not always greener on the other side"
                className="text-lg border-sage-300 focus:border-sage-500 focus:ring-sage-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="meaning" className="text-sm font-semibold text-sage-700">
                Meaning & Explanation *
              </Label>
              <Textarea
                id="meaning"
                value={formData.meaning}
                onChange={(e) => handleInputChange('meaning', e.target.value)}
                placeholder="Explain what this saying means and the wisdom it conveys..."
                className="min-h-24 border-sage-300 focus:border-sage-500 focus:ring-sage-500"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-semibold text-sage-700">
                  Category
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleInputChange('category', value)}
                >
                  <SelectTrigger className="border-sage-300 focus:border-sage-500 focus:ring-sage-500">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="origin" className="text-sm font-semibold text-sage-700">
                  Origin (optional)
                </Label>
                <Input
                  id="origin"
                  value={formData.origin}
                  onChange={(e) => handleInputChange('origin', e.target.value)}
                  placeholder="e.g., Ancient proverb, Folk wisdom"
                  className="border-sage-300 focus:border-sage-500 focus:ring-sage-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="example" className="text-sm font-semibold text-sage-700">
                Example Usage (optional)
              </Label>
              <Textarea
                id="example"
                value={formData.example_usage}
                onChange={(e) => handleInputChange('example_usage', e.target.value)}
                placeholder="Provide an example of when someone might use this saying..."
                className="min-h-20 border-sage-300 focus:border-sage-500 focus:ring-sage-500"
              />
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-sage-200">
              {onCancel && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  className="border-sage-300 text-sage-600 hover:bg-sage-50"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
              <Button 
                type="submit"
                className="bg-sage-600 hover:bg-sage-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {isEditing ? 'Update Saying' : 'Save Saying'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}