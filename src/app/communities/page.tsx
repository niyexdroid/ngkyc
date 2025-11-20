import CommunitiesHero from "@/components/communities/CommunitiesHero";
import CommunitiesGrid from "@/components/communities/CommunitiesGrid";
import CommunityFeatures from "@/components/communities/CommunityFeatures";

export const metadata = {
  title: "Communities - NGKYC Programs",
  description:
    "Explore our 8 specialized communities designed for kids and youth aged 5-18+. From AI exploration to entrepreneurship training.",
};

export default function CommunitiesPage() {
  return (
    <>
      <CommunitiesHero />
      <CommunitiesGrid />
      <CommunityFeatures />
    </>
  );
}
