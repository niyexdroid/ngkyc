import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Health & Wellness - Physical & Mental Well-being | NGKYC",
  description:
    "Promote physical and mental wellness through fun activities and education. Learn about fitness, nutrition, mindfulness, and healthy living. Ages 6-18 welcome!",
};

const communityData = {
  title: "Health & Wellness 💪",
  subtitle: "Physical & Mental Well-being",
  description:
    "Welcome to a healthier you! Health & Wellness is where young people learn about physical fitness, nutrition, mental health, and overall well-being through fun activities, expert guidance, and supportive community.",
  ageRange: "Ages 6-18",
  pricing: "Free Program",
  color: "from-red-400 to-pink-500",
  quote:
    '"A healthy outside starts from the inside. Take care of your body and mind."',
  features: [
    {
      title: "Fitness Activities",
      description:
        "Engage in age-appropriate physical activities, exercises, and sports challenges",
    },
    {
      title: "Nutrition Education",
      description:
        "Learn about healthy eating, balanced diets, and making smart food choices",
    },
    {
      title: "Mental Wellness",
      description:
        "Explore mindfulness, stress management, and emotional well-being practices",
    },
    {
      title: "Supportive Environment",
      description:
        "Join a positive community that celebrates health goals and personal growth",
    },
  ],
  activities: [
    "Fitness Challenges & Games",
    "Healthy Cooking Workshops",
    "Mindfulness & Meditation Sessions",
    "Sports & Movement Activities",
    "Nutrition Education",
    "Sleep & Rest Awareness",
    "Emotional Intelligence Building",
    "Wellness Goal Setting",
  ],
};

export default function HealthWellnessPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
