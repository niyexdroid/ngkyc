"use client";

import Link from "next/link";
import { Sparkles, Users, Star, ArrowRight } from "lucide-react";

interface Community {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  members: number;
  featured?: boolean;
}

const communities: Community[] = [
  {
    id: "ai4kids",
    title: "AI4Kids 🤖",
    description:
      "Fun AI exploration through games, projects, and hands-on activities that make complex concepts simple.",
    icon: <Sparkles className="h-8 w-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    members: 500,
    featured: true,
  },
  {
    id: "kids-chat-room",
    title: "Kids Chat Room 💬",
    description:
      "Safe, moderated environment for building emotional intelligence and lasting friendships.",
    icon: <Star className="h-8 w-8" />,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    members: 200,
    featured: true,
  },
  {
    id: "gmkr",
    title: "Get My Kid(s) to Read 📚✨",
    description:
      "Structured reading program with phonics games, storytelling, and interactive learning.",
    icon: <Users className="h-8 w-8" />,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    members: 50,
    featured: false,
  },
  {
    id: "speech-zone",
    title: "Presentation & Articulation Skills 🌟",
    description:
      "Develop confident speaking, presentation skills, and podcast creation abilities.",
    icon: <Sparkles className="h-8 w-8" />,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    members: 80,
    featured: false,
  },
  {
    id: "passion-lab",
    title: "Kid's Passion Incubation 🚀",
    description:
      "Transform hobbies into meaningful projects with expert guidance and peer support.",
    icon: <Star className="h-8 w-8" />,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    members: 40,
    featured: false,
  },
  {
    id: "entrepreneurs",
    title: "Role Plays: Kidspreneurs & Teenpreneurs 💼",
    description:
      "Learn business fundamentals through engaging role-play scenarios and mentorship.",
    icon: <Users className="h-8 w-8" />,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    members: 100,
    featured: false,
  },
  {
    id: "career-guidance",
    title: "Teens Career Guidance & Prep 🎯",
    description:
      "Comprehensive career exploration, skill development, and future planning for teens.",
    icon: <Sparkles className="h-8 w-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    members: 85,
    featured: false,
  },
  {
    id: "sdr-bdr-training",
    title: "SDR/BDR Training + Internship 💻",
    description:
      "Professional training in sales development with real internship opportunities.",
    icon: <Star className="h-8 w-8" />,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
    members: 180,
    featured: false,
  },
];

const CommunitiesGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each program offers unique learning experiences, projects, and
            connections with like-minded peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div
              key={community.id}
              className={`
                group relative bg-white rounded-xl shadow-lg border-2 border-transparent
                hover:border-gray-200 transition-all duration-300 hover:shadow-xl
                transform hover:-translate-y-1
                ${
                  community.featured
                    ? "ring-2 ring-yellow-400 ring-opacity-60"
                    : ""
                }
              `}
            >
              {community.featured && (
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${community.bgColor} p-3 rounded-lg ${community.color}`}
                  >
                    {community.icon}
                  </div>
                  <div className="text-sm text-gray-500">
                    {community.members.toLocaleString()} members
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {community.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {community.description}
                </p>

                <Link
                  href={`/programs/${community.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:underline"
                >
                  Explore Program
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our quick quiz to find the perfect program that matches your
              interests and goals.
            </p>
            <a
              href="https://forms.gle/NakPm7YUyQBcH87z9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Take Program Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesGrid;
