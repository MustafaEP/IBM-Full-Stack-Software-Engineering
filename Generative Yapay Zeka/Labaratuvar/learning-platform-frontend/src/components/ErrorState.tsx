import { Button } from "./Button";

export function ErrorState({
  title,
  description,
  onRetry
}: {
  title: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-xl border border-rose-900/50 bg-rose-950/20 p-6">
      <div className="text-sm font-semibold text-rose-100">{title}</div>
      {description ? <div className="mt-2 text-sm text-rose-200/80">{description}</div> : null}
      {onRetry ? (
        <div className="mt-4">
          <Button variant="secondary" onClick={onRetry}>
            Retry
          </Button>
        </div>
      ) : null}
    </div>
  );
}


