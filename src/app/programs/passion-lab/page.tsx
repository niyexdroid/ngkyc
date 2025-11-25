import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Kid's Passion Incubation - Passion Lab | NGKYC",
  description:
    "Transform hobbies into meaningful projects with expert guidance and peer support. Ages 6-16 welcome!",
};

const communityData = {
  title: "Kid's Passion Incubation 🚀",
  subtitle: "Welcome to the Passion Lab!",
  description:
    "Turn your passion into projects! Passion Lab is where kids transform their hobbies and interests into meaningful projects, learning valuable skills along the way with expert mentorship and supportive peers.",
  ageRange: "Ages 6-16",
  pricing: "Free Program",
  color: "from-violet-400 to-purple-500",
  quote: '"Follow your passion, and success will follow you."',
  features: [
    {
      title: "Interest Discovery",
      description:
        "Explore different areas and discover what truly excites and motivates you",
    },
    {
      title: "Project Development",
      description:
        "Learn to turn ideas into real projects with structured guidance and support",
    },
    {
      title: "Skill Building",
      description:
        "Develop practical skills related to your passions through hands-on activities",
    },
    {
      title: "Mentorship",
      description:
        "Connect with mentors who share your interests and can guide your journey",
    },
  ],
  activities: [
    "Passion Discovery Sessions",
    "Project Planning Workshops",
    "Skill Development Activities",
    "Creative Project Showcases",
    "Mentor-Student Matching",
    "Goal Setting Exercises",
    "Peer Collaboration Projects",
    "Progress Celebration Events",
  ],
};

export default function PassionLabPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
