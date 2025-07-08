/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_TREND_API: string;
  readonly VITE_TMDB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
