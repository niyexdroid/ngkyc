"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Users, Zap, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI & Technology",
    description:
      "Hands-on experience with cutting-edge technology in age-appropriate formats",
  },
  {
    icon: Heart,
    title: "Social Skills",
    description:
      "Safe spaces to build friendships and develop emotional intelligence",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Collaborative learning environment with peer support and mentorship",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description:
      "Encouraging creative thinking and innovative problem-solving approaches",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Moderated, secure spaces designed specifically for young learners",
  },
  {
    icon: Star,
    title: "Future Ready",
    description:
      "Building skills and mindsets needed for tomorrow&apos;s challenges",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Why Choose NGKYC?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re more than just a learning platform – we&apos;re a
            community dedicated to nurturing the next generation of innovators,
            creators, and leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* NGO Future Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-4">
            Growing Into an NGO
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            NGKYC is evolving to become a non-governmental organization focused
            on community impact, donations, and volunteer opportunities to reach
            more children worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Global Impact
              </h4>
              <p className="text-sm text-gray-600">
                Reaching children across communities worldwide
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Volunteer Network
              </h4>
              <p className="text-sm text-gray-600">
                Building a community of passionate educators
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">💝</div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Donation Programs
              </h4>
              <p className="text-sm text-gray-600">
                Supporting underprivileged children&apos;s education
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="btn-outline cursor-not-allowed opacity-60">
              Donation Program - Coming Soon
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
