import Link from "next/link";
import EnsoCircle from "@/components/ui/enso-circle";

const features = [
  {
    href: "/exercises",
    title: "Exercises",
    description:
      "Browse 1500+ exercises with animated demonstrations. Filter by body part, target muscle, or equipment.",
  },
  {
    href: "/diet",
    title: "Diet",
    description:
      "Articles on nutrition, recovery, and fueling your training the right way.",
  },
  {
    href: "/meditation",
    title: "Meditation",
    description:
      "Stillness practices to sharpen focus and cultivate inner calm.",
  },
  {
    href: "/yoga",
    title: "Yoga",
    description:
      "Movement flows that build flexibility, balance, and body awareness.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-dongle text-7xl md:text-8xl lg:text-9xl leading-none text-balance">
            Thomas Dojo
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
            A minimalist training space where discipline meets stillness. Train
            your body with purpose, quiet your mind with intention, and walk the
            path of continuous practice.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="/exercises"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground text-sm font-sans transition-opacity duration-300 hover:opacity-80"
            >
              Browse exercises
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-sans transition-colors duration-300 hover:bg-muted"
            >
              About
            </Link>
          </div>
        </div>

        {/* Right: Enso circle */}
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <EnsoCircle />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* Features section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-dongle text-5xl md:text-6xl mb-12 text-balance">
          Practice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="zen-card group block border border-border p-8"
            >
              <h3 className="text-lg font-sans mb-2 group-hover:underline underline-offset-4 decoration-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
