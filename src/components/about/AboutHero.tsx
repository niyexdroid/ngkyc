"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Users } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/communities/about_us.jpeg')",
          backgroundSize: "cover",
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white drop-shadow-lg">
              About NGKYC
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-white drop-shadow-lg">
              Empowering Tomorrow&apos;s Leaders Today
            </h2>
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              NGKYC (Next Gen Kids & Youth Club) is more than just an
              educational platform – we&apos;re a comprehensive creativity,
              innovation, and technology hub designed specifically for young
              minds aged 5-18+.
            </p>
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Started as a SAAS EDJE Initiative but with less privileged kids
              inclusion in mind, NGKYC is evolving to become a registered
              charity/NGO
            </p>
            <p className="text-base font-semibold text-primary-700 max-w-4xl mx-auto">
              Be Part of the Change
            </p>
            <p className="text-base text-gray-600 max-w-4xl mx-auto">
              While we work towards our registered charity/NGO status,
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
              <div className="text-sm text-gray-600">
                Specialized Communities
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-secondary-600 mb-1">
                Safe
              </div>
              <div className="text-sm text-gray-600">Learning Environment</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent-700" />
                </div>
              </div>
              <div className="text-2xl font-bold text-accent-700 mb-1">
                Future
              </div>
              <div className="text-sm text-gray-600">Ready Skills</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
