import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import { useState } from "react";

const navLinkBase =
  "block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-800/70";

export function AppLayout() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-900 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden rounded-md border border-slate-800 px-3 py-2 text-sm"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              Menu
            </button>
            <div className="text-sm font-semibold text-slate-100">Learning Platform</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-xs text-slate-400">
              {auth.user?.displayName} • {auth.user?.email}
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                auth.logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="mx-auto hidden max-w-6xl gap-2 px-4 pb-3 md:flex">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/exercises">Exercises</NavItem>
          <NavItem to="/profile">Profile</NavItem>
        </div>

        {mobileOpen ? (
          <div className="mx-auto max-w-6xl px-4 pb-4 md:hidden">
            <div className="grid gap-1">
              <NavItem to="/" onClick={() => setMobileOpen(false)}>
                Dashboard
              </NavItem>
              <NavItem to="/exercises" onClick={() => setMobileOpen(false)}>
                Exercises
              </NavItem>
              <NavItem to="/profile" onClick={() => setMobileOpen(false)}>
                Profile
              </NavItem>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({
  to,
  children,
  onClick
}: {
  to: string;
  children: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${navLinkBase} ${isActive ? "bg-slate-800 text-slate-50" : "text-slate-300"}`
      }
    >
      {children}
    </NavLink>
  );
}


