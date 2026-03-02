import { Suspense } from "react";
import { getExercises, getBodyParts } from "@/data/exercise";
import type { ExerciseApiResponse } from "@/types/exercise";
import ExerciseCard from "@/components/exercises/exercise-card";
import BodyPartFilter from "@/components/exercises/body-part-filter";
import Link from "next/link";

export const metadata = {
  title: "Exercises - Thomas Dojo",
  description: "Browse 1500+ exercises with animated demonstrations.",
};

export default async function ExercisesPage(props: {
  searchParams: Promise<{ bodyPart?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const bodyPart =
    typeof searchParams.bodyPart === "string"
      ? searchParams.bodyPart
      : "all";
  const page =
    typeof searchParams.page === "string"
      ? Number(searchParams.page)
      : 1;
  const limit = 20;
  const offset = (page - 1) * limit;

  // Fetch exercises and body parts in parallel
  const [exerciseData, bodyParts] = await Promise.all([
    getExercises(offset, limit, bodyPart),
    getBodyParts(),
  ]);

  // Error handling
  if ("message" in exerciseData) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="font-dongle text-5xl mb-4">Exercises</h1>
        <p className="text-muted-foreground">{exerciseData.message}</p>
      </section>
    );
  }

  const { exercises, totalPages } = (exerciseData as ExerciseApiResponse).data;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-dongle text-6xl md:text-7xl mb-4 text-balance">
        Exercises
      </h1>
      <p className="text-muted-foreground mb-8 max-w-xl">
        Browse exercises by body part. Each card shows the target muscles,
        equipment needed, and an animated demonstration.
      </p>

      {/* Body part filter */}
      <Suspense fallback={<div className="h-10" />}>
        <BodyPartFilter bodyParts={bodyParts} current={bodyPart} />
      </Suspense>

      {/* Exercise grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.exerciseId} exercise={exercise} />
        ))}
      </ul>

      {/* Empty state */}
      {exercises.length === 0 && (
        <p className="text-center text-muted-foreground py-20">
          No exercises found for this body part.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center gap-4 mt-12"
          aria-label="Pagination"
        >
          {page > 1 && (
            <Link
              href={`/exercises?bodyPart=${bodyPart}&page=${page - 1}`}
              className="px-4 py-2 border border-border text-sm hover:bg-muted transition-colors duration-300"
            >
              Previous
            </Link>
          )}
          <span className="text-sm text-muted-foreground font-mono">
            {page} / {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/exercises?bodyPart=${bodyPart}&page=${page + 1}`}
              className="px-4 py-2 border border-border text-sm hover:bg-muted transition-colors duration-300"
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </section>
  );
}
