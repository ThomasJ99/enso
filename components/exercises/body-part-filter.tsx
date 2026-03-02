"use client";

import Link from "next/link";

export default function BodyPartFilter({
  bodyParts,
  current,
}: {
  bodyParts: string[];
  current: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/exercises"
        className={`px-3 py-1.5 text-sm border transition-colors duration-300 capitalize ${
          current === "all"
            ? "bg-accent text-accent-foreground border-accent"
            : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
        }`}
      >
        All
      </Link>
      {bodyParts.map((part) => (
        <Link
          key={part}
          href={`/exercises?bodyPart=${encodeURIComponent(part)}`}
          className={`px-3 py-1.5 text-sm border transition-colors duration-300 capitalize ${
            current === part
              ? "bg-accent text-accent-foreground border-accent"
              : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
          }`}
        >
          {part}
        </Link>
      ))}
    </div>
  );
}
