import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Community Service - Volunteer & Impact Projects | NGKYC",
  description:
    "Make a positive impact through volunteer work and community projects. Learn about social responsibility and give back to your community. Ages 8-18 welcome!",
};

const communityData = {
  title: "Community Service 🤝",
  subtitle: "Volunteer & Impact Projects",
  description:
    "Make a difference in the world! Community Service connects young changemakers with volunteer opportunities and community projects, helping them develop empathy, leadership, and social responsibility while creating positive impact.",
  ageRange: "Ages 8-18",
  pricing: "Free Program",
  color: "from-orange-400 to-red-500",
  quote: '"Service to others is the rent you pay for your room here on Earth."',
  features: [
    {
      title: "Volunteer Opportunities",
      description:
        "Access age-appropriate volunteer projects in your local community and online",
    },
    {
      title: "Impact Projects",
      description:
        "Organize and lead community service initiatives that address real needs",
    },
    {
      title: "Social Awareness",
      description:
        "Learn about social issues and develop empathy through education and action",
    },
    {
      title: "Recognition",
      description:
        "Earn volunteer hours certification and recognition for your service contributions",
    },
  ],
  activities: [
    "Local Volunteer Projects",
    "Community Fundraising Events",
    "Social Awareness Campaigns",
    "Charity Drives & Collections",
    "Youth Leadership Programs",
    "Service Learning Projects",
    "Mentoring Younger Kids",
    "Community Outreach Initiatives",
  ],
};

export default function CommunityServicePage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
