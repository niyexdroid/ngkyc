import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Presentation & Articulation Skills - Speech Zone | NGKYC",
  description:
    "Develop confident speaking, presentation skills, and podcast creation abilities. Ages 8-16 welcome!",
};

const communityData = {
  title: "Presentation & Articulation Skills 🌟",
  subtitle: "Welcome to the Speech Zone!",
  description:
    "Master the art of communication! Speech Zone helps young speakers develop confidence, clarity, and compelling presentation skills through practice sessions, constructive feedback, and real-world speaking opportunities.",
  ageRange: "Ages 8-16",
  pricing: "Free Program",
  members: "80+ members",
  color: "from-rose-400 to-pink-500",
  quote: '"The art of communication is the language of leadership."',
  features: [
    {
      title: "Public Speaking",
      description:
        "Build confidence and master presentation techniques through guided practice",
    },
    {
      title: "Articulation Training",
      description:
        "Improve clarity, pronunciation, and vocal delivery for effective communication",
    },
    {
      title: "Podcast Creation",
      description:
        "Learn to create, produce, and host your own podcast or radio show",
    },
    {
      title: "Performance Feedback",
      description:
        "Receive constructive feedback from peers and mentors to improve continuously",
    },
  ],
  activities: [
    "Public Speaking Practice",
    "Speech Writing Workshops",
    "Debate and Discussion Sessions",
    "Podcast Recording & Editing",
    "Storytelling Techniques",
    "Voice Training Exercises",
    "Presentation Skills Development",
    "Confidence Building Activities",
  ],
};

export default function SpeechZonePage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
