export interface Exercise {
  exerciseId: string;
  name: string;
  gifUrl: string;
  instructions: string[];
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
  secondaryMuscles: string[];
}

export interface ExerciseApiResponse {
  success: boolean;
  data: {
    exercises: Exercise[];
    totalPages: number;
    currentPage: number;
    totalExercises: number;
  };
}

export interface BodyPartsApiResponse {
  success: boolean;
  data: string[];
}
