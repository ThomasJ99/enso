import type { Exercise } from "@/types/exercise";
import Image from "next/image";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <li className="zen-card border border-border bg-background overflow-hidden">
      {/* GIF preview */}
      <div className="relative aspect-square bg-muted">
        <Image
          src={exercise.gifUrl}
          alt={`Demonstration of ${exercise.name}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-sans text-base capitalize leading-snug">
          {exercise.name}
        </h3>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {exercise.bodyParts.map((part) => (
            <span
              key={part}
              className="px-2 py-1 border border-border capitalize"
            >
              {part}
            </span>
          ))}
          {exercise.equipments.map((eq) => (
            <span
              key={eq}
              className="px-2 py-1 bg-muted capitalize"
            >
              {eq}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {exercise.targetMuscles.map((muscle) => (
            <span
              key={muscle}
              className="text-xs font-mono text-muted-foreground capitalize"
            >
              {muscle}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
