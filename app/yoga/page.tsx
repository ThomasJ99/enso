import PracticePageLayout from "@/components/practice/practice-page-layout";

export const metadata = {
  title: "Yoga - Thomas Dojo",
  description: "Movement flows that build flexibility, balance, and body awareness.",
};

const sections = [
  {
    heading: "Sun salutation (Surya Namaskar)",
    text: "A flowing sequence of twelve postures that warms the entire body. Link each movement to either an inhale or exhale. Start slowly and let the breath set the pace. Two to five rounds in the morning creates a strong baseline for the day.",
  },
  {
    heading: "Standing poses",
    text: "Warrior I, Warrior II, and Triangle form the backbone of a standing practice. They build strength in the legs, open the hips, and develop balance. Hold each pose for five breaths, focusing on alignment and grounding through the feet.",
  },
  {
    heading: "Hip openers",
    text: "Most people carry tension in the hips from sitting. Pigeon pose, lizard pose, and butterfly stretch release this stored tension gradually. Never force depth. The body opens on its own timeline when given consistent, gentle attention.",
  },
  {
    heading: "Savasana - Final rest",
    text: "The most important pose in any practice. Lie completely still for five to ten minutes after your flow. This is where the nervous system integrates the work. Skipping savasana is like cooking a meal and never eating it.",
  },
];

export default function YogaPage() {
  return (
    <PracticePageLayout
      title="Yoga"
      intro="Movement flows that build flexibility, balance, and body awareness. Yoga is the practice of uniting breath and movement into a single expression."
      sections={sections}
    />
  );
}
