import EnsoCircle from "@/components/ui/enso-circle";
import Link from "next/link";

export const metadata = {
  title: "About - Thomas Dojo",
  description:
    "The philosophy and purpose behind Thomas Dojo. Training with intention.",
};

const principles = [
  {
    heading: "Discipline over motivation",
    text: "Motivation fades. Discipline is showing up on the days when everything in you says stay home. The dojo is built on consistency, not inspiration.",
  },
  {
    heading: "Body and mind as one",
    text: "Physical training without mental awareness is just movement. Meditation without embodiment is just thinking. We practice both because they are not separate things.",
  },
  {
    heading: "Simplicity in practice",
    text: "You do not need complicated programs or expensive equipment. A clear intention, a focused session, and honest reflection are enough. Strip away the noise.",
  },
  {
    heading: "Continuous path",
    text: "There is no finish line. The enso circle is never fully closed. Practice is not about reaching a destination but about walking the path with attention and care.",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header with enso */}
      <div className="flex items-end gap-6 mb-6">
        <h1 className="font-dongle text-6xl md:text-7xl leading-none">
          About
        </h1>
        <div className="w-10 h-10 opacity-15 flex-shrink-0 mb-2">
          <EnsoCircle />
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-16">
        Thomas Dojo is a personal training space. It exists to document the
        practices, exercises, and ideas that shape a life of intentional
        movement. No fluff, no branding games, just the work.
      </p>

      {/* Principles */}
      <div className="flex flex-col gap-12 mb-20">
        {principles.map((principle) => (
          <div key={principle.heading} className="border-l border-border pl-6">
            <h2 className="text-base font-sans mb-3">{principle.heading}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {principle.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-border p-8 flex flex-col items-center text-center gap-4">
        <p className="text-sm text-muted-foreground">
          Ready to begin?
        </p>
        <Link
          href="/exercises"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-sm font-sans transition-opacity duration-300 hover:opacity-80"
        >
          Browse exercises
        </Link>
      </div>
    </section>
  );
}
