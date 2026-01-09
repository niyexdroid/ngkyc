"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/communities/Contact_us.jpg')",
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
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Have questions about our programs? Interested in partnerships or
            volunteering? We&apos;d love to hear from you and help your child
            join our amazing community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <a
                href="mailto:ngkyc8@gmail.com"
                className="text-sm text-gray-200 hover:text-white transition-colors"
              >
                ngkyc8@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
              <div className="text-sm text-gray-200">
                <a
                  href="https://wa.me/16478041399"
                  className="block hover:text-white transition-colors"
                >
                  +1 647 804 1399
                </a>
                <a
                  href="https://wa.me/2348023791213"
                  className="block hover:text-white transition-colors"
                >
                  +234 802 379 1213
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Location</h3>
              <div className="text-sm text-gray-200">
                <p className="font-medium">Global Community</p>
                <p className="text-xs mt-1">Canada & Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
