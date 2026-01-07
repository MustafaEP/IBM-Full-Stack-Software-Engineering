import { useEffect, useState } from "react";
import { recommendationService } from "../api/recommendationService";
import type { ProgressSummary, RecommendationItem } from "../types/api";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { ErrorState } from "../components/ErrorState";
import { EmptyState } from "../components/EmptyState";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recs, setRecs] = useState<RecommendationItem[]>([]);
  const [summary, setSummary] = useState<ProgressSummary | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await recommendationService.getDashboard();
      setRecs(data.recommendations);
      setSummary(data.progressSummary);
    } catch {
      setError(
        "Could not load dashboard. Make sure Recommendation Service is running and VITE_RECO_SERVICE_URL is set."
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
        <Spinner label="Loading dashboard..." />
      </div>
    );
  }

  if (error) {
    return <ErrorState title="Dashboard unavailable" description={error} onRetry={load} />;
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Progress">
          <div className="text-sm text-slate-200">
            Completed: <span className="font-semibold">{summary?.completedCount ?? 0}</span>
          </div>
          <div className="mt-2 text-sm text-slate-200">
            In progress: <span className="font-semibold">{summary?.inProgressCount ?? 0}</span>
          </div>
          <div className="mt-2 text-sm text-slate-200">
            Mastery: <span className="font-semibold">{summary?.masteryLevel ?? "medium"}</span>
          </div>
        </Card>

        <Card title="Resume learning" right={<Link to="/exercises"><Button variant="secondary">Browse</Button></Link>}>
          <div className="text-sm text-slate-400">
            Pick up where you left off — exercises and courses stay synced with your progress events.
          </div>
        </Card>

        <Card title="Recommended next">
          <div className="text-sm text-slate-400">
            Personalized by your signals (progress, mastery, recent runs).
          </div>
        </Card>
      </div>

      <Card title="Your recommendations">
        {recs.length === 0 ? (
          <EmptyState
            title="No recommendations yet"
            description="Complete an exercise or course to generate signals for personalization."
          />
        ) : (
          <div className="grid gap-3">
            {recs.map((r) => (
              <div
                key={r.id}
                className="flex flex-col gap-2 rounded-lg border border-slate-800 bg-slate-950/40 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-100">{r.title}</div>
                  <div className="mt-1 text-xs text-slate-400">
                    {r.kind.toUpperCase()}
                    {r.reason ? ` • ${r.reason}` : ""}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {r.kind === "exercise" ? (
                    <Link to={r.resumeUrl ?? `/exercises/${r.id}`}>
                      <Button variant="secondary">Open</Button>
                    </Link>
                  ) : r.resumeUrl ? (
                    <a href={r.resumeUrl}>
                      <Button variant="secondary">Open</Button>
                    </a>
                  ) : (
                    <Button variant="ghost" disabled>
                      Open
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}


