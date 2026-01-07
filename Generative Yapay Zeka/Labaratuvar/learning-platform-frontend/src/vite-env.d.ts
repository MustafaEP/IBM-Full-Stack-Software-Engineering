/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_SERVICE_URL: string;
  readonly VITE_RECO_SERVICE_URL: string;
  readonly VITE_EXERCISE_SERVICE_URL: string;
  readonly VITE_FEEDBACK_STREAM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


