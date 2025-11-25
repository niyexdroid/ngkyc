import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Global Connections - Cultural Exchange & Friendship | NGKYC",
  description:
    "Connect with peers worldwide and explore different cultures. Build international friendships and develop global awareness. Ages 8-18 welcome!",
};

const communityData = {
  title: "Global Connections 🌏",
  subtitle: "Cultural Exchange & Friendship",
  description:
    "Connect with the world! Global Connections brings together young people from different countries and cultures to build friendships, share experiences, and develop global awareness through fun cultural exchange activities.",
  ageRange: "Ages 8-18",
  pricing: "Free Program",
  color: "from-indigo-400 to-purple-500",
  quote:
    '"In diversity there is beauty and strength. Together, we are stronger."',
  features: [
    {
      title: "Cultural Exchange",
      description:
        "Learn about different cultures, traditions, and perspectives from peers worldwide",
    },
    {
      title: "Language Learning",
      description:
        "Practice languages and communication skills with native speakers your age",
    },
    {
      title: "Global Projects",
      description:
        "Collaborate on international projects and participate in global events",
    },
    {
      title: "Safe Connections",
      description:
        "Build meaningful friendships in a safe, moderated international environment",
    },
  ],
  activities: [
    "Virtual Cultural Exchange Sessions",
    "International Pen Pal Programs",
    "World Culture Celebrations",
    "Language Exchange Partnerships",
    "Global Collaboration Projects",
    "International Awareness Days",
    "Cross-Cultural Games & Activities",
    "Virtual World Tours",
  ],
};

export default function GlobalConnectionsPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
