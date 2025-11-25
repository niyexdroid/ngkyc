"use client";

import { Shield, Users, Star, BookOpen, Award, Heart } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safe Environment",
    description:
      "All programs are moderated by trained professionals to ensure a safe and supportive learning environment.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Peer Connections",
    description:
      "Connect with like-minded peers from around the world who share your interests and passions.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Expert-Led Learning",
    description:
      "Learn from industry experts and experienced educators through interactive workshops and projects.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Achievement Recognition",
    description:
      "Earn badges, certificates, and recognition for your accomplishments and contributions.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Project Showcases",
    description:
      "Share your projects and get feedback from peers and mentors in program showcase events.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Supportive Program",
    description:
      "Be part of a caring program that celebrates diversity and encourages personal growth.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

const CommunityFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Why Our Programs Are Special
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every NGKYC program is designed with safety, learning, and fun at
            its core. Here's what makes our platform unique for young learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`${feature.bgColor} p-3 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
            Ready to Join a Program?
          </h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your journey today and discover new interests, make friends,
            and develop skills that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Browse Programs
            </button>
            <button className="bg-primary-600 bg-opacity-20 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;
