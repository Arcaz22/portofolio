import { useQuery } from '@tanstack/react-query';
import type { HomelabStatus } from '@/features/components/homelabCard';

const HEALTH_CHECK_URL = import.meta.env.VITE_HOMELAB_HEALTH_URL as string | undefined;

const TIMEOUT_MS = 5000;
const POLL_INTERVAL_MS = 30_000;

export interface HomelabHealth {
  status: HomelabStatus;
  latency?: number;
  checkedAt: number;
}

async function checkHomelabHealth(): Promise<HomelabHealth> {
  // Env belum diisi = jangan tampilkan "offline" palsu, biarkan "checking"
  if (!HEALTH_CHECK_URL) {
    return { status: 'unknown', checkedAt: Date.now() };
  }

  const start = performance.now();

  try {
    const response = await fetch(HEALTH_CHECK_URL, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    const latency = Math.round(performance.now() - start);

    // Kalau tunnel mati, Cloudflare membalas 530/502 (tanpa header CORS),
    // jadi fetch akan throw dan jatuh ke catch di bawah = offline.
    return response.ok
      ? { status: 'online', latency, checkedAt: Date.now() }
      : { status: 'offline', checkedAt: Date.now() };
  } catch {
    return { status: 'offline', checkedAt: Date.now() };
  }
}

export function useHomelabStatus() {
  return useQuery({
    queryKey: ['homelab-status'],
    queryFn: checkHomelabHealth,
    refetchInterval: POLL_INTERVAL_MS,
    refetchIntervalInBackground: false,
    retry: false,
    staleTime: 0,
  });
}
