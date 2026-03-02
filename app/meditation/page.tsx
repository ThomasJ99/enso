import PracticePageLayout from "@/components/practice/practice-page-layout";

export const metadata = {
  title: "Meditation - Thomas Dojo",
  description: "Stillness practices to sharpen focus and cultivate inner calm.",
};

const sections = [
  {
    heading: "Zazen - Seated meditation",
    text: "The foundation of all practice. Sit with a straight spine, hands in cosmic mudra, eyes half-open gazing downward. Focus on the breath entering and leaving the body. When thoughts arise, acknowledge them and return to the breath. Start with 10 minutes and gradually extend.",
  },
  {
    heading: "Walking meditation",
    text: "Kinhin bridges the gap between seated practice and daily life. Walk slowly in a circle, synchronizing each step with the breath. The left foot moves on the inhale, the right on the exhale. Maintain the same quality of attention as in seated meditation.",
  },
  {
    heading: "Body scan",
    text: "Lying down or seated, bring awareness systematically through each part of the body. Start at the crown of the head and move downward, noticing tension without trying to change it. This practice develops interoception, the ability to sense the internal state of the body.",
  },
  {
    heading: "Building a daily practice",
    text: "Consistency matters more than duration. Five minutes every morning creates a stronger foundation than occasional hour-long sessions. Choose a fixed time and place. Remove distractions. The practice is showing up, not achieving a particular state.",
  },
];

export default function MeditationPage() {
  return (
    <PracticePageLayout
      title="Meditation"
      intro="Stillness practices to sharpen focus and cultivate inner calm. Meditation is not about emptying the mind, but about observing it without attachment."
      sections={sections}
    />
  );
}
