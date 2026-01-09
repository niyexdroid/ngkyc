import CommunityHero from "@/components/community/CommunityHero";
import CommunityContent from "@/components/community/CommunityContent";
import CommunitySignup from "@/components/community/CommunitySignup";

export const metadata = {
  title: "Kids Chatroom - Creative Expression & Connection | NGKYC",
  description:
    "Join Kids Chatroom for digital art, music, creative storytelling, and connecting with creative peers. Ages 8-16 welcome!",
};

const communityData = {
  title: "Kids Chatroom 🎨",
  subtitle: "Creative Expression & Connection",
  description:
    "Welcome to our vibrant creative space! Kids Chatroom is where young artists, musicians, and storytellers come together to express themselves, share their creations, and connect with like-minded creative peers from around the world.",
  ageRange: "Ages 8-16",
  pricing: "Free Program",
  members: "200+ participants",
  color: "from-pink-400 to-purple-500",
  quote:
    '"Creativity is intelligence having fun. Every child is an artist waiting to bloom."',
  features: [
    {
      title: "Digital Art Studio",
      description:
        "Create stunning digital artwork with easy-to-use tools and guided tutorials",
    },
    {
      title: "Music & Sound",
      description:
        "Explore music creation, composition, and share your musical creations",
    },
    {
      title: "Creative Writing",
      description:
        "Write stories, poetry, and share your creative narratives with peers",
    },
    {
      title: "Safe Community",
      description:
        "Moderated chatroom where kids can safely share and discuss their creative work",
    },
  ],
  activities: [
    "Digital Drawing and Painting",
    "Music Composition Projects",
    "Creative Storytelling Sessions",
    "Animation Basics",
    "Photo Editing Workshops",
    "Collaborative Art Projects",
    "Creative Challenges and Contests",
    "Peer Feedback and Showcases",
  ],
};

export default function KidsChatroomPage() {
  // Replace this URL with your actual Google Form URL when available
  const googleFormUrl = "https://forms.gle/NakPm7YUyQBcH87z9";

  return (
    <>
      <CommunityHero
        data={communityData}
        backgroundImage="/images/communities/chatroom1.jpeg"
        backgroundSize="cover"
      />
      <CommunityContent data={communityData} />
      <CommunitySignup data={communityData} googleFormUrl={googleFormUrl} />
    </>
  );
}
