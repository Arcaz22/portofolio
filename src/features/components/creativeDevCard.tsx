import { ArrowDownRight, MapPin } from 'lucide-react';
import { profile } from '@/features/data/profile';

export function CreativeDevCard() {
  return (
    <div className="hero-card group relative h-full min-h-55 overflow-hidden rounded-[22px] bg-[#171b2a] sm:rounded-[28px] lg:min-h-0">
      <div className="system-art pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="system-art__glow" />
        <div className="system-art__grid" />
      </div>

      <div className="hero-meta absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:p-7">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#eeb55c]" /> Software Developer / 2026</span>
        <span className="rounded-full border border-[#9fd7b6]/25 bg-[#9fd7b6]/10 px-3 py-1.5 text-[#9fd7b6]">Software · systems · AI</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
        <p className="mb-3 flex items-center gap-2 text-xs font-medium text-white/65"><MapPin size={13} /> {profile.location}</p>
        <h1 className="hero-title max-w-175 text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
          Building systems<br /><span className="text-[#eeb55c]">people trust.</span>
        </h1>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/20 pt-4">
          <p className="hero-copy max-w-sm text-sm leading-relaxed text-white/68 sm:text-base">Software engineer focused on backend architecture, resilient data pipelines, and scalable web services</p>
          <ArrowDownRight className="hidden shrink-0 text-[#eeb55c] sm:block" size={30} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
