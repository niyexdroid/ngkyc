import CommunitiesHero from "@/components/programs/CommunitiesHero";
import CommunitiesGrid from "@/components/programs/CommunitiesGrid";
import CommunityFeatures from "@/components/programs/CommunityFeatures";

export const metadata = {
  title: "Programs - NGKYC Programs",
  description:
    "Explore our 8 specialized programs designed for kids and youth aged 5-18+. From AI exploration to entrepreneurship training.",
};

export default function ProgramsPage() {
  return (
    <>
      <CommunitiesHero />
      <CommunitiesGrid />
      <CommunityFeatures />
    </>
  );
}
