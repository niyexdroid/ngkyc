"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Brain,
  Calculator,
  Globe,
  GraduationCap,
  FlaskConical,
  Lightbulb,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Heart,
} from "lucide-react";

const TutorSupportPage = () => {
  const subjects = [
    {
      id: "mathematics",
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced calculus and statistics",
      levels: ["Elementary", "Middle School", "High School", "Advanced"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "sciences",
      icon: FlaskConical,
      title: "Sciences",
      description: "Biology, Chemistry, Physics, and Environmental Science",
      levels: ["General Science", "STEM Track", "AP Courses", "Lab Work"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "languages",
      icon: Globe,
      title: "Languages",
      description: "English, French, Spanish, and language arts support",
      levels: ["Reading", "Writing", "Grammar", "Literature"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "humanities",
      icon: BookOpen,
      title: "Humanities",
      description: "History, Geography, Social Studies, and Civics",
      levels: ["World History", "Geography", "Social Studies", "Research"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "technology",
      icon: Brain,
      title: "Technology & Coding",
      description: "Computer Science, Programming, and Digital Literacy",
      levels: ["Basic Computing", "Web Dev", "Python", "Advanced CS"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "test-prep",
      icon: GraduationCap,
      title: "Test Preparation",
      description:
        "SAT, ACT, AP Exams, WAEC, NECO, UTME, POST-UTME, and standardized test readiness",
      levels: [
        "SAT/ACT",
        "AP Exams",
        "WAEC",
        "NECO",
        "UTME",
        "POST-UTME",
        "State Tests",
        "College Prep",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Tutors",
      description:
        "Certified educators and subject matter experts passionate about student success and personalized learning.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your schedule with convenient time slots throughout the week and weekends.",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description:
        "Custom lesson plans tailored to each student's learning style, pace, and academic goals.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Regular assessments and detailed progress reports to monitor improvement and celebrate achievements.",
    },
    {
      icon: Heart,
      title: "Supportive Environment",
      description:
        "Safe, encouraging space where students feel comfortable asking questions and making mistakes.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track record of improved grades, increased confidence, and successful academic outcomes.",
    },
  ];

  const benefits = [
    "One-on-one personalized attention",
    "Small group tutoring options available",
    "Homework help and assignment support",
    "Study skills and time management coaching",
    "Exam preparation and test strategies",
    "Subject-specific skill building",
    "Confidence building and motivation",
    "Parent progress updates and communication",
  ];

  const tutoringSessions = [
    {
      type: "Individual Sessions",
      duration: "60 minutes",
      description: "Focused one-on-one attention for maximum learning impact",
      features: ["Customized curriculum", "Flexible pacing", "Direct feedback"],
    },
    {
      type: "Small Group Sessions",
      duration: "90 minutes",
      description: "Collaborative learning with 3-5 students at similar levels",
      features: ["Peer learning", "Cost-effective", "Social interaction"],
    },
    {
      type: "Intensive Programs",
      duration: "Multiple sessions/week",
      description: "Accelerated learning for exam prep or skill building",
      features: ["Structured plan", "Regular assessments", "Rapid progress"],
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
            backgroundImage: "url('/images/communities/tutor-support.jpg')",
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
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
              Subject Tutor Support
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
              Personalized academic support to help every student reach their
              full potential. Expert tutors, flexible schedules, and proven
              results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://forms.gle/TMLUAaWsnoh4S2kV9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Request a Tutor</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/16478041399?text=Hello,%20what%20tutor%20support%20do%20we%20need%20to%20help%20your%20kid%25with%20today?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2 border-2 border-white/50"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
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
              Subjects We Cover
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring support across all major academic subjects
              and grade levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${subject.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subject.levels.map((level, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="https://wa.me/16478041399?text=Hello,%20what%20tutor%20support%20do%20we%20need%20to%20help%20your%20kid%25with%20today?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tutoring Sessions Section */}
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
              Tutoring Session Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that works best for your student's
              needs and schedule.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tutoringSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                  {session.type}
                </h3>
                <div className="text-primary-600 font-semibold mb-4">
                  {session.duration}
                </div>
                <p className="text-gray-600 mb-6">{session.description}</p>
                <div className="space-y-2">
                  {session.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
              Why Choose Our Tutoring?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide more than just homework help - we build lasting
              academic skills and confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
                What's Included in Every Session
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive support designed to help students succeed
                academically and build confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-white animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Boost Academic Success?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with an expert tutor today and watch your student's
              confidence and grades soar. Our tutors are ready to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://forms.gle/TMLUAaWsnoh4S2kV9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Request a Tutor Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/16478041399?text=Hello,%20what%20tutor%20support%20do%20we%20need%20to%20help%20your%20kid%25with%20today?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2 border-2 border-white/50"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TutorSupportPage;
