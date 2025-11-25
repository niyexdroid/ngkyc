import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Environmental Champions - Sustainability & Conservation | NGKYC",
  description:
    "Make a difference in environmental conservation and sustainability. Learn about climate action, eco-projects, and protect our planet. Ages 8-18 welcome!",
};

const communityData = {
  title: "Environmental Champions 🌍",
  subtitle: "Sustainability & Conservation",
  description:
    "Join the movement to protect our planet! Environmental Champions empowers young eco-warriors to learn about sustainability, climate action, and environmental conservation while making a real difference in their communities.",
  ageRange: "Ages 8-18",
  pricing: "Free Program",
  color: "from-emerald-400 to-green-600",
  quote:
    '"The Earth is what we all have in common. Together, we can protect it for future generations."',
  features: [
    {
      title: "Climate Education",
      description:
        "Learn about climate change, ecosystems, and environmental science in engaging ways",
    },
    {
      title: "Eco-Projects",
      description:
        "Participate in hands-on conservation projects and sustainability initiatives",
    },
    {
      title: "Community Action",
      description:
        "Organize local environmental campaigns and make a real impact in your area",
    },
    {
      title: "Global Network",
      description:
        "Connect with young environmentalists worldwide and share best practices",
    },
  ],
  activities: [
    "Environmental Science Workshops",
    "Recycling & Upcycling Projects",
    "Community Clean-up Events",
    "Tree Planting Initiatives",
    "Wildlife Conservation Education",
    "Sustainable Living Challenges",
    "Climate Action Campaigns",
    "Eco-Innovation Projects",
  ],
};

export default function EnvironmentalChampionsPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
