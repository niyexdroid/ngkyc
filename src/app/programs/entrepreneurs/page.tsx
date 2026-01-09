import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Role Plays: Kidspreneurs & Teenpreneurs | NGKYC",
  description:
    "Learn business fundamentals through engaging role-play scenarios and mentorship. Ages 8-16+ welcome!",
};

const communityData = {
  title: "Role Plays: Kidspreneurs & Teenpreneurs 💼",
  subtitle: "Welcome Future Entrepreneurs!",
  description:
    "Experience entrepreneurship firsthand! Through engaging role-play scenarios, young entrepreneurs learn business fundamentals, leadership skills, and innovative thinking in a fun, supportive environment.",
  ageRange: "Ages 8-16+",
  pricing: "Free Program",
  members: "100+ members",
  color: "from-teal-400 to-cyan-500",
  quote: '"The only way to do great work is to love what you do." - Steve Jobs',
  features: [
    {
      title: "Business Role-Play",
      description:
        "Experience real business scenarios through engaging role-play activities",
    },
    {
      title: "Entrepreneurial Thinking",
      description:
        "Develop problem-solving skills and innovative thinking approaches",
    },
    {
      title: "Team Leadership",
      description:
        "Learn to lead teams, delegate tasks, and inspire others to achieve goals",
    },
    {
      title: "Business Mentorship",
      description:
        "Connect with experienced entrepreneurs who provide guidance and insights",
    },
  ],
  activities: [
    "Business Simulation Games",
    "Startup Role-Play Scenarios",
    "Product Development Challenges",
    "Marketing Strategy Sessions",
    "Sales Pitch Practice",
    "Team Building Exercises",
    "Leadership Workshops",
    "Entrepreneur Panel Discussions",
  ],
};

export default function EntrepreneursPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero
        data={communityData}
        backgroundImage="/images/communities/Roleplay.jpg"
        backgroundSize="100%"
      />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
