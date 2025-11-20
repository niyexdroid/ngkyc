"use client";

import { motion } from "framer-motion";
import SignupForm from "@/components/SignupForm";

const ContactForm = () => {
  const handleFormSubmit = (data: any) => {
    // Handle contact form submission
    console.log("Contact form submitted:", data);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <SignupForm
                communityName="NGKYC Contact"
                onSubmit={handleFormSubmit}
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you&apos;re a parent looking for the perfect community
                for your child, an educator interested in collaboration, or a
                partner wanting to support our mission, we&apos;re here to help.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-primary-800 mb-2">
                  🎯 Program Inquiries
                </h3>
                <p className="text-primary-700 text-sm">
                  Questions about our communities, age requirements, or how to
                  get started
                </p>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-secondary-800 mb-2">
                  🤝 Partnership Opportunities
                </h3>
                <p className="text-secondary-700 text-sm">
                  Interested in collaborating with us or supporting our mission
                  as we grow into an NGO
                </p>
              </div>

              <div className="bg-accent-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-accent-800 mb-2">
                  🌟 Volunteer Interest
                </h3>
                <p className="text-accent-700 text-sm">
                  Want to contribute your expertise as a mentor, educator, or
                  community moderator
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-purple-800 mb-2">
                  💡 General Questions
                </h3>
                <p className="text-purple-700 text-sm">
                  Any other questions or feedback about NGKYC and our programs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
