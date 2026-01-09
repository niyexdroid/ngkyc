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
  members?: string;
  channels?: Array<{ name: string; type: string }>;
  color: string;
  quote: string;
}

interface CommunityHeroProps {
  data: CommunityData;
  backgroundImage?: string;
  backgroundSize?: string;
}

const CommunityHero = ({
  data,
  backgroundImage,
  backgroundSize = "150%",
}: CommunityHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: backgroundSize,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-10`}
        >
          <div className="absolute top-20 left-10 w-16 h-16 bg-current rounded-full animate-float opacity-30"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-current rounded-full animate-bounce-slow opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-current rounded-full animate-pulse-slow opacity-30"></div>
        </div>
      )}

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
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-heading font-bold ${
                backgroundImage ? "text-white drop-shadow-lg" : "text-gray-800"
              }`}
            >
              {data.title}
            </h1>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl font-heading font-semibold ${
                backgroundImage
                  ? "text-white drop-shadow-lg"
                  : "text-primary-600"
              }`}
            >
              {data.subtitle}
            </h2>
            <p
              className={`text-lg max-w-4xl mx-auto leading-relaxed ${
                backgroundImage ? "text-white drop-shadow-lg" : "text-gray-600"
              }`}
            >
              {data.description}
            </p>
          </div>

          {/* Community Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto pt-8"
          >
            <div
              className={`grid grid-cols-1 ${
                data.members ? "sm:grid-cols-3" : "sm:grid-cols-2"
              } gap-6 ${data.channels ? "mb-6" : ""}`}
            >
              <div
                className={`rounded-xl p-4 shadow-lg ${
                  backgroundImage ? "bg-white/20 backdrop-blur-sm" : "bg-white"
                }`}
              >
                <h3
                  className={`font-semibold mb-1 ${
                    backgroundImage ? "text-white" : "text-gray-800"
                  }`}
                >
                  Age Range
                </h3>
                <p
                  className={`font-medium ${
                    backgroundImage ? "text-gray-200" : "text-primary-600"
                  }`}
                >
                  {data.ageRange}
                </p>
              </div>
              <div
                className={`rounded-xl p-4 shadow-lg ${
                  backgroundImage ? "bg-white/20 backdrop-blur-sm" : "bg-white"
                }`}
              >
                <h3
                  className={`font-semibold mb-1 ${
                    backgroundImage ? "text-white" : "text-gray-800"
                  }`}
                >
                  Pricing
                </h3>
                <p
                  className={`font-medium ${
                    backgroundImage ? "text-gray-200" : "text-secondary-600"
                  }`}
                >
                  {data.pricing}
                </p>
              </div>
              {data.members && (
                <div
                  className={`rounded-xl p-4 shadow-lg ${
                    backgroundImage
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-white"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-1 ${
                      backgroundImage ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Community
                  </h3>
                  <p
                    className={`font-medium ${
                      backgroundImage ? "text-gray-200" : "text-accent-600"
                    }`}
                  >
                    {data.members}
                  </p>
                </div>
              )}
            </div>

            {/* Channels Section */}
            {data.channels && (
              <div
                className={`rounded-xl p-6 shadow-lg ${
                  backgroundImage ? "bg-white/20 backdrop-blur-sm" : "bg-white"
                }`}
              >
                <h3
                  className={`font-semibold mb-4 text-center ${
                    backgroundImage ? "text-white" : "text-gray-800"
                  }`}
                >
                  Available Channels
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {data.channels.map((channel, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <p className="font-semibold text-gray-800 mb-1">
                        {channel.name}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          channel.type === "Free"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {channel.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <blockquote
              className={`text-lg italic max-w-3xl mx-auto ${
                backgroundImage ? "text-white drop-shadow-lg" : "text-gray-600"
              }`}
            >
              {data.quote}
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHero;
