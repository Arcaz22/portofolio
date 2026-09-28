interface ImportMetaEnv {
  readonly VITE_HOMELAB_HEALTH_URL?: string;
  readonly VITE_HOMELAB_INSPECT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
