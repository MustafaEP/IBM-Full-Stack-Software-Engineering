import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseService } from "../api/exerciseService";
import type { ExerciseDetail, FeedbackEvent } from "../types/api";
import { Spinner } from "../components/Spinner";
import { ErrorState } from "../components/ErrorState";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { FeedbackPanel } from "../components/FeedbackPanel";
import { useEventSource } from "../hooks/useEventSource";

export function ExerciseDetailPage() {
  const { exerciseId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [exercise, setExercise] = useState<ExerciseDetail | null>(null);

  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [events, setEvents] = useState<FeedbackEvent[]>([]);
  const [runId, setRunId] = useState<string | null>(null);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);

  const derivedStreamUrl = useMemo(() => {
    if (streamUrl) return streamUrl;
    if (!runId) return null;
    const base = import.meta.env.VITE_FEEDBACK_STREAM_URL;
    if (!base) return null;
    // Convention-based fallback; adjust to your backend.
    return `${base.replace(/\/$/, "")}/v1/runs/${runId}/events`;
  }, [runId, streamUrl]);

  useEventSource<FeedbackEvent>({
    url: derivedStreamUrl,
    enabled: Boolean(derivedStreamUrl) && status === "running",
    // Prefer cookie-based auth for SSE. If you only support JWT headers, use WebSocket instead.
    withCredentials: false,
    onEvent: (e) => {
      setEvents((prev) => [...prev, e]);
      if (e.type === "status" && e.status === "done") setStatus("done");
    },
    onError: () => setStatus("done")
  });

  useEffect(() => {
    const load = async () => {
      if (!exerciseId) return;
      setLoading(true);
      setError(null);
      try {
        const ex = await exerciseService.get(exerciseId);
        setExercise(ex);
        setCode(ex.starterCode ?? "");
      } catch {
        setError("Could not load exercise details.");
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, [exerciseId]);

  if (loading) {
    return (
      <div className="grid place-items-center py-16">
        <Spinner label="Loading exercise..." />
      </div>
    );
  }

  if (error || !exercise) {
    return <ErrorState title="Exercise unavailable" description={error ?? "Unknown error"} />;
  }

  const run = async (mode: "run" | "submit") => {
    setStatus("running");
    setEvents([]);
    setRunId(null);
    setStreamUrl(null);
    try {
      const res =
        mode === "run"
          ? await exerciseService.run({ exerciseId: exercise.id, code })
          : await exerciseService.submit({ exerciseId: exercise.id, code });
      setRunId(res.runId);
      if (res.streamUrl) setStreamUrl(res.streamUrl);
    } catch {
      setStatus("done");
      setEvents([{ type: "error", message: "Could not start run. Check Exercise/Runner services." }]);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-6">
        <Card title={exercise.title}>
          <div className="text-xs text-slate-400">
            {exercise.difficulty.toUpperCase()} • {exercise.languages.join(", ")}
          </div>
          <div className="mt-4 whitespace-pre-wrap text-sm text-slate-200">
            {exercise.description}
          </div>
        </Card>

        <Card
          title="Editor"
          right={
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => void run("run")} disabled={status === "running"}>
                Run
              </Button>
              <Button onClick={() => void run("submit")} disabled={status === "running"}>
                Submit
              </Button>
            </div>
          }
        >
          <textarea
            className="min-h-[360px] w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 p-3 font-mono text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
          />
          <div className="mt-2 text-xs text-slate-500">
            Language-agnostic placeholder. Swap with Monaco/CodeMirror when ready.
          </div>
        </Card>
      </div>

      <div className="grid gap-6">
        <FeedbackPanel status={status} events={events} />
        {status === "running" && !derivedStreamUrl ? (
          <ErrorState
            title="Realtime stream not configured"
            description="Set VITE_FEEDBACK_STREAM_URL or have the backend return streamUrl from /run."
          />
        ) : null}
      </div>
    </div>
  );
}


