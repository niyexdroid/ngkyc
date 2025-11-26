import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Get My Kid(s) to Read - Premium Reading Club | NGKYC",
  description:
    "Structured reading program with phonics games, storytelling, and interactive learning for ages 5-7. Help your child discover the joy of reading!",
};

const communityData = {
  title: "Get My Kid(s) to Read 📚✨",
  subtitle: "Premium Reading Club",
  description:
    "Welcome to our engaging reading adventure! Get My Kid(s) to Read is a structured program that makes learning to read fun through phonics games, interactive storytelling, and personalized reading activities designed specifically for early learners.",
  ageRange: "Ages 5-7",
  pricing: "Premium Program",
  members: "50+ members",
  color: "from-amber-400 to-orange-500",
  quote:
    '"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go." - Dr. Seuss',
  features: [
    {
      title: "Phonics Mastery",
      description:
        "Learn letter sounds and word building through engaging games and activities",
    },
    {
      title: "Interactive Stories",
      description:
        "Explore captivating stories with guided reading and comprehension exercises",
    },
    {
      title: "Reading Progress",
      description:
        "Track your child's reading journey with personalized assessments and milestones",
    },
    {
      title: "Expert Support",
      description:
        "Certified reading instructors provide guidance and encouragement throughout",
    },
  ],
  activities: [
    "Daily Phonics Practice",
    "Interactive Story Time",
    "Reading Comprehension Games",
    "Vocabulary Building Exercises",
    "Letter Recognition Activities",
    "Sight Word Challenges",
    "Reading Buddy Sessions",
    "Story Creation Workshops",
  ],
};

export default function GMKRPage() {
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero data={communityData} />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
