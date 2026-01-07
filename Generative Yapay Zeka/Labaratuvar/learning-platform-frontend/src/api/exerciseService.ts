import { exerciseApi } from "./http";
import type { ExerciseDetail, ExerciseSummary, RunResponse } from "../types/api";

export const exerciseService = {
  async list() {
    const res = await exerciseApi.get<{ items: ExerciseSummary[] }>("/v1/exercises");
    return res.data.items;
  },

  async get(exerciseId: string) {
    const res = await exerciseApi.get<ExerciseDetail>(`/v1/exercises/${exerciseId}`);
    return res.data;
  },

  async run(input: { exerciseId: string; code: string; language?: string }) {
    const res = await exerciseApi.post<RunResponse>(`/v1/exercises/${input.exerciseId}/run`, {
      code: input.code,
      language: input.language
    });
    return res.data;
  },

  async submit(input: { exerciseId: string; code: string; language?: string }) {
    const res = await exerciseApi.post<RunResponse>(`/v1/exercises/${input.exerciseId}/submit`, {
      code: input.code,
      language: input.language
    });
    return res.data;
  }
};


