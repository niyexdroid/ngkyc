"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CommunityData {
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  pricing: string;
  color: string;
  quote: string;
}

interface CommunityHeroProps {
  data: CommunityData;
}

const CommunityHero = ({ data }: CommunityHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-10`}
      >
        <div className="absolute top-20 left-10 w-16 h-16 bg-current rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-current rounded-full animate-bounce-slow opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-current rounded-full animate-pulse-slow opacity-30"></div>
      </div>

      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/programs"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Programs
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-800">
              {data.title}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary-600">
              {data.subtitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Community Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8"
          >
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Age Range</h3>
              <p className="text-primary-600 font-medium">{data.ageRange}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-1">Pricing</h3>
              <p className="text-secondary-600 font-medium">{data.pricing}</p>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <blockquote className="text-lg italic text-gray-600 max-w-3xl mx-auto">
              {data.quote}
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHero;
