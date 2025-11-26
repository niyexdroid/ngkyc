"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Age-appropriate diverse character SVG illustrations
const getAgeGroupIllustration = (ageRange: string) => {
  const isEarlyKids = ageRange.includes("5-7");
  const isYoungKids =
    ageRange.includes("5-16") ||
    ageRange.includes("6-16") ||
    ageRange.includes("6-14");
  const isOlderKids = ageRange.includes("8-16");
  const isTeens = ageRange.includes("16+") && !ageRange.includes("18+");
  const isAdults = ageRange.includes("18+");

  if (isEarlyKids) {
    // Diverse young children for ages 5-7 (reading program)
    return (
      <svg
        className="w-24 h-24 opacity-30 absolute top-0 right-0"
        viewBox="0 0 140 140"
        fill="none"
      >
        {/* Child 1 - Girl with brown hair */}
        <circle cx="70" cy="45" r="18" fill="#F4CBA8" />
        <path d="M52 35c0-8 8-15 18-15s18 7 18 15v20H52V35z" fill="#8B4513" />
        <circle cx="65" cy="42" r="2" fill="white" />
        <circle cx="75" cy="42" r="2" fill="white" />
        <circle cx="65" cy="42" r="1" fill="#333" />
        <circle cx="75" cy="42" r="1" fill="#333" />
        <path
          d="M68 48c0 2 1 3 2 3s2-1 2-3"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        />
        <rect x="52" y="63" width="36" height="45" rx="18" fill="#FF6B35" />

        {/* Book in hands */}
        <rect x="30" y="85" width="16" height="12" rx="2" fill="#4CAF50" />
        <rect x="32" y="87" width="12" height="8" rx="1" fill="white" />
        <line x1="34" y1="89" x2="42" y2="89" stroke="#333" strokeWidth="0.5" />
        <line x1="34" y1="92" x2="40" y2="92" stroke="#333" strokeWidth="0.5" />

        {/* ABC block */}
        <rect x="95" y="90" width="12" height="12" rx="2" fill="#FFD700" />
        <text
          x="101"
          y="99"
          textAnchor="middle"
          fill="#333"
          fontSize="8"
          fontWeight="bold"
        >
          A
        </text>

        {/* Stars */}
        <path
          d="M25 25l2 4l4-2l-2 4l4 2l-4 2l2 4l-4-2l-2 4l-2-4l-4 2l2-4l-4-2l4-2z"
          fill="#FFD700"
          opacity="0.7"
        />
        <circle cx="110" cy="30" r="3" fill="#FF69B4" opacity="0.6" />
      </svg>
    );
  } else if (isYoungKids && !isOlderKids) {
    // Diverse children for ages 5-16/6-16 (chat/AI/passion)
    return (
      <svg
        className="w-24 h-24 opacity-30 absolute top-0 right-0"
        viewBox="0 0 140 140"
        fill="none"
      >
        {/* Child 1 - Boy with dark skin */}
        <circle cx="50" cy="40" r="16" fill="#8B4513" />
        <path d="M34 30c0-6 7-12 16-12s16 6 16 12v18H34V30z" fill="#2C1810" />
        <circle cx="46" cy="38" r="2" fill="white" />
        <circle cx="54" cy="38" r="2" fill="white" />
        <circle cx="46" cy="38" r="1" fill="#333" />
        <circle cx="54" cy="38" r="1" fill="#333" />
        <path
          d="M48 44c0 2 1 2 2 2s2 0 2-2"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <rect x="34" y="56" width="32" height="40" rx="16" fill="#32CD32" />

        {/* Child 2 - Girl with lighter skin */}
        <circle cx="90" cy="45" r="14" fill="#F4CBA8" />
        <path d="M76 35c0-6 6-10 14-10s14 4 14 10v16H76V35z" fill="#8B4513" />
        <circle cx="87" cy="43" r="1.5" fill="white" />
        <circle cx="93" cy="43" r="1.5" fill="white" />
        <circle cx="87" cy="43" r="0.8" fill="#333" />
        <circle cx="93" cy="43" r="0.8" fill="#333" />
        <path
          d="M89 48c0 1.5 0.5 2 1 2s1-0.5 1-2"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
        />
        <rect x="76" y="59" width="28" height="35" rx="14" fill="#FF69B4" />

        {/* Chat bubbles */}
        <ellipse cx="25" cy="75" rx="12" ry="8" fill="white" opacity="0.9" />
        <circle cx="22" cy="75" r="2" fill="#2196F3" />
        <circle cx="28" cy="75" r="2" fill="#2196F3" />

        {/* Hearts */}
        <path
          d="M110 25c0-3 3-5 6-3s6 0 6 3c0 3-6 8-6 8s-6-5-6-8z"
          fill="#FF1744"
          opacity="0.8"
        />
      </svg>
    );
  } else if (isOlderKids) {
    // Diverse older kids for ages 8-16 (tech/innovation)
    return (
      <svg
        className="w-24 h-24 opacity-30 absolute top-0 right-0"
        viewBox="0 0 140 140"
        fill="none"
      >
        {/* Teen - Boy with Asian features */}
        <circle cx="70" cy="42" r="16" fill="#F5DEB3" />
        <path d="M54 32c0-6 7-12 16-12s16 6 16 12v18H54V32z" fill="#1A1A1A" />
        <circle cx="66" cy="40" r="2" fill="white" />
        <circle cx="74" cy="40" r="2" fill="white" />
        <circle cx="66" cy="40" r="1" fill="#333" />
        <circle cx="74" cy="40" r="1" fill="#333" />
        <path
          d="M68 46c0 2 1 2 2 2s2 0 2-2"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        />
        <rect x="54" y="58" width="32" height="40" rx="8" fill="#FFD700" />
        <rect x="58" y="62" width="24" height="32" rx="4" fill="#8B4513" />{" "}
        {/* Overalls */}
        {/* Laptop/tablet */}
        <rect x="25" y="85" width="20" height="14" rx="2" fill="#333" />
        <rect x="27" y="87" width="16" height="10" rx="1" fill="#00BCD4" />
        <rect x="29" y="89" width="12" height="6" fill="#1976D2" />
        {/* Gears */}
        <circle
          cx="100"
          cy="35"
          r="8"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
        />
        <circle cx="100" cy="35" r="4" fill="#FF6B35" />
        {/* Code symbols */}
        <text x="25" y="35" fill="#9C27B0" fontSize="12" fontWeight="bold">
          &lt;/&gt;
        </text>
        {/* Rocket */}
        <path d="M110 70l4-8l4 8l-2 12l-4 0z" fill="#E91E63" />
        <circle cx="114" cy="86" r="2" fill="#FFC107" />
      </svg>
    );
  } else if (isTeens) {
    // Diverse teens for 16+ (leadership/professional development)
    return (
      <svg
        className="w-24 h-24 opacity-30 absolute top-0 right-0"
        viewBox="0 0 140 140"
        fill="none"
      >
        {/* Teen - Girl with Afro-textured hair */}
        <circle cx="70" cy="40" r="18" fill="#8B4513" />
        <ellipse cx="70" cy="28" rx="20" ry="15" fill="#2F1B14" />{" "}
        {/* Afro hair */}
        <circle cx="64" cy="38" r="2" fill="white" />
        <circle cx="76" cy="38" r="2" fill="white" />
        <circle cx="64" cy="38" r="1" fill="#333" />
        <circle cx="76" cy="38" r="1" fill="#333" />
        <path
          d="M67 45c0 2 1 3 3 3s3-1 3-3"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        />
        <rect x="52" y="58" width="36" height="42" rx="10" fill="#663399" />
        <rect x="56" y="62" width="28" height="36" rx="6" fill="#FFFFFF" />{" "}
        {/* Professional blazer */}
        {/* Laptop */}
        <rect x="20" y="90" width="24" height="16" rx="2" fill="#333" />
        <rect x="22" y="92" width="20" height="12" rx="1" fill="#00E676" />
        <rect x="24" y="94" width="16" height="8" fill="#1976D2" />
        {/* Target/goal symbol */}
        <circle
          cx="110"
          cy="40"
          r="10"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
        />
        <circle
          cx="110"
          cy="40"
          r="6"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
        />
        <circle cx="110" cy="40" r="3" fill="#FF6B35" />
        {/* Chart/Graph for leadership */}
        <rect
          x="100"
          y="75"
          width="16"
          height="20"
          rx="2"
          fill="#9C27B0"
          opacity="0.8"
        />
        <rect x="102" y="82" width="3" height="11" fill="white" />
        <rect x="107" y="78" width="3" height="15" fill="white" />
        <rect x="112" y="85" width="3" height="8" fill="white" />
        {/* Professional symbols */}
        <circle cx="25" cy="40" r="4" fill="#FFC107" opacity="0.8" />
      </svg>
    );
  } else if (isAdults) {
    // Diverse adults for 18+ (entrepreneurship/business)
    return (
      <svg
        className="w-24 h-24 opacity-30 absolute top-0 right-0"
        viewBox="0 0 140 140"
        fill="none"
      >
        {/* Adult - Professional man with diverse features */}
        <circle cx="70" cy="38" r="16" fill="#D2691E" />
        <ellipse cx="70" cy="26" rx="18" ry="12" fill="#654321" />{" "}
        {/* Professional haircut */}
        <circle cx="66" cy="36" r="2" fill="white" />
        <circle cx="74" cy="36" r="2" fill="white" />
        <circle cx="66" cy="36" r="1" fill="#333" />
        <circle cx="74" cy="36" r="1" fill="#333" />
        <path
          d="M68 43c0 2 1 3 2 3s2-1 2-3"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        />
        <rect x="54" y="54" width="32" height="44" rx="8" fill="#1565C0" />
        <rect x="58" y="58" width="24" height="38" rx="4" fill="#FFFFFF" />{" "}
        {/* Business shirt */}
        <rect x="66" y="58" width="8" height="30" fill="#D32F2F" /> {/* Tie */}
        {/* Laptop */}
        <rect x="20" y="95" width="26" height="18" rx="2" fill="#333" />
        <rect x="22" y="97" width="22" height="14" rx="1" fill="#4CAF50" />
        <rect x="24" y="99" width="18" height="10" fill="#1976D2" />
        {/* Sales chart trending up */}
        <rect
          x="100"
          y="80"
          width="16"
          height="20"
          rx="2"
          fill="#FF6B35"
          opacity="0.8"
        />
        <path
          d="M103 95l3-4l3 2l3-5l3 3"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        {/* Dollar sign */}
        <circle cx="25" cy="35" r="8" fill="#FFC107" opacity="0.9" />
        <text
          x="25"
          y="40"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontWeight="bold"
        >
          $
        </text>
        {/* Business briefcase */}
        <rect x="110" y="50" width="12" height="8" rx="2" fill="#8D6E63" />
        <rect x="112" y="52" width="8" height="4" fill="#5D4037" />
        <circle cx="116" cy="54" r="1" fill="#FFEB3B" />
      </svg>
    );
  }

  // Default illustration
  return (
    <svg
      className="w-20 h-20 opacity-25 absolute top-1 right-1"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="30" r="15" fill="currentColor" />
      <rect x="45" y="45" width="30" height="35" rx="8" fill="currentColor" />
      <circle cx="54" cy="28" r="2" fill="white" />
      <circle cx="66" cy="28" r="2" fill="white" />
      <path
        d="M57 36c0 2 1 3 3 3s3-1 3-3"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="25" cy="25" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="90" cy="30" r="3" fill="currentColor" opacity="0.5" />
      <rect
        x="20"
        y="70"
        width="5"
        height="5"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
};

// Function to generate themed background illustrations matching reference image
const getGroupBackgroundIllustration = (communityId: string) => {
  // AI4Kids / Little Engineers - STEM theme with gears and technology
  if (communityId === "ai4kids") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large gear background */}
        <circle cx="100" cy="100" r="50" fill="#2C3E50" opacity="0.3" />
        <circle
          cx="100"
          cy="100"
          r="35"
          fill="none"
          stroke="#34495E"
          strokeWidth="8"
          opacity="0.3"
        />
        <circle cx="100" cy="100" r="20" fill="#34495E" opacity="0.3" />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + Math.cos(rad) * 42;
          const y = 100 + Math.sin(rad) * 42;
          return (
            <rect
              key={i}
              x={x - 4}
              y={y - 8}
              width="8"
              height="16"
              fill="#34495E"
              opacity="0.3"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Medium gear */}
        <circle cx="280" cy="80" r="35" fill="#34495E" opacity="0.25" />
        <circle
          cx="280"
          cy="80"
          r="25"
          fill="none"
          stroke="#2C3E50"
          strokeWidth="6"
          opacity="0.25"
        />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 280 + Math.cos(rad) * 30;
          const y = 80 + Math.sin(rad) * 30;
          return (
            <rect
              key={i}
              x={x - 3}
              y={y - 6}
              width="6"
              height="12"
              fill="#2C3E50"
              opacity="0.25"
              transform={`rotate(${angle} ${x} ${y})`}
            />
          );
        })}

        {/* Small gear */}
        <circle cx="200" cy="150" r="25" fill="#34495E" opacity="0.2" />
        <circle
          cx="200"
          cy="150"
          r="18"
          fill="none"
          stroke="#2C3E50"
          strokeWidth="5"
          opacity="0.2"
        />

        {/* Circuit board lines */}
        <path
          d="M50 50 L80 50 L80 80"
          stroke="#34495E"
          strokeWidth="3"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M320 120 L280 120 L280 150"
          stroke="#34495E"
          strokeWidth="3"
          opacity="0.15"
          fill="none"
        />
        <circle cx="50" cy="50" r="4" fill="#34495E" opacity="0.2" />
        <circle cx="320" cy="120" r="4" fill="#34495E" opacity="0.2" />

        {/* Kid silhouettes */}
        <g opacity="0.25">
          <circle cx="60" cy="110" r="12" fill="#2C3E50" />
          <rect x="48" y="122" width="24" height="30" rx="8" fill="#2C3E50" />
        </g>
        <g opacity="0.25">
          <circle cx="340" cy="120" r="12" fill="#2C3E50" />
          <rect x="328" y="132" width="24" height="30" rx="8" fill="#2C3E50" />
        </g>
      </svg>
    );
  }

  // Kids Chat Room / Story Explorers - Reading and books theme
  if (communityId === "kids-chat-room") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Open book 1 */}
        <g opacity="0.25">
          <path
            d="M80 80 Q100 70 120 80 L120 130 Q100 120 80 130 Z"
            fill="#2C5F2D"
          />
          <path
            d="M120 80 Q140 70 160 80 L160 130 Q140 120 120 130 Z"
            fill="#2C5F2D"
          />
          <line
            x1="120"
            y1="80"
            x2="120"
            y2="130"
            stroke="#1E4620"
            strokeWidth="2"
          />
        </g>

        {/* Open book 2 */}
        <g opacity="0.2">
          <path
            d="M250 100 Q265 92 280 100 L280 145 Q265 137 250 145 Z"
            fill="#2C5F2D"
          />
          <path
            d="M280 100 Q295 92 310 100 L310 145 Q295 137 280 145 Z"
            fill="#2C5F2D"
          />
        </g>

        {/* Magnifying glass */}
        <circle
          cx="340"
          cy="70"
          r="20"
          fill="none"
          stroke="#2C5F2D"
          strokeWidth="4"
          opacity="0.25"
        />
        <line
          x1="355"
          y1="85"
          x2="370"
          y2="100"
          stroke="#2C5F2D"
          strokeWidth="4"
          opacity="0.25"
        />

        {/* Kid silhouettes reading */}
        <g opacity="0.3">
          <circle cx="50" cy="130" r="14" fill="#2C5F2D" />
          <rect x="36" y="144" width="28" height="35" rx="10" fill="#2C5F2D" />
          {/* Book in hand */}
          <rect x="48" y="155" width="16" height="12" rx="2" fill="#1E4620" />
        </g>
        <g opacity="0.3">
          <circle cx="200" cy="140" r="14" fill="#2C5F2D" />
          <rect x="186" y="154" width="28" height="35" rx="10" fill="#2C5F2D" />
        </g>
        <g opacity="0.25">
          <circle cx="350" cy="150" r="13" fill="#2C5F2D" />
          <rect x="337" y="163" width="26" height="32" rx="9" fill="#2C5F2D" />
        </g>
      </svg>
    );
  }

  // GMKR / Global Minds - World, globe, geography theme
  if (communityId === "gmkr") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large globe */}
        <circle
          cx="200"
          cy="100"
          r="50"
          fill="none"
          stroke="#C4841D"
          strokeWidth="6"
          opacity="0.3"
        />
        <circle
          cx="200"
          cy="100"
          r="45"
          fill="none"
          stroke="#D4942D"
          strokeWidth="2"
          opacity="0.25"
        />
        {/* Latitude lines */}
        <ellipse
          cx="200"
          cy="100"
          rx="50"
          ry="15"
          fill="none"
          stroke="#C4841D"
          strokeWidth="2"
          opacity="0.25"
        />
        <ellipse
          cx="200"
          cy="100"
          rx="50"
          ry="30"
          fill="none"
          stroke="#C4841D"
          strokeWidth="2"
          opacity="0.2"
        />
        {/* Longitude line */}
        <path
          d="M150 100 Q200 60 250 100 Q200 140 150 100"
          fill="none"
          stroke="#C4841D"
          strokeWidth="2"
          opacity="0.25"
        />

        {/* Laptop with globe icon */}
        <rect
          x="60"
          y="120"
          width="50"
          height="35"
          rx="3"
          fill="#C4841D"
          opacity="0.25"
        />
        <rect
          x="63"
          y="123"
          width="44"
          height="28"
          rx="2"
          fill="white"
          opacity="0.3"
        />
        <circle cx="85" cy="137" r="10" fill="#C4841D" opacity="0.3" />

        {/* Laptop 2 */}
        <rect
          x="290"
          y="110"
          width="50"
          height="35"
          rx="3"
          fill="#C4841D"
          opacity="0.2"
        />
        <rect
          x="293"
          y="113"
          width="44"
          height="28"
          rx="2"
          fill="white"
          opacity="0.25"
        />

        {/* Email/message icons */}
        <g opacity="0.25">
          <rect x="320" cy="60" width="28" height="20" rx="3" fill="#C4841D" />
          <path
            d="M320 60 L334 72 L348 60"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </g>

        {/* Kid silhouettes */}
        <g opacity="0.3">
          <circle cx="90" cy="75" r="13" fill="#C4841D" />
          <rect x="77" y="88" width="26" height="32" rx="9" fill="#C4841D" />
        </g>
        <g opacity="0.3">
          <circle cx="310" cy="80" r="13" fill="#C4841D" />
          <rect x="297" y="93" width="26" height="32" rx="9" fill="#C4841D" />
        </g>
      </svg>
    );
  }

  // Speech Zone / Future Innovators - Communication, presentation theme
  if (communityId === "speech-zone") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Message bubbles */}
        <g opacity="0.25">
          <rect x="80" y="60" width="70" height="45" rx="8" fill="#C74D71" />
          <path d="M95 105 L85 120 L105 105" fill="#C74D71" />
          {/* Lines inside bubble */}
          <line
            x1="90"
            y1="72"
            x2="140"
            y2="72"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="90"
            y1="82"
            x2="135"
            y2="82"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="90"
            y1="92"
            x2="130"
            y2="92"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
        </g>

        <g opacity="0.2">
          <rect x="250" y="80" width="65" height="40" rx="7" fill="#C74D71" />
          <path d="M265 120 L255 132 L275 120" fill="#C74D71" />
          <line
            x1="260"
            y1="92"
            x2="305"
            y2="92"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
          <line
            x1="260"
            y1="102"
            x2="300"
            y2="102"
            stroke="white"
            strokeWidth="3"
            opacity="0.6"
          />
        </g>

        {/* Document/presentation icon */}
        <g opacity="0.25">
          <rect x="170" y="120" width="45" height="60" rx="4" fill="#C74D71" />
          <line
            x1="180"
            y1="132"
            x2="205"
            y2="132"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
          />
          <line
            x1="180"
            y1="142"
            x2="205"
            y2="142"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
          />
          <line
            x1="180"
            y1="152"
            x2="200"
            y2="152"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
          />
          <line
            x1="180"
            y1="162"
            x2="205"
            y2="162"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
          />
        </g>

        {/* Kid silhouettes */}
        <g opacity="0.3">
          <circle cx="50" cy="130" r="14" fill="#C74D71" />
          <rect x="36" y="144" width="28" height="35" rx="10" fill="#C74D71" />
        </g>
        <g opacity="0.28">
          <circle cx="340" cy="120" r="13" fill="#C74D71" />
          <rect x="327" y="133" width="26" height="33" rx="9" fill="#C74D71" />
        </g>
        <g opacity="0.26">
          <circle cx="370" cy="150" r="12" fill="#C74D71" />
          <rect x="358" y="162" width="24" height="30" rx="8" fill="#C74D71" />
        </g>
      </svg>
    );
  }

  // Passion Lab / Art Creative Kids - Creative, arts, music theme
  if (communityId === "passion-lab") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Paint palette */}
        <g opacity="0.25">
          <ellipse cx="100" cy="90" rx="40" ry="30" fill="#9C4C9C" />
          <circle cx="90" cy="80" r="6" fill="#FF6B6B" />
          <circle cx="110" cy="80" r="6" fill="#4ECDC4" />
          <circle cx="85" cy="95" r="6" fill="#FFE66D" />
          <circle cx="105" cy="100" r="6" fill="#95E1D3" />
        </g>

        {/* Music notes */}
        <g opacity="0.28">
          <circle cx="280" cy="70" r="8" fill="#9C4C9C" />
          <rect x="288" y="50" width="3" height="28" fill="#9C4C9C" />
          <circle cx="300" cy="80" r="8" fill="#9C4C9C" />
          <rect x="308" y="58" width="3" height="30" fill="#9C4C9C" />
          <path
            d="M288 50 Q310 45 308 58"
            stroke="#9C4C9C"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Star decorations */}
        <path
          d="M50 60 L55 70 L65 72 L57 80 L59 90 L50 85 L41 90 L43 80 L35 72 L45 70 Z"
          fill="#9C4C9C"
          opacity="0.22"
        />
        <path
          d="M350 100 L353 106 L360 107 L355 112 L356 119 L350 116 L344 119 L345 112 L340 107 L347 106 Z"
          fill="#9C4C9C"
          opacity="0.2"
        />

        {/* Art canvas/frame */}
        <rect
          x="180"
          y="110"
          width="50"
          height="40"
          fill="none"
          stroke="#9C4C9C"
          strokeWidth="4"
          opacity="0.25"
        />
        <rect
          x="185"
          y="115"
          width="40"
          height="30"
          fill="#9C4C9C"
          opacity="0.15"
        />

        {/* Kid silhouettes creating */}
        <g opacity="0.3">
          <circle cx="60" cy="140" r="13" fill="#9C4C9C" />
          <rect x="47" y="153" width="26" height="33" rx="9" fill="#9C4C9C" />
        </g>
        <g opacity="0.28">
          <circle cx="200" cy="70" r="12" fill="#9C4C9C" />
          <rect x="188" y="82" width="24" height="30" rx="8" fill="#9C4C9C" />
        </g>
        <g opacity="0.26">
          <circle cx="330" cy="145" r="13" fill="#9C4C9C" />
          <rect x="317" y="158" width="26" height="32" rx="9" fill="#9C4C9C" />
        </g>
      </svg>
    );
  }

  // Entrepreneurs / Spacefarers Club - Space, exploration, rocket theme
  if (communityId === "entrepreneurs") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Rocket */}
        <g opacity="0.28">
          <path d="M200 40 L210 70 L200 65 L190 70 Z" fill="#1A7A7A" />
          <ellipse cx="200" cy="74" rx="12" ry="5" fill="#1A7A7A" />
          <circle cx="200" cy="55" r="4" fill="white" opacity="0.7" />
          {/* Flames */}
          <path
            d="M195 74 L192 85 L198 78 L195 74"
            fill="#FF6B35"
            opacity="0.6"
          />
          <path
            d="M205 74 L208 85 L202 78 L205 74"
            fill="#FF6B35"
            opacity="0.6"
          />
        </g>

        {/* Planet with rings */}
        <g opacity="0.25">
          <circle cx="100" cy="100" r="30" fill="#1A7A7A" />
          <ellipse
            cx="100"
            cy="100"
            rx="50"
            ry="12"
            fill="none"
            stroke="#1A7A7A"
            strokeWidth="4"
          />
          <circle cx="90" cy="95" r="8" fill="#2A9A9A" opacity="0.5" />
        </g>

        {/* Stars */}
        <circle cx="60" cy="50" r="3" fill="#1A7A7A" opacity="0.3" />
        <circle cx="320" cy="60" r="4" fill="#1A7A7A" opacity="0.28" />
        <circle cx="350" cy="120" r="3" fill="#1A7A7A" opacity="0.25" />
        <circle cx="140" cy="160" r="3" fill="#1A7A7A" opacity="0.3" />
        <path
          d="M280 90 L282 95 L287 96 L283 100 L284 105 L280 103 L276 105 L277 100 L273 96 L278 95 Z"
          fill="#FFD700"
          opacity="0.25"
        />
        <path
          d="M340 40 L341 43 L344 44 L341 46 L342 49 L340 48 L338 49 L338 46 L336 44 L339 43 Z"
          fill="#FFD700"
          opacity="0.22"
        />

        {/* Kid silhouettes exploring */}
        <g opacity="0.3">
          <circle cx="280" cy="140" r="13" fill="#1A7A7A" />
          <rect x="267" y="153" width="26" height="33" rx="9" fill="#1A7A7A" />
        </g>
        <g opacity="0.28">
          <circle cx="150" cy="130" r="12" fill="#1A7A7A" />
          <rect x="138" y="142" width="24" height="30" rx="8" fill="#1A7A7A" />
        </g>
        <g opacity="0.26">
          <circle cx="50" cy="150" r="11" fill="#1A7A7A" />
          <rect x="39" y="161" width="22" height="28" rx="7" fill="#1A7A7A" />
        </g>
      </svg>
    );
  }

  // Career Guidance / Podocking Pros - Communication, collaboration theme
  if (communityId === "career-guidance") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Target/bullseye */}
        <g opacity="0.28">
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="#2C5AA0"
            strokeWidth="6"
          />
          <circle
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="#2C5AA0"
            strokeWidth="5"
          />
          <circle
            cx="100"
            cy="100"
            r="16"
            fill="none"
            stroke="#2C5AA0"
            strokeWidth="4"
          />
          <circle cx="100" cy="100" r="6" fill="#2C5AA0" />
        </g>

        {/* Chat/dialogue bubbles */}
        <g opacity="0.25">
          <ellipse cx="280" cy="80" rx="35" ry="25" fill="#2C5AA0" />
          <circle cx="270" cy="78" r="4" fill="white" />
          <circle cx="280" cy="78" r="4" fill="white" />
          <circle cx="290" cy="78" r="4" fill="white" />
          <path d="M265 100 L255 110 L275 105" fill="#2C5AA0" />
        </g>

        <g opacity="0.22">
          <ellipse cx="320" cy="140" rx="30" ry="22" fill="#2C5AA0" />
          <circle cx="312" cy="138" r="3" fill="white" />
          <circle cx="320" cy="138" r="3" fill="white" />
          <circle cx="328" cy="138" r="3" fill="white" />
        </g>

        {/* Mobile devices */}
        <g opacity="0.24">
          <rect x="170" y="110" width="35" height="60" rx="5" fill="#2C5AA0" />
          <circle cx="187" cy="160" r="4" fill="white" opacity="0.5" />
          <rect
            x="175"
            y="118"
            width="25"
            height="35"
            rx="2"
            fill="white"
            opacity="0.3"
          />
        </g>

        {/* Kid silhouettes */}
        <g opacity="0.3">
          <circle cx="60" cy="140" r="14" fill="#2C5AA0" />
          <rect x="46" y="154" width="28" height="35" rx="10" fill="#2C5AA0" />
        </g>
        <g opacity="0.28">
          <circle cx="220" cy="70" r="13" fill="#2C5AA0" />
          <rect x="207" y="83" width="26" height="33" rx="9" fill="#2C5AA0" />
        </g>
        <g opacity="0.26">
          <circle cx="360" cy="120" r="12" fill="#2C5AA0" />
          <rect x="348" y="132" width="24" height="30" rx="8" fill="#2C5AA0" />
        </g>
      </svg>
    );
  }

  // SDR/BDR Training / Entrepreneurship Edge - Professional, business theme
  if (communityId === "sdr-bdr-training") {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Briefcase */}
        <g opacity="0.3">
          <rect x="80" y="90" width="60" height="45" rx="5" fill="#4A5568" />
          <rect x="105" y="85" width="10" height="10" rx="2" fill="#4A5568" />
          <rect x="85" y="95" width="50" height="35" rx="3" fill="#5A6678" />
          <circle cx="110" cy="112" r="4" fill="#CBD5E0" />
        </g>

        {/* Growth chart/graph */}
        <g opacity="0.28">
          <rect
            x="240"
            y="110"
            width="80"
            height="60"
            fill="none"
            stroke="#4A5568"
            strokeWidth="3"
          />
          <path
            d="M250 150 L270 140 L285 145 L305 125"
            stroke="#4A5568"
            strokeWidth="4"
            fill="none"
          />
          <circle cx="250" cy="150" r="4" fill="#4A5568" />
          <circle cx="270" cy="140" r="4" fill="#4A5568" />
          <circle cx="285" cy="145" r="4" fill="#4A5568" />
          <circle cx="305" cy="125" r="4" fill="#4A5568" />
        </g>

        {/* Laptop */}
        <g opacity="0.26">
          <rect x="150" y="70" width="55" height="38" rx="3" fill="#4A5568" />
          <rect
            x="153"
            y="73"
            width="49"
            height="30"
            rx="2"
            fill="white"
            opacity="0.4"
          />
          {/* Screen content */}
          <line
            x1="160"
            y1="80"
            x2="195"
            y2="80"
            stroke="#4A5568"
            strokeWidth="2"
            opacity="0.3"
          />
          <line
            x1="160"
            y1="87"
            x2="190"
            y2="87"
            stroke="#4A5568"
            strokeWidth="2"
            opacity="0.3"
          />
          <line
            x1="160"
            y1="94"
            x2="192"
            y2="94"
            stroke="#4A5568"
            strokeWidth="2"
            opacity="0.3"
          />
        </g>

        {/* Dollar sign */}
        <g opacity="0.25">
          <circle cx="350" cy="80" r="20" fill="#4A5568" />
          <text
            x="350"
            y="90"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
          >
            $
          </text>
        </g>

        {/* Network nodes */}
        <circle cx="50" cy="60" r="8" fill="#4A5568" opacity="0.22" />
        <circle cx="90" cy="50" r="6" fill="#4A5568" opacity="0.2" />
        <circle cx="70" cy="70" r="5" fill="#4A5568" opacity="0.18" />
        <line
          x1="50"
          y1="60"
          x2="90"
          y2="50"
          stroke="#4A5568"
          strokeWidth="2"
          opacity="0.15"
        />
        <line
          x1="50"
          y1="60"
          x2="70"
          y2="70"
          stroke="#4A5568"
          strokeWidth="2"
          opacity="0.15"
        />

        {/* Professional silhouettes */}
        <g opacity="0.32">
          <circle cx="60" cy="145" r="15" fill="#4A5568" />
          <rect x="45" y="160" width="30" height="38" rx="10" fill="#4A5568" />
        </g>
        <g opacity="0.3">
          <circle cx="340" cy="150" r="14" fill="#4A5568" />
          <rect x="326" y="164" width="28" height="36" rx="9" fill="#4A5568" />
        </g>
      </svg>
    );
  }

  // Default fallback
  return null;
};

