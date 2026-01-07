import { Link, Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-10">
        <div className="mb-6">
          <Link to="/" className="text-lg font-semibold text-slate-100">
            Learning Platform
          </Link>
          <div className="mt-1 text-sm text-slate-400">Sign in to continue.</div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
          <Outlet />
        </div>

        <div className="mt-6 text-xs text-slate-500">
          Developer-focused LMS UI — minimal, fast, and scalable.
        </div>
      </div>
    </div>
  );
}


