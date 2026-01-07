import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import { getHumanError } from "../utils/errors";

export function RegisterPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <div>
        <div className="text-base font-semibold text-slate-100">Create account</div>
        <div className="mt-1 text-sm text-slate-400">
          Minimal profile — you can update it later.
        </div>
      </div>

      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitting(true);
          setError(null);
          try {
            await auth.register({ email, displayName, password });
            navigate("/", { replace: true });
          } catch (err: unknown) {
            setError(getHumanError(err));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Input
          label="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Ada Lovelace"
          required
        />

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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          hint="10+ characters recommended."
          required
        />

        {error ? <div className="text-sm text-rose-300">{error}</div> : null}

        <Button type="submit" disabled={submitting}>
          {submitting ? "Creating..." : "Create account"}
        </Button>
      </form>

      <div className="text-sm text-slate-400">
        Already have an account?{" "}
        <Link className="text-sky-300 hover:underline" to="/login">
          Sign in
        </Link>
        .
      </div>
    </div>
  );
}


