"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/communities/Home-pix.png')",
          backgroundSize: "100%",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <Sparkles className="h-16 w-16 text-primary-500 animate-pulse-slow" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full animate-bounce-slow"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary-500 rounded-full animate-float"></div>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold">
              <span className="text-white drop-shadow-lg">NGKYC</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-white drop-shadow-lg">
              Next Gen Kids & Youth Club
            </h2>
            <p className="text-lg sm:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Creativity, Innovation, Learning & Technology Hub for Kids and
              budding youths
            </p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Empowering the next generation through 8 specialized Sub-communities
            designed to nurture creativity, innovation, and technological
            excellence. From AI exploration to entrepreneurship, we&apos;re
            building the future leaders of tomorrow.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-sm text-gray-200">Sub-Communities</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">Ages 5-18+</div>
              <div className="text-sm text-gray-200">Age Range</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">Future Ready</div>
              <div className="text-sm text-gray-200">Innovation</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/programs"
              className="btn-primary group w-full sm:w-auto inline-flex items-center justify-center"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="btn-outline w-full sm:w-auto inline-flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center items-start pt-2">
                <div className="w-1 h-3 bg-primary-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
