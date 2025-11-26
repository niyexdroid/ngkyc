import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Teens Career Guidance & Prep | NGKYC",
  description:
    "Comprehensive career exploration, skill development, and future planning for teens. Ages 16+ only!",
};

const communityData = {
  title: "Teens Career Guidance & Prep 🎯",
  subtitle: "Future Career Planning",
  description:
    "Plan your future with confidence! Our Teen Career Guidance program provides comprehensive career exploration, skill assessments, industry insights, and practical preparation for your professional journey ahead.",
  ageRange: "16+ Only",
  pricing: "Free Program",
  members: "85+ members",
  color: "from-blue-400 to-indigo-500",
  quote:
    '"Choose a job you love, and you will never have to work a day in your life."',
  features: [
    {
      title: "Career Exploration",
      description:
        "Discover various career paths and understand what each profession entails",
    },
    {
      title: "Skills Assessment",
      description:
        "Identify your strengths, interests, and skills to find the right career fit",
    },
    {
      title: "Industry Insights",
      description:
        "Learn from professionals about real-world careers and industry trends",
    },
    {
      title: "College & Career Prep",
      description:
        "Get guidance on college applications, resumes, and interview preparation",
    },
  ],
  activities: [
    "Career Assessment Tests",
    "Industry Expert Talks",
    "Resume Building Workshops",
    "Interview Practice Sessions",
    "College Application Guidance",
    "Internship Opportunity Discovery",
    "Professional Networking Events",
    "Career Path Planning Sessions",
  ],
};

export default function CareerGuidancePage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
