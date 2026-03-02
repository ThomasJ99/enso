import PracticePageLayout from "@/components/practice/practice-page-layout";

export const metadata = {
  title: "Your Shadow - Thomas Dojo",
  description: "Exploring the parts of yourself that training brings to light.",
};

const sections = [
  {
    heading: "What is shadow work?",
    text: "The shadow is the part of yourself that you avoid looking at. In training, it shows up as the workout you always skip, the discomfort you distract yourself from, the plateau you refuse to accept. Shadow work means turning toward these things instead of away.",
  },
  {
    heading: "Training as a mirror",
    text: "Heavy lifts, long runs, and deep stretches all reveal something about your relationship with discomfort, ego, and patience. The body does not lie. Pay attention to when you quit, what you avoid, and the stories you tell yourself during hard efforts.",
  },
  {
    heading: "Journaling practice",
    text: "After training, spend five minutes writing without editing. What came up? What did you resist? What surprised you? Over time, patterns emerge. These patterns are the shadow becoming visible, which is the first step toward integrating it.",
  },
  {
    heading: "Sitting with discomfort",
    text: "The next time you feel the urge to stop during training, pause instead of quitting. Breathe. Notice the sensation without labeling it as good or bad. This is the practice: staying present with what is, rather than escaping into what is comfortable.",
  },
];

export default function ShadowPage() {
  return (
    <PracticePageLayout
      title="Your Shadow"
      intro="Exploring the parts of yourself that training brings to light. Growth happens not only in what you build, but in what you are willing to face."
      sections={sections}
    />
  );
}
