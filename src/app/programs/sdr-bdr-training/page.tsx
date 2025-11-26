import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "SDR/BDR Training + Internship | NGKYC",
  description:
    "Professional training in sales development with real internship opportunities. Ages 18+ only!",
};

const communityData = {
  title: "SDR/BDR Training + Internship 💻",
  subtitle: "Tech Sales Mastery",
  description:
    "Launch your tech sales career! Our comprehensive SDR/BDR training program combines professional sales development training with real internship opportunities, giving you hands-on experience in the fast-growing tech sales industry.",
  ageRange: "18+ Only",
  pricing: "Premium Program",
  members: "180+ participants",
  color: "from-slate-400 to-gray-500",
  quote:
    '"Sales are contingent upon the attitude of the salesman, not the attitude of the prospect."',
  features: [
    {
      title: "Sales Development Training",
      description:
        "Master SDR/BDR fundamentals including prospecting, outreach, and qualification",
    },
    {
      title: "Tech Stack Mastery",
      description:
        "Learn to use CRM systems, sales automation tools, and analytics platforms",
    },
    {
      title: "Real Internships",
      description:
        "Gain practical experience through internship placements with partner companies",
    },
    {
      title: "Career Placement",
      description:
        "Get support with job placement, resume building, and interview preparation",
    },
  ],
  activities: [
    "Cold Calling Training",
    "Email Outreach Workshops",
    "CRM System Training (Salesforce, HubSpot)",
    "Lead Qualification Techniques",
    "Sales Pitch Development",
    "Objection Handling Practice",
    "Live Internship Projects",
    "Professional Networking Events",
  ],
};

export default function SDRBDRTrainingPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
