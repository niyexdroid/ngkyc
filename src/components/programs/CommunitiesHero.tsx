"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, Heart } from "lucide-react";

const CommunitiesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-400/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary-400/60 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-secondary-400/60 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <Sparkles className="h-16 w-16 text-primary-500 animate-pulse-slow" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full animate-bounce-slow"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold gradient-text">
              Our Programs
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-gray-800">
              8 Specialized Programs for Every Interest
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From AI exploration to entrepreneurship, each program is carefully
              designed to nurture specific talents and interests while building
              essential 21st-century skills in a safe, supportive environment.
            </p>
          </div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8"
          >
            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Unique Programs</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary-600 mb-1">
                Ages 5-18+
              </div>
              <div className="text-sm text-gray-600">All Ages Welcome</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent-700" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent-700 mb-1">
                Safe
              </div>
              <div className="text-sm text-gray-600">Moderated Environment</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitiesHero;
