"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="container-max mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Ready to Join the Future?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Start your child&apos;s journey today with NGKYC. Explore our
            communities, connect with like-minded families, and help shape the
            next generation of innovators and leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/communities"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              Explore Communities
              <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Mail className="mr-2 h-5 w-5 inline" />
              Get in Touch
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              Join thousands of families already part of the NGKYC community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
