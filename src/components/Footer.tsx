"use client";

import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const communities = [
    { name: "AI4Kids", href: "/communities/ai4kids" },
    { name: "Kids Chat Room", href: "/communities/kids-chat-room" },
    { name: "Get My Kid(s) to Read", href: "/communities/gmkr" },
    { name: "Speech Zone", href: "/communities/speech-zone" },
    { name: "Passion Lab", href: "/communities/passion-lab" },
    { name: "Young Entrepreneurs", href: "/communities/entrepreneurs" },
    { name: "Teen Career Guidance", href: "/communities/career-guidance" },
    { name: "SDR/BDR Training", href: "/communities/sdr-bdr-training" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary-300">
              NGKYC
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Next Gen Kids & Youth Club - A creativity, innovation & technology
              hub empowering the next generation through specialized
              communities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Communities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-300">
              Communities
            </h3>
            <ul className="space-y-2">
              {communities.slice(0, 4).map((community) => (
                <li key={community.href}>
                  <Link
                    href={community.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Communities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-300">
              More Communities
            </h3>
            <ul className="space-y-2">
              {communities.slice(4).map((community) => (
                <li key={community.href}>
                  <Link
                    href={community.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-300">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-300" />
                <span className="text-gray-400">hello@ngkyc.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-300" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span className="text-gray-400">Global Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Niyexdroid Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for the next generation</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
