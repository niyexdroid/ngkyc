import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Young Entrepreneurs - Business Skills & Leadership | NGKYC",
  description:
    "Learn business skills and develop your entrepreneurial mindset. Discover how to start a business, lead teams, and create innovative solutions. Ages 10-18 welcome!",
};

const communityData = {
  title: "Young Entrepreneurs 💼",
  subtitle: "Business Skills & Leadership",
  description:
    "Welcome to the world of entrepreneurship! Young Entrepreneurs is where future business leaders learn essential business skills, develop entrepreneurial thinking, and discover how to turn their ideas into reality.",
  ageRange: "Ages 10-18",
  pricing: "Free Program",
  color: "from-green-400 to-emerald-500",
  quote:
    '"An entrepreneur is someone who jumps off a cliff and builds a plane on the way down."',
  features: [
    {
      title: "Business Basics",
      description:
        "Learn fundamental business concepts including marketing, finance, and operations",
    },
    {
      title: "Startup Projects",
      description:
        "Develop and launch your own mini-business or social enterprise project",
    },
    {
      title: "Leadership Skills",
      description:
        "Build confidence, communication, and team leadership abilities",
    },
    {
      title: "Mentorship",
      description:
        "Connect with successful entrepreneurs and business professionals for guidance",
    },
  ],
  activities: [
    "Business Plan Development",
    "Marketing & Sales Workshops",
    "Financial Literacy Sessions",
    "Pitch Competitions",
    "Product Design Thinking",
    "Social Enterprise Projects",
    "Leadership Training",
    "Networking Events",
  ],
};

export default function YoungEntrepreneursPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
