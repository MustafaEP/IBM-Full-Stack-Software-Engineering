import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="max-w-md text-center">
        <div className="text-xl font-semibold text-slate-100">Page not found</div>
        <div className="mt-2 text-sm text-slate-400">
          The link might be broken, or the page may have moved.
        </div>
        <div className="mt-6">
          <Link to="/">
            <Button>Go to dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


