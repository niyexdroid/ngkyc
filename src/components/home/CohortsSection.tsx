"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const cohorts = [
  {
    id: "gmkr",
    title: "Get My Kid(s) to Read 📚✨",
    subtitle: "Premium Reading Club",
    description:
      "Structured reading program with phonics games, storytelling, and interactive learning.",
    ageRange: "Ages 5-7",
    bgImage: "/images/communities/GMKR_Cohort_Learning.jpg",
    href: "/programs/gmkr",
    isPaid: true,
  },
  {
    id: "sdr-bdr-training",
    title: "SDR/BDR Training + Internship 💻",
    subtitle: "Tech Sales Mastery",
    description:
      "Professional training in sales development with real internship opportunities.",
    ageRange: "18+ Only",
    bgImage: "/images/communities/SDR_BDR_Cohort.jpg",
    href: "/programs/sdr-bdr-training",
    isPaid: true,
  },
];

const CohortsSection = () => {
  return (
    <section className="section-padding bg-white" id="cohorts">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Premium Cohorts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our exclusive premium cohorts with structured curriculum,
            expert instructors, and certification opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cohorts.map((cohort, index) => (
            <motion.div
              key={cohort.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
            >
              <Link href={cohort.href} className="block h-full">
                <div className="h-48 relative overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={cohort.bgImage}
                    alt={`${cohort.title} cohort`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/30 z-[1]"></div>

                  {/* Decorative geometric patterns */}
                  <div className="absolute inset-0 opacity-10 z-[2]">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-8 w-4 h-4 bg-white rounded-sm rotate-45 animate-bounce"></div>
                    <div className="absolute top-8 right-16 w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full z-[3] flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs font-semibold">Premium</span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white z-[3]">
                    <div className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {cohort.ageRange}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {cohort.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 mb-3">
                    {cohort.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {cohort.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Why Join a Premium Cohort?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Structured Curriculum
                  </h4>
                  <p className="text-sm text-gray-600">
                    Step-by-step learning path with clear milestones
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Expert Instructors
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn from industry professionals and certified educators
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Certification
                  </h4>
                  <p className="text-sm text-gray-600">
                    Receive recognized certificates upon completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortsSection;
