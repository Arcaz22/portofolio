import { profile } from '@/features/data/profile';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

export function ExperienceCard() {
  return (
    <div className="surface-card group flex h-full flex-col rounded-[22px] p-5 sm:rounded-[28px] sm:p-7">

      <div className="mb-3 flex shrink-0 items-start justify-between">
        <div>
          <p className="eyebrow mb-2">Career log</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="icon-box"><BriefcaseBusiness size={18} strokeWidth={1.6} /></div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="relative flex-1 overflow-y-auto pr-2 no-scrollbar">
          {profile.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item relative pb-3 pl-6 last:pb-0">
              {idx !== profile.experience.length - 1 && <div className="timeline-line absolute left-1 top-3 bottom-0 w-px" />}
              <div className="timeline-dot absolute left-0 top-1 h-2.25 w-2.25 rounded-full border-2 border-[#eeb55c] bg-[#1b2032]" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[13px] font-semibold leading-tight text-white sm:text-sm">{exp.title}</h3>
                  <p className="mt-0.5 text-[11px] text-[#eeb55c]">{exp.company}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-[10px] text-white/38">{exp.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 border-t border-white/10 pt-3">
          <a href={profile.resumePdfUrl} download="Chandra-Arcychan-Azfar-Resume.pdf" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-[#eeb55c]">
            View full resume <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
