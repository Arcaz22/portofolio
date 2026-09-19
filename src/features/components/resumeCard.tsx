import { profile } from '@/features/data/profile';

export function ResumeCard() {
  return (
    <div className="h-full rounded-2xl bg-[#111827]/80 border border-slate-800/80 p-3 sm:p-4 flex flex-col">
      <p className="text-[8px] sm:text-[10px] font-semibold text-slate-400 tracking-widest mb-2 sm:mb-4">
        PROFILE
      </p>

      <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-4">
        Download CV
      </h3>

      <a
        href={profile.resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center hover:bg-amber-500/20 transition-colors group"
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </a>
    </div>
  );
}
