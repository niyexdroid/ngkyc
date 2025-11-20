"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Users, Globe } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            &ldquo;To create a comprehensive{" "}
            <strong>Creativity, Innovation & Technology Hub</strong> for Kids
            and budding youths, empowering the next generation through
            specialized communities that nurture their unique talents and
            prepare them for tomorrow&apos;s challenges.&rdquo;
          </p>
        </motion.div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-700">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the global leader in youth development, creating a world
              where every child has access to innovative learning experiences
              that unlock their potential and shape them into confident,
              creative, and capable leaders of tomorrow.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary-50 to-green-50 rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary-700">
                Our Values
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                <span>
                  <strong>Innovation:</strong> Fostering creative thinking and
                  problem-solving
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                <span>
                  <strong>Safety:</strong> Providing secure, moderated
                  environments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                <span>
                  <strong>Inclusivity:</strong> Welcoming all children
                  regardless of background
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 mr-2">•</span>
                <span>
                  <strong>Excellence:</strong> Delivering high-quality
                  educational experiences
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* How We Empower */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-8">
            How We Empower Kids & Youth
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Innovation Focus",
              description:
                "Encouraging creative thinking through AI exploration, technology projects, and hands-on learning experiences.",
            },
            {
              icon: Users,
              title: "Community Building",
              description:
                "Creating safe spaces for social interaction, friendship building, and collaborative learning among peers.",
            },
            {
              icon: Target,
              title: "Skill Development",
              description:
                "Building essential 21st-century skills including communication, entrepreneurship, and critical thinking.",
            },
            {
              icon: Globe,
              title: "Global Perspective",
              description:
                "Preparing children for a connected world with diverse cultures, ideas, and opportunities.",
            },
            {
              icon: Heart,
              title: "Emotional Intelligence",
              description:
                "Nurturing empathy, self-awareness, and social skills through guided interactions and activities.",
            },
            {
              icon: Eye,
              title: "Future Readiness",
              description:
                "Equipping kids with skills and mindsets needed to thrive in an ever-changing technological landscape.",
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-100 to-yellow-100 rounded-2xl group-hover:from-accent-200 group-hover:to-yellow-200 transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-accent-600" />
                  </div>
                </div>
                <h4 className="text-lg font-heading font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
