import React, { useState } from "react";
import { Saying } from "@/entities/Saying";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import SayingForm from "../components/sayings/SayingForm";

export default function AddSaying() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await Saying.create(formData);
      setShowSuccess(true);
      setTimeout(() => {
        navigate(createPageUrl("Collection"));
      }, 1500);
    } catch (error) {
      console.error("Error creating saying:", error);
    }
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    navigate(createPageUrl("Collection"));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white/90 backdrop-blur-sm rounded-xl border border-sage-200 p-8 shadow-lg"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-sage-800 mb-2">Saying Added!</h2>
          <p className="text-sage-600">Your wisdom has been preserved for posterity.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handleCancel}
            className="border-sage-300 text-sage-600 hover:bg-sage-50"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold text-sage-800">Add New Saying</h1>
            <p className="text-sage-600 mt-1">
              Share a piece of wisdom from bygone days
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SayingForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            disabled={isSubmitting}
          />
        </motion.div>
      </div>
    </div>
  );
}