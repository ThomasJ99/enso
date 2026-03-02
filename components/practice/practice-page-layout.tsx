import EnsoCircle from "@/components/ui/enso-circle";

interface PracticeSection {
  heading: string;
  text: string;
}

export default function PracticePageLayout({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PracticeSection[];
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-end gap-6 mb-6">
        <h1 className="font-dongle text-6xl md:text-7xl leading-none">
          {title}
        </h1>
        <div className="w-10 h-10 opacity-15 flex-shrink-0 mb-2">
          <EnsoCircle />
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-16">
        {intro}
      </p>

      {/* Content sections */}
      <div className="flex flex-col gap-12">
        {sections.map((section) => (
          <div key={section.heading} className="border-l border-border pl-6">
            <h2 className="text-base font-sans mb-3">{section.heading}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
