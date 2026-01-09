"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CommunityData {
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  pricing: string;
  color: string;
  quote: string;
}

interface CommunitySignupProps {
  data: CommunityData;
  googleFormUrl?: string;
}

const CommunitySignup = ({ data, googleFormUrl }: CommunitySignupProps) => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-6">
                Ready to Join{" "}
                {data.title.replace(/[🤖💬📚✨🌟🚀💼🎯💻]/g, "").trim()}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Take the first step in your child&apos;s journey with our{" "}
                {data.subtitle.toLowerCase()}. Fill out the form to get started
                and we&apos;ll be in touch with next steps.
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-gray-800 mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-primary-600">
                      1
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We&apos;ll review your application within 24-48 hours
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-secondary-600">
                      2
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    You&apos;ll receive an invitation with community guidelines
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-accent-600">
                      3
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your child can start participating in activities right away!
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-gray-800 mb-2">
                💰 Community Pricing
              </h3>
              <p className="text-lg font-semibold text-primary-600">
                {data.pricing}
              </p>
              {data.pricing.includes("Free") && (
                <p className="text-sm text-gray-600 mt-2">
                  No hidden fees, completely free to join and participate!
                </p>
              )}
              {data.pricing.includes("Premium") && (
                <p className="text-sm text-gray-600 mt-2">
                  Premium service with specialized instruction and materials
                  included.
                  <br />
                  <em>Payment processing coming soon - join our waitlist!</em>
                </p>
              )}
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-6 text-center">
                Join {data.title.replace(/[🤖💬📚✨🌟🚀💼🎯💻]/g, "").trim()}
              </h3>
              {googleFormUrl ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>
                        To participate in one or more of our programs (Free &
                        Premium):
                      </strong>
                    </p>
                  </div>
                  <p className="text-gray-600 text-center">
                    Click the button below to fill out our registration form and
                    join the community!
                  </p>
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-flex items-center justify-center group"
                  >
                    Open Registration Form
                    <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="text-sm text-gray-500 text-center">
                    The form will open in a new tab
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-600">
                  <p>Registration form coming soon!</p>
                  <p className="text-sm mt-2">
                    Check back later or contact us for more information.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySignup;
