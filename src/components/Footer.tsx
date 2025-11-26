"use client";

import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs (SCs)", href: "/programs" },
    { name: "Cohort", href: "/#cohorts" },
    { name: "Schools Xtra.C", href: "/programs/ai4kids" },
    { name: "Camps", href: "/camps" },
    { name: "Subject Tutor Support", href: "/tutors" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    { name: "AI4Kids", href: "/programs/ai4kids" },
    { name: "Kids Chat Room", href: "/programs/kids-chat-room" },
    { name: "Get My Kid(s) to Read", href: "/programs/gmkr" },
    { name: "Speech Zone", href: "/programs/speech-zone" },
    { name: "Passion Lab", href: "/programs/passion-lab" },
    { name: "Young Entrepreneurs", href: "/programs/entrepreneurs" },
    { name: "Teen Career Guidance", href: "/programs/career-guidance" },
    { name: "SDR/BDR Training", href: "/programs/sdr-bdr-training" },
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
              Next Gen Kids & Youth Club - A creativity, innovation, learning &
              technology hub empowering the next generation through specialized
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

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-300">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-300">Programs</h3>
            <ul className="space-y-2">
              {programs.slice(0, 4).map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {program.name}
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
                <a
                  href="mailto:info@ngkyc.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@ngkyc.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-300 text-xl mt-0.5">💬</span>
                <div className="text-gray-400 text-sm">
                  <a
                    href="https://wa.me/16478041399"
                    className="block hover:text-white transition-colors"
                  >
                    +1 647 804 1399
                  </a>
                  <a
                    href="https://wa.me/2348023791213"
                    className="block hover:text-white transition-colors"
                  >
                    +234 802 379 1213
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-300 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p className="font-semibold text-primary-300 mb-1">
                    Global Community
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Canada:</span> Inwood Manor,
                    1355 Silver Spear Rd, Mississauga ON
                  </p>
                  <p>
                    <span className="font-medium">Nigeria:</span> 20 Emmanuel
                    High Street, Ogudu GRA Layout, Lagos
                  </p>
                </div>
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
