export function Spinner({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-200">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-slate-200" />
      {label ? <div className="text-sm">{label}</div> : null}
    </div>
  );
}