const communities = [
  {
    id: "ai4kids",
    title: "AI4Kids 🤖",
    subtitle: "Future-Ready Tech Explorers",
    description:
      "Fun AI exploration through games, projects, and hands-on activities that make complex concepts simple.",
    ageRange: "Ages 5-16",
    bgImage: "/images/communities/age 6-8.jpg",
    href: "/programs/ai4kids",
  },
  {
    id: "kids-chat-room",
    title: "Kids Chat Room 💬",
    subtitle: "Social Skills & Friendships Platform",
    description:
      "Safe, moderated environment for building emotional intelligence and lasting friendships.",
    ageRange: "Ages 6-14",
    bgImage: "/images/communities/age 5-8.jpg",
    href: "/programs/kids-chat-room",
  },
  {
    id: "speech-zone",
    title: "Presentation & Articulation Skills 🌟",
    subtitle: "Welcome to the Speech Zone!",
    description:
      "Develop confident speaking, presentation skills, and podcast creation abilities.",
    ageRange: "Ages 8-16",
    bgImage: "/images/communities/age 8-16.jpg",
    href: "/programs/speech-zone",
  },
  {
    id: "passion-lab",
    title: "Kid's Passion Incubation 🚀",
    subtitle: "Welcome to the Passion Lab!",
    description:
      "Transform hobbies into meaningful projects with expert guidance and peer support.",
    ageRange: "Ages 6-16",
    bgImage: "/images/communities/ages 9-11.jpg",
    href: "/programs/passion-lab",
  },
  {
    id: "entrepreneurs",
    title: "Role Plays: Kidspreneurs & Teenpreneurs 💼",
    subtitle: "Welcome Future Entrepreneurs!",
    description:
      "Learn business fundamentals through engaging role-play scenarios and mentorship.",
    ageRange: "Ages 8-16+",
    bgImage: "/images/communities/age 9-11+.jpg",
    href: "/programs/entrepreneurs",
  },
  {
    id: "career-guidance",
    title: "Teens Career Guidance & Prep 🎯",
    subtitle: "Future Career Planning",
    description:
      "Comprehensive career exploration, skill development, and future planning for teens.",
    ageRange: "16+ Only",
    bgImage: "/images/communities/age 16+.jpg",
    href: "/programs/career-guidance",
  },
];

const CommunitiesSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="communities">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover 6 free programs designed to nurture different aspects of
            your child&apos;s growth and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
            >
              <Link href={community.href} className="block h-full">
                <div className="h-32 relative overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={community.bgImage}
                    alt={`${community.title} community`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/30 z-[1]"></div>

                  {/* Decorative geometric patterns */}
                  <div className="absolute inset-0 opacity-10 z-[2]">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-8 w-4 h-4 bg-white rounded-sm rotate-45 animate-bounce"></div>
                    <div className="absolute top-8 right-16 w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white z-[3]">
                    <div className="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {community.ageRange}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {community.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 mb-3">
                    {community.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {community.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/programs" className="btn-primary">
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
