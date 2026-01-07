import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "../components/Spinner";

export function ProtectedRoute() {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isBootstrapping) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Spinner label="Checking session..." />
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}


