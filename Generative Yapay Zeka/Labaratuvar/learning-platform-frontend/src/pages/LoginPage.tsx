import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import { getHumanError } from "../utils/errors";

export function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as { from?: string } | null)?.from ?? "/";

  return (
    <div className="space-y-5">
      <div>
        <div className="text-base font-semibold text-slate-100">Login</div>
        <div className="mt-1 text-sm text-slate-400">Use your account to access the platform.</div>
      </div>

      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitting(true);
          setError(null);
          try {
            await auth.login({ email, password });
            navigate(from, { replace: true });
          } catch (err: unknown) {
            setError(getHumanError(err));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error ? <div className="text-sm text-rose-300">{error}</div> : null}

        <Button type="submit" disabled={submitting}>
          {submitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="text-sm text-slate-400">
        No account?{" "}
        <Link className="text-sky-300 hover:underline" to="/register">
          Create one
        </Link>
        .
      </div>
    </div>
  );
}


