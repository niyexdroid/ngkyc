"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  Sparkles,
  Sun,
  Snowflake,
  Star,
  Bell,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const CampsPage = () => {
  const camps = [
    {
      id: "summer-camp",
      title: "Summer Camp 2026",
      icon: Sun,
      season: "Summer",
      dates: "July - August 2026",
      duration: "8 weeks",
      status: "Registration Opening Soon",
      description:
        "Join us for an unforgettable summer adventure! Our gamified learning summer camp transforms education into an exciting journey where kids explore technology, creativity, and innovation through interactive games, challenges, and collaborative projects.",
      highlights: [
        "Gamified learning experiences",
        "Technology & coding workshops",
        "Creative arts & design projects",
        "Team challenges & competitions",
        "Leadership development activities",
        "Weekly themed adventures",
        "Expert instructors & mentors",
        "End-of-camp showcase event",
      ],
      ageGroups: [
        "Ages 5-8: Junior Explorers",
        "Ages 9-12: Tech Innovators",
        "Ages 13-16: Digital Leaders",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      id: "march-break-camp",
      title: "March Break Camp 2026",
      icon: Snowflake,
      season: "Spring",
      dates: "Mid-March 2026",
      duration: "1 week",
      status: "Coming Soon",
      description:
        "Make the most of your March break with our action-packed gamified learning camp! Experience a week of hands-on learning, creative exploration, and fun activities designed to keep young minds engaged and excited during the school break.",
      highlights: [
        "Interactive learning games",
        "STEM challenges & experiments",
        "Digital arts & multimedia projects",
        "Problem-solving competitions",
        "Collaborative team activities",
        "Daily exciting themes",
        "Achievement badges & rewards",
        "Parent showcase presentation",
      ],
      ageGroups: [
        "Ages 5-8: Spring Adventurers",
        "Ages 9-12: Innovation Squad",
        "Ages 13-16: Tech Pioneers",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: "midterm-camp",
      title: "Mid-Term Camp",
      icon: Clock,
      season: "Various",
      dates: "Throughout the Year",
      duration: "2-3 days",
      status: "Coming Soon",
      description:
        "Perfect for school breaks! Our intensive mid-term camps offer focused learning experiences packed into 2-3 days. Kids dive deep into specific topics through gamified activities, gaining new skills while having tons of fun with peers.",
      highlights: [
        "Intensive skill-building sessions",
        "Topic-focused learning modules",
        "Fast-paced gamified challenges",
        "Hands-on project work",
        "Peer collaboration activities",
        "Quick-win achievements",
        "Flexible scheduling options",
        "Take-home projects & certificates",
      ],
      ageGroups: [
        "Ages 6-10: Quick Learners",
        "Ages 11-14: Skill Builders",
        "Ages 15-16: Express Track",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      id: "special-camps",
      title: "Special Camps",
      icon: Star,
      season: "Exclusive",
      dates: "Announced on Community Platforms",
      duration: "Varies",
      status: "Stay Tuned",
      description:
        "Watch out for our special themed camps! We regularly organize unique, limited-edition camps focused on trending topics, special events, and seasonal celebrations. These exclusive experiences offer kids the chance to explore new interests in a fun, gamified environment.",
      highlights: [
        "Exclusive themed experiences",
        "Limited-time special events",
        "Holiday & celebration camps",
        "Guest speakers & experts",
        "Unique learning opportunities",
        "Community collaboration events",
        "Special achievement prizes",
        "Early-bird registration perks",
      ],
      ageGroups: [
        "All Ages Welcome",
        "Customized group sessions",
        "Family participation events",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Gamified Learning",
      description:
        "Every camp activity is designed as an engaging game, making learning fun, interactive, and rewarding for all participants.",
    },
    {
      icon: Users,
      title: "Expert Facilitators",
      description:
        "Our experienced instructors and mentors guide kids through exciting challenges while ensuring safety and quality education.",
    },
    {
      icon: CheckCircle,
      title: "Safe Environment",
      description:
        "We provide a secure, supervised, and nurturing environment where kids can explore, learn, and grow with confidence.",
    },
    {
      icon: Bell,
      title: "Regular Updates",
      description:
        "Stay informed about upcoming camps, registration dates, and special events through our community platforms and newsletters.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/communities/Camps.jpg')",
            backgroundSize: "130%",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
              Gamified Learning Camps
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
              Where Learning Meets Adventure! Experience education like never
              before through exciting, game-based camps designed for kids and
              teens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://forms.gle/NakPm7YUyQBcH87z9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Register Interest</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2 border-2 border-white/50"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Camps Grid Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
              Our Camp Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our exciting range of gamified learning camps designed
              to inspire, educate, and entertain.
            </p>
          </motion.div>

          <div className="space-y-8">
            {camps.map((camp, index) => {
              const IconComponent = camp.icon;
              return (
                <motion.div
                  key={camp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column - Camp Info */}
                    <div
                      className={`${camp.bgColor} p-8 flex flex-col justify-between`}
                    >
                      <div>
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${camp.color} text-white mb-4`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                          {camp.title}
                        </h3>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${camp.textColor} bg-white mb-4`}
                        >
                          {camp.status}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-gray-700">
                            <Calendar className="h-5 w-5" />
                            <span className="font-medium">{camp.dates}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-700">
                            <Clock className="h-5 w-5" />
                            <span className="font-medium">{camp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-700">
                            <Users className="h-5 w-5" />
                            <span className="font-medium">
                              {camp.season} Season
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column - Description & Highlights */}
                    <div className="p-8 md:col-span-2">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {camp.description}
                      </p>

                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Camp Highlights:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {camp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Age Groups:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {camp.ageGroups.map((group, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                          >
                            {group}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="https://forms.gle/NakPm7YUyQBcH87z9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r ${camp.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        <span>Express Interest</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
              Why Choose Our Camps?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional learning experiences
              through innovative, gamified approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4">
                    <FeatureIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Bell className="h-16 w-16 mx-auto mb-6 text-white animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Stay Updated on Upcoming Camps
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be the first to know about registration dates, special events, and
              exclusive early-bird offers. Join our community platforms and
              never miss an exciting camp opportunity!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://forms.gle/NakPm7YUyQBcH87z9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Register for Updates</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://forms.gle/NakPm7YUyQBcH87z9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2 border-2 border-white/50"
              >
                <span>Join Our Community</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CampsPage;
