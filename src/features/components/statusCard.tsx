import { profile } from '@/features/data/profile';

export function StatusCard() {
  return (
    <div className="h-full rounded-xl bg-slate-950/50 border border-slate-800 p-2 sm:p-3 flex flex-col justify-between">
      <div>
        <p className="text-[8px] sm:text-[10px] font-semibold text-slate-400 tracking-widest mb-1 sm:mb-2">
          STATUS
        </p>

        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
          <h3 className="text-[10px] sm:text-xs font-semibold text-white truncate">
            {profile.status}
          </h3>
        </div>
      </div>

      <div className="pt-1 sm:pt-2 border-t border-slate-800">
        <p className="text-[8px] sm:text-[10px] text-slate-400 mb-0.5 sm:mb-1">LOCATION</p>
        <p className="text-[10px] sm:text-xs font-medium text-white truncate">
          {profile.statusLocation}
        </p>
      </div>
    </div>
  );
}
