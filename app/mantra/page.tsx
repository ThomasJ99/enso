import PracticePageLayout from "@/components/practice/practice-page-layout";

export const metadata = {
  title: "Singing Mantra - Thomas Dojo",
  description: "Vocal practices that connect breath, vibration, and focus.",
};

const sections = [
  {
    heading: "Om - The universal sound",
    text: "The simplest and most powerful mantra. Inhale deeply, then release the sound on the exhale: A-U-M. Feel the vibration move from the belly (A), to the chest (U), to the head (M). Repeat for 5 to 10 minutes.",
  },
  {
    heading: "So Hum - I am that",
    text: "A silent mantra synchronized with the breath. On the inhale, internally say So. On the exhale, say Hum. This practice anchors attention to the present moment and can be done anywhere, at any time.",
  },
  {
    heading: "Chanting as breath training",
    text: "Extended exhales during chanting naturally activate the parasympathetic nervous system. This is why singing mantras feels calming. The practice trains diaphragmatic breathing and improves respiratory capacity over time.",
  },
  {
    heading: "Creating your own practice",
    text: "Choose a phrase that resonates with your intention. It does not need to be in Sanskrit. Repeat it with steady rhythm and full attention. The power of mantra lies in the repetition and the focus it demands, not in the specific words.",
  },
];

export default function MantraPage() {
  return (
    <PracticePageLayout
      title="Singing Mantra"
      intro="Vocal practices that connect breath, vibration, and focus. Mantra repetition is one of the oldest techniques for calming the mind and centering awareness."
      sections={sections}
    />
  );
}
