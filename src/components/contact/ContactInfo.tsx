"use client";

import { motion } from "framer-motion";
import { Clock, Globe, Shield, Users } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-4">
            Important Information
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what you need to know about getting started with NGKYC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Clock,
              title: "Response Time",
              description:
                "We typically respond to inquiries within 24-48 hours during business days.",
              color: "from-primary-400 to-primary-600",
            },
            {
              icon: Globe,
              title: "Global Community",
              description:
                "Our programs are accessible worldwide with flexible scheduling options.",
              color: "from-secondary-400 to-secondary-600",
            },
            {
              icon: Shield,
              title: "Safety First",
              description:
                "All programs are moderated and designed with child safety as the top priority.",
              color: "from-accent-400 to-orange-500",
            },
            {
              icon: Users,
              title: "Age Groups",
              description:
                "Programs are tailored for specific age ranges from 5 to 18+ years old.",
              color: "from-purple-400 to-pink-500",
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
                className="card text-center"
              >
                <div
                  className={`h-24 bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-heading font-bold text-center gradient-text mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  How do I enroll my child?
                </h4>
                <p className="text-gray-600 text-sm">
                  Simply fill out our contact form with your child&apos;s
                  information and interests. We&apos;ll guide you through the
                  enrollment process for the most suitable communities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Are the programs really free?
                </h4>
                <p className="text-gray-600 text-sm">
                  Most of our communities are completely free! We do offer some
                  premium programs for specialized training, but we&apos;re
                  working toward scholarships and aid programs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  What safety measures are in place?
                </h4>
                <p className="text-gray-600 text-sm">
                  All interactions are moderated by trained staff, we use
                  age-appropriate platforms, and we follow strict child
                  protection guidelines.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Can my child join multiple communities?
                </h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! Children can participate in multiple communities
                  based on their interests and age group. We encourage
                  exploration across different areas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  What if my child is not tech-savvy?
                </h4>
                <p className="text-gray-600 text-sm">
                  Our programs are designed for all skill levels. We provide
                  support and age-appropriate introductions to help children
                  feel comfortable and confident.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  How can I volunteer or partner with NGKYC?
                </h4>
                <p className="text-gray-600 text-sm">
                  We&apos;re always looking for passionate educators, mentors,
                  and partners. Contact us through the form above to discuss
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
