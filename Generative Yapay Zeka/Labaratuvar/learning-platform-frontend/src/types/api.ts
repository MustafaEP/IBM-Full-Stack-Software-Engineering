export type ApiError = {
  error: string;
  message: string;
};

export type UserPublic = {
  id: string;
  email: string;
  displayName: string;
};

export type AuthResponse = {
  accessToken: string;
  user: UserPublic;
};

export type ProgressSummary = {
  completedCount: number;
  inProgressCount: number;
  masteryLevel: "low" | "medium" | "high";
};

export type RecommendationItem = {
  id: string;
  title: string;
  kind: "course" | "exercise";
  reason?: string;
  resumeUrl?: string;
  progress?: {
    status: "not_started" | "in_progress" | "completed";
    percent?: number;
    masteryLevel?: "low" | "medium" | "high";
  };
};

export type ExerciseSummary = {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  languages: string[];
};

export type ExerciseDetail = ExerciseSummary & {
  description: string;
  starterCode?: string;
};

export type RunResponse = {
  runId: string;
  /**
   * Optional: backend can return a dedicated stream URL (SSE or WS).
   * If absent, frontend can derive one from env config.
   */
  streamUrl?: string;
};

export type FeedbackEvent =
  | { type: "status"; status: "queued" | "running" | "grading" | "done" }
  | { type: "stdout"; data: string }
  | { type: "stderr"; data: string }
  | { type: "error"; message: string }
  | { type: "hint"; message: string }
  | { type: "explanation"; message: string }
  | { type: "score"; score: number };


