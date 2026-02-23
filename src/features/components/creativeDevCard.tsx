import profileImg from '@/assets/profile.jpg';

export function CreativeDevCard() {
  return (
    <div className="relative w-full h-full min-h-55 sm:min-h-65 lg:min-h-0 rounded-xl overflow-hidden bg-linear-to-b from-amber-600/30 to-slate-900/20">
      <img
        src={profileImg}
        alt="Profile background"
        className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/60 to-black/80" />

      {/* Content - selalu di bottom
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-amber-500/20">
          <p className="text-[8px] sm:text-[10px] font-semibold text-amber-500 tracking-widest mb-0.5 sm:mb-1">
            {profile.based}
          </p>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
            {profile.title}
          </h2>
        </div>
      </div> */}
    </div>
  );
}
