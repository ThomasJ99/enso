export const metadata = {
  title: "Diet - Thomas Dojo",
  description: "Articles on nutrition, recovery, and fueling your training.",
};

const articles = [
  {
    id: 1,
    title: "Protein Timing and Muscle Recovery",
    category: "Recovery",
    excerpt:
      "Understanding when to consume protein around your training window can significantly impact recovery and growth. Research points to a wider anabolic window than previously thought.",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "The Role of Carbohydrates in Strength Training",
    category: "Performance",
    excerpt:
      "Carbs are not the enemy. Learn how glycogen fuels high-intensity training and why timing your carbohydrate intake around workouts matters for performance.",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Hydration Beyond Water",
    category: "Recovery",
    excerpt:
      "Electrolyte balance plays a crucial role in muscle function and recovery. Sodium, potassium, and magnesium work together to keep you performing at your best.",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Whole Foods vs Supplements",
    category: "Nutrition",
    excerpt:
      "The supplement industry is enormous, but most of what you need comes from real food. A look at which supplements are worth it and which are marketing noise.",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Eating for Body Composition",
    category: "Nutrition",
    excerpt:
      "Whether you are cutting or bulking, the fundamentals remain the same: calorie balance, protein sufficiency, and food quality. A practical guide to managing body composition.",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Sleep, Stress, and Nutrition",
    category: "Recovery",
    excerpt:
      "Your diet is only as effective as your recovery. Poor sleep and chronic stress can undo careful nutrition planning. Strategies for aligning all three pillars.",
    readTime: "5 min",
  },
];

export default function DietPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-dongle text-6xl md:text-7xl mb-4 text-balance">
        Diet
      </h1>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Articles on nutrition, recovery, and fueling your training the right
        way. Practical advice grounded in evidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="zen-card border border-border p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-1 bg-muted text-muted-foreground">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {article.readTime}
              </span>
            </div>

            <h2 className="text-lg font-sans leading-snug text-balance">
              {article.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
