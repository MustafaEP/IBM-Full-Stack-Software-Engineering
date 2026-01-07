import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { exerciseService } from "../api/exerciseService";
import type { ExerciseSummary } from "../types/api";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { ErrorState } from "../components/ErrorState";
import { EmptyState } from "../components/EmptyState";
import { Button } from "../components/Button";

export function ExercisesPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<ExerciseSummary[]>([]);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const list = await exerciseService.list();
      setItems(list);
    } catch {
      setError(
        "Could not load exercises. Make sure Exercise Service is running and VITE_EXERCISE_SERVICE_URL is set."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center py-16">
        <Spinner label="Loading exercises..." />
      </div>
    );
  }

  if (error) return <ErrorState title="Exercises unavailable" description={error} onRetry={load} />;

  return (
    <div className="grid gap-6">
      <Card title="Exercises">
        <div className="text-sm text-slate-400">
          Interactive coding tasks with real-time feedback (run, grade, hints).
        </div>
      </Card>

      {items.length === 0 ? (
        <EmptyState
          title="No exercises yet"
          description="Create and publish exercises in the Exercise Authoring service."
        />
      ) : (
        <div className="grid gap-3">
          {items.map((ex) => (
            <div
              key={ex.id}
              className="rounded-xl border border-slate-800 bg-slate-900/20 p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-100">{ex.title}</div>
                  <div className="mt-1 text-xs text-slate-400">
                    {ex.difficulty.toUpperCase()} • {ex.languages.join(", ")}
                  </div>
                </div>
                <Link to={`/exercises/${ex.id}`}>
                  <Button variant="secondary">Open</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


