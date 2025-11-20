"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Target } from "lucide-react";

interface CommunityData {
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  pricing: string;
  color: string;
  quote: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  activities?: string[];
}

interface CommunityContentProps {
  data: CommunityData;
}

const CommunityContent = ({ data }: CommunityContentProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-8">
              What You&apos;ll Experience
            </h2>
            <div className="space-y-6">
              {data.features?.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-secondary-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )) || (
                <div className="text-center py-8">
                  <p className="text-gray-500">Features coming soon...</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-8">
              Activities & Programs
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {data.activities?.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-800 font-medium">
                      {activity}
                    </span>
                  </div>
                </motion.div>
              )) || (
                <div className="text-center py-8">
                  <p className="text-gray-500">Activities coming soon...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                24/7
              </h3>
              <p className="text-gray-600">Community Access</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-accent-600 mb-2">100%</h3>
              <p className="text-gray-600">Safe Environment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityContent;
