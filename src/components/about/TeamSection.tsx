"use client";

import { motion } from "framer-motion";
import { Users, Heart, Brain, Zap } from "lucide-react";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Azeezat O Oko-osi",
      role: "Founder & Director of Community",
      description:
        "Visionary leader dedicated to empowering the next generation through innovative programs and community building.",
      image: "/images/team/Azeezat_Oko-osi.jpg",
      color: "from-primary-400 to-primary-600",
    },
    {
      name: "Adaeze Ibik, PhD",
      role: "Head Participants Success",
      description:
        "Committed to ensuring every participant achieves their full potential and has an exceptional learning experience.",
      image: "/images/team/Adaeze_Ibik.jpg",
      color: "from-secondary-400 to-secondary-600",
    },
    {
      name: "Adegbola Adeniyi",
      role: "Head, Technology & Transformation",
      description:
        "Leading technological innovation and digital transformation to create engaging learning experiences.",
      image: "/images/team/IT_Support.jpeg",
      color: "from-accent-400 to-orange-500",
    },
    {
      name: "Natalia Sudakova",
      role: "Admin and Community Manager",
      description:
        "Fostering a vibrant, supportive community while ensuring smooth operations and excellent communication.",
      image: "/images/team/Natalia-Sudakova.jpg",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Abayomi Abass",
      role: "Co-Founder & Non Executive Director",
      description:
        "Strategic advisor and co-founder providing guidance and vision for NGKYC's growth and impact.",
      image: "/images/team/Abayomi_Abass.jpg",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals working together to create exceptional
            learning experiences for your children
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div
                className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden relative`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-600 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Are you passionate about youth education and technology? We&apos;re
            always looking for dedicated volunteers, educators, and mentors to
            join our growing community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Volunteers</h4>
              <p className="text-sm opacity-80">Help moderate communities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Brain className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Educators</h4>
              <p className="text-sm opacity-80">Share your expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Heart className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Mentors</h4>
              <p className="text-sm opacity-80">Guide young minds</p>
            </div>
          </div>
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-not-allowed opacity-60">
            Volunteer Applications - Coming Soon
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
