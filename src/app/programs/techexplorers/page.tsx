import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Tech Explorers - Coding, Robotics & Innovation | NGKYC",
  description:
    "Dive into coding, robotics, and the latest technological innovations. Learn programming, build robots, and explore cutting-edge technology. Ages 7-17 welcome!",
};

const communityData = {
  title: "Tech Explorers 💻",
  subtitle: "Coding, Robotics & Innovation",
  description:
    "Embark on an exciting journey through the world of technology! Tech Explorers is where young innovators learn coding, build robots, and explore the latest technological breakthroughs that are shaping our future.",
  ageRange: "Ages 7-17",
  pricing: "Free Program",
  color: "from-blue-400 to-cyan-500",
  quote: '"The best way to predict the future is to invent it."',
  features: [
    {
      title: "Coding Fundamentals",
      description:
        "Learn programming languages like Python, JavaScript, and Scratch through fun projects",
    },
    {
      title: "Robotics Projects",
      description:
        "Build and program robots, exploring mechanics and automation hands-on",
    },
    {
      title: "Innovation Labs",
      description:
        "Work on cutting-edge technology projects and explore emerging tech trends",
    },
    {
      title: "Tech Community",
      description:
        "Connect with fellow tech enthusiasts and collaborate on exciting projects",
    },
  ],
  activities: [
    "Python Programming Basics",
    "JavaScript Web Development",
    "Arduino & Raspberry Pi Projects",
    "Robot Building Workshops",
    "Game Development",
    "Mobile App Creation",
    "3D Printing & Design",
    "Tech Innovation Challenges",
  ],
};

export default function TechExplorersPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
