import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, className = "", ...props }: Props) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-200">{label}</div>
      <input
        className={
          "mt-2 w-full rounded-md border bg-slate-950 px-3 py-2 text-sm text-slate-100 " +
          "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 " +
          (error ? "border-rose-500/60" : "border-slate-800") +
          ` ${className}`
        }
        {...props}
      />
      {error ? (
        <div className="mt-2 text-xs text-rose-300">{error}</div>
      ) : hint ? (
        <div className="mt-2 text-xs text-slate-400">{hint}</div>
      ) : null}
    </label>
  );
}


