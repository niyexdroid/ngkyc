"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-400/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary-400/60 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-secondary-400/60 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold gradient-text">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs? Interested in partnerships or
            volunteering? We&apos;d love to hear from you and help your child
            join our amazing community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">hello@ngkyc.org</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-sm text-gray-600">Global Community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
