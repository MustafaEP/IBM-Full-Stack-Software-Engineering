import type { ReactNode } from "react";

export function Card({
  title,
  children,
  right
}: {
  title?: string;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">
      {title ? (
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="text-base font-semibold text-slate-100">{title}</div>
          {right}
        </div>
      ) : null}
      {children}
    </div>
  );
}


