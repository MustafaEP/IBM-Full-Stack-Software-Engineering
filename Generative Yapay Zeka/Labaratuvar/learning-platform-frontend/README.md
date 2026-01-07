# Learning Platform Frontend (React + TypeScript)

Developer-focused LMS frontend that aligns with a microservice backend:

- **User Management Service** (JWT auth)
- **Recommendation Service**
- **Coding Exercise + Real-time Feedback Services**

## Tech stack

- React + TypeScript (Vite)
- Tailwind CSS
- Routing: React Router
- HTTP: Axios
- Realtime: SSE via `EventSource` (hook included; can swap to WebSocket)

## Project structure

```
src/
  api/          # Axios clients + service wrappers per microservice
  components/   # Reusable UI components (Button, Card, FeedbackPanel, ...)
  context/      # Auth context (JWT storage + /me bootstrap)
  hooks/        # Shared hooks (useAuth, useEventSource)
  layouts/      # AppLayout/AuthLayout
  pages/        # Route-level pages
  routes/       # Route guards (ProtectedRoute)
  types/        # Shared API types
  utils/        # Storage helpers
```

## Env vars

Copy `env.example` → `.env.local` on your machine and adjust URLs:

- `VITE_USER_SERVICE_URL` (this repo: `user-management-service`, default `http://localhost:3001`)
- `VITE_RECO_SERVICE_URL`
- `VITE_EXERCISE_SERVICE_URL`
- `VITE_FEEDBACK_STREAM_URL` (optional; used for SSE fallback)

## Run

```bash
npm install
npm run dev
```

## Notes

- **No mock auth**: UI uses real JWT flow (`/v1/auth/login`, `/v1/auth/register`, `/v1/users/me`).
- **Service boundaries are explicit**: separate Axios clients (`userApi`, `recoApi`, `exerciseApi`).
- Realtime streaming is implemented with SSE; if your backend requires JWT headers, use WebSocket
  (SSE cannot attach custom headers).


