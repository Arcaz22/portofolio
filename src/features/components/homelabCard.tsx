import { Activity, Cpu, ExternalLink } from 'lucide-react';

export type HomelabStatus = 'online' | 'offline' | 'unknown';

interface HomelabCardProps {
  status?: HomelabStatus;
  latency?: number;
  lastChecked?: string;
  href?: string;
}

const statusCopy: Record<HomelabStatus, { label: string; detail: string; className: string }> = {
  online: { label: 'Online', detail: 'Accepting connections', className: 'homelab-status--online' },
  offline: { label: 'Offline', detail: 'Node unreachable', className: 'homelab-status--offline' },
  unknown: { label: 'Checking', detail: 'Waiting for health data', className: 'homelab-status--unknown' },
};

export function HomelabCard({ status = 'unknown', latency, lastChecked, href = 'https://github.com/Arcaz22' }: HomelabCardProps) {
  const currentStatus = statusCopy[status];
  const isOnline = status === 'online';

  return (
    <div className="surface-card homelab-card group flex h-full min-h-0 flex-col rounded-[22px] p-5 sm:rounded-[28px] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow mb-3 text-[#9fd7b6]">INFRASTRUCTURE</p>
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
            {status === 'online' ? 'Quietly online.' : status === 'offline' ? 'Resting for now' : 'Checking in...'}
          </h3>
        </div>
        <div className="icon-box icon-box-green"><Activity size={18} strokeWidth={1.6} /></div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-white"><span className={`status-dot ${currentStatus.className} ${status === 'online' ? 'motion-safe:animate-pulse' : ''}`} /> {currentStatus.label}</div>
        <p className="mt-1 text-[11px] text-white/45">{currentStatus.detail}</p>
        <div className="mt-2 flex items-center justify-between gap-2 text-xs text-white/45">
          <span className="flex items-center gap-1.5"><Cpu size={13} /> Bare-metal server · Ubuntu</span>
          <span className="font-mono text-[10px] text-[#9fd7b6]">{latency ? `${latency} ms` : lastChecked ?? 'NODE 01'}</span>
        </div>
        {isOnline ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9fd7b6] transition-colors hover:text-white">Inspect systems <ExternalLink size={13} /></a>
        ) : (
          <span aria-disabled="true" title="Available when the homelab is online" className="mt-4 inline-flex cursor-not-allowed items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/25">Inspect systems <ExternalLink size={13} /></span>
        )}
      </div>
    </div>
  );
}
