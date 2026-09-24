import profileImg from '@/assets/profile.webp';

export function CreativeDevCard() {
  return (
    <div className="group relative w-full h-full min-h-55 sm:min-h-65 lg:min-h-0 rounded-2xl overflow-hidden bg-slate-900">
      <img
        src={profileImg}
        alt="Portrait of Chandra Arcychan Azfar"
        width={2250}
        height={2250}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
    </div>
  );
}
