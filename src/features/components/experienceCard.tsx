import { profile } from '@/features/data/profile';

export function ExperienceCard() {
  return (
    <div className="group h-full rounded-xl bg-slate-950/50 border border-slate-800 p-3 sm:p-4 flex flex-col transition-all duration-500 hover:border-amber-500/30">

      <div className="flex items-center justify-between mb-3 shrink-0">
        <p className="text-[8px] sm:text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
          Work History
        </p>
        <div className="flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
      </div>

      <div className="hidden sm:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto pr-2 space-y-0 no-scrollbar scroll-smooth">

          {profile.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-5 group/item pb-6 last:pb-2">

              {idx !== profile.experience.length - 1 && (
                <div className="absolute left-[4.5px] top-3 bottom-0 w-[0.5px] bg-slate-800 group-hover/item:bg-slate-700 transition-colors" />
              )}

              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border border-slate-700 bg-slate-950 group-hover/item:border-amber-500 transition-colors duration-300 flex items-center justify-center z-10">
                <div className="w-1 h-1 rounded-full bg-slate-700 group-hover/item:bg-amber-500 transition-colors" />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-[11px] sm:text-[13px] font-bold text-slate-200 leading-tight group-hover/item:text-white transition-colors">
                  {exp.title}
                </h3>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] text-amber-500/80 font-medium tracking-wide">
                    {exp.company}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono">
                    {exp.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 sm:border-t border-slate-800/50 mt-auto sm:mt-2 shrink-0">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center justify-between bg-slate-900/50 hover:bg-amber-500/10 border border-slate-800 hover:border-amber-500/30 rounded-lg px-3 py-2 transition-all duration-300"
        >
          <span className="text-white text-[9px] sm:text-[10px] font-bold tracking-wider">
            <span className="sm:hidden">VIEW RESUME</span>
            <span className="hidden sm:inline">VIEW FULL RESUME</span>
          </span>
          <span className="text-amber-500 transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
