import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import NGOSection from "@/components/about/NGOSection";

export const metadata = {
  title: "About NGKYC - Next Gen Kids & Youth Club",
  description:
    "Learn about our mission to create a creativity, innovation & technology hub for kids and youths. Discover how we empower the next generation.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <NGOSection />
    </>
  );
}
