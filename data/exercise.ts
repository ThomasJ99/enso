import type { ExerciseApiResponse, BodyPartsApiResponse } from "@/types/exercise";

const API_BASE = "https://exercisedb-api.vercel.app/api/v1";

// Fetch exercises with optional body part filter
export async function getExercises(
  offset = 0,
  limit = 20,
  bodyPart?: string
): Promise<ExerciseApiResponse | { message: string }> {
  try {
    let url = `${API_BASE}/exercises?offset=${offset}&limit=${limit}`;

    // If a body part filter is set, use the bodyparts endpoint
    if (bodyPart && bodyPart !== "all") {
      url = `${API_BASE}/exercises/bodyPart/${encodeURIComponent(bodyPart)}?offset=${offset}&limit=${limit}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { message: "Could not fetch exercises from the API" };
    }

    return (await response.json()) as ExerciseApiResponse;
  } catch (error) {
    return { message: "API connection failed" };
  }
}

// Fetch all available body parts for the filter
export async function getBodyParts(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE}/bodyparts`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) return [];

    const data = (await response.json()) as BodyPartsApiResponse;
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}
