import { recoApi } from "./http";
import type { ProgressSummary, RecommendationItem } from "../types/api";

export const recommendationService = {
  async getDashboard() {
    /**
     * Expected shape (example):
     * {
     *   recommendations: RecommendationItem[],
     *   progressSummary: ProgressSummary
     * }
     */
    const res = await recoApi.get<{
      recommendations: RecommendationItem[];
      progressSummary: ProgressSummary;
    }>("/v1/dashboard");
    return res.data;
  }
};


