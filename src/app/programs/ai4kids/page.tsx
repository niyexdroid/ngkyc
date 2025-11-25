import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "AI4Kids - Future-Ready Tech Explorers | NGKYC",
  description:
    "Join AI4Kids community for fun AI exploration through games, projects, and hands-on activities. Ages 6-16 welcome!",
};

const communityData = {
  title: "AI4Kids 🤖",
  subtitle: "Future-Ready Tech Explorers",
  description:
    "Welcome to the exciting world of Artificial Intelligence! Our AI4Kids community makes complex AI concepts accessible and fun through interactive games, creative projects, and hands-on exploration.",
  ageRange: "Ages 6-16",
  pricing: "Free Community",
  color: "from-blue-400 to-purple-500",
  quote:
    '"AI is not about replacing humans, but about augmenting human intelligence and creativity."',
  features: [
    {
      title: "Interactive AI Games",
      description:
        "Learn through play with age-appropriate AI-powered games and simulations",
    },
    {
      title: "Creative Projects",
      description:
        "Build simple AI projects like chatbots, image recognition, and voice assistants",
    },
    {
      title: "Safe Environment",
      description:
        "Moderated discussions and activities designed specifically for young learners",
    },
    {
      title: "Peer Learning",
      description:
        "Collaborate with other young tech enthusiasts from around the world",
    },
  ],
  activities: [
    "AI Art Generation Projects",
    "Simple Chatbot Building",
    "Machine Learning Basics",
    "Computer Vision Games",
    "Voice Recognition Experiments",
    "AI Ethics Discussions (Age-appropriate)",
    "Future Technology Exploration",
    "Programming with Scratch for AI",
  ],
};

export default function AI4KidsPage() {
  // Replace this URL with your actual Google Form URL when available
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
