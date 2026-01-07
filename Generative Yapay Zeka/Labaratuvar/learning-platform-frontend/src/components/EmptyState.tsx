export function EmptyState({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/20 p-6">
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      {description ? <div className="mt-2 text-sm text-slate-400">{description}</div> : null}
    </div>
  );
}


