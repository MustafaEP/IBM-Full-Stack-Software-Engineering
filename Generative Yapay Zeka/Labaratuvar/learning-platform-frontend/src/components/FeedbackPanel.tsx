import type { FeedbackEvent } from "../types/api";

export function FeedbackPanel({
  status,
  events
}: {
  status: "idle" | "running" | "done";
  events: FeedbackEvent[];
}) {
  const hints = events.filter((e) => e.type === "hint") as Array<{ type: "hint"; message: string }>;
  const explanations = events.filter((e) => e.type === "explanation") as Array<{
    type: "explanation";
    message: string;
  }>;
  const errors = events.filter((e) => e.type === "error") as Array<{ type: "error"; message: string }>;
  const stdout = events.filter((e) => e.type === "stdout") as Array<{ type: "stdout"; data: string }>;
  const stderr = events.filter((e) => e.type === "stderr") as Array<{ type: "stderr"; data: string }>;
  const score = events.find((e) => e.type === "score") as { type: "score"; score: number } | undefined;
  const statusEv = events
    .filter((e) => e.type === "status")
    .at(-1) as { type: "status"; status: string } | undefined;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-slate-100">Feedback</div>
        <div className="text-xs text-slate-400">
          {statusEv ? `status: ${statusEv.status}` : status}
          {score ? ` • score: ${score.score}` : ""}
        </div>
      </div>

      {errors.length ? (
        <Section title="Errors" tone="danger">
          <ul className="list-disc pl-5 text-sm text-rose-100">
            {errors.map((e, idx) => (
              <li key={idx}>{e.message}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {hints.length ? (
        <Section title="Hints">
          <ul className="list-disc pl-5 text-sm text-slate-200">
            {hints.map((e, idx) => (
              <li key={idx}>{e.message}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {explanations.length ? (
        <Section title="Explanations">
          <div className="space-y-2 text-sm text-slate-200">
            {explanations.map((e, idx) => (
              <p key={idx} className="whitespace-pre-wrap">
                {e.message}
              </p>
            ))}
          </div>
        </Section>
      ) : null}

      {(stdout.length || stderr.length) ? (
        <Section title="Output">
          <pre className="max-h-64 overflow-auto rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-200">
            {stdout.map((s) => s.data).join("")}
            {stderr.length ? "\n--- stderr ---\n" : ""}
            {stderr.map((s) => s.data).join("")}
          </pre>
        </Section>
      ) : null}

      {events.length === 0 ? (
        <div className="mt-4 text-sm text-slate-400">
          Run or submit your code to receive streamed feedback.
        </div>
      ) : null}
    </div>
  );
}

function Section({
  title,
  children,
  tone
}: {
  title: string;
  children: React.ReactNode;
  tone?: "danger";
}) {
  return (
    <div className="mt-4">
      <div className={`text-xs font-semibold ${tone === "danger" ? "text-rose-200" : "text-slate-300"}`}>
        {title}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}


