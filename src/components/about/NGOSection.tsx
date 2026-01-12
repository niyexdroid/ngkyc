"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Globe,
  DollarSign,
  Handshake,
  Award,
} from "lucide-react";

const NGOSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-6">
            Evolving Into an NPO
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            NGKYC is on a journey to become a registered charity or non-profit
            organization(NPO) , expanding our mission to create broader
            community impact through donations, partnerships, and volunteer
            programs.
          </p>
        </motion.div>

        {/* NGO Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "Expanding our programs to reach underserved communities worldwide, providing equal access to quality education.",
            },
            {
              icon: DollarSign,
              title: "Donation Programs",
              description:
                "Creating sustainable funding models to support free programs for children from low-income families.",
            },
            {
              icon: Handshake,
              title: "Corporate Partnerships",
              description:
                "Collaborating with technology companies and educational institutions to enhance our offerings.",
            },
            {
              icon: Users,
              title: "Volunteer Network",
              description:
                "Building a global network of educators, mentors, and professionals dedicated to youth development.",
            },
            {
              icon: Award,
              title: "Scholarships",
              description:
                "Providing merit-based scholarships for exceptional young learners to access premium programs.",
            },
            {
              icon: Heart,
              title: "Community Impact",
              description:
                "Creating measurable positive change in communities through structured educational initiatives.",
            },
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-6">
            Be Part of the Change
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            While we work towards our NGO status, you can already be part of our
            mission. Join our community, share your expertise, or simply spread
            the word about what we&apos;re building together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-primary-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Partner With Us
              </h4>
              <p className="text-xs text-gray-600">Corporate partnerships</p>
            </div>
            <div className="bg-secondary-50 rounded-xl p-4">
              <div className="text-2xl mb-2">💝</div>
              <h4 className="font-semibold text-gray-800 mb-1">Donate</h4>
              <p className="text-xs text-gray-600">Support our mission</p>
            </div>
            <div className="bg-accent-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🌟</div>
              <h4 className="font-semibold text-gray-800 mb-1">Volunteer</h4>
              <p className="text-xs text-gray-600">Share your time</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-2xl mb-2">📢</div>
              <h4 className="font-semibold text-gray-800 mb-1">Advocate</h4>
              <p className="text-xs text-gray-600">Spread awareness</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-outline cursor-not-allowed opacity-60">
              Partnership Inquiries - Coming Soon
            </button>
            <button className="btn-outline cursor-not-allowed opacity-60">
              Donation Portal - Coming Soon
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NGOSection;
