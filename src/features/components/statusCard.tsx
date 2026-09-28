import { profile } from '@/features/data/profile';
import { ArrowUpRight, CircleCheck } from 'lucide-react';

export function StatusCard() {
  return (
    <div className="surface-card flex h-full min-h-0 flex-col rounded-[22px] p-5 sm:rounded-[28px] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow mb-3">Currently</p>
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">Open to a good brief.</h3>
        </div>
        <CircleCheck className="text-[#9fd7b6]" size={21} strokeWidth={1.6} />
      </div>
      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-xs text-white/45">{profile.statusLocation}</p>
        <a href={profile.social.email} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#eeb55c] transition-colors hover:text-white">
          Schedule a call <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
