interface IdentityVisualProps {
  isMobile?: boolean;
}

export function IdentityVisual({ isMobile = false }: IdentityVisualProps) {
  return (
    <div className="w-full h-full rounded-2xl bg-slate-950/50 backdrop-blur-md border border-slate-800 flex items-center justify-center overflow-hidden group relative">

      <div className="absolute w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] group-hover:bg-amber-500/20 transition-all duration-1000" />

      <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">

        <svg
          width={isMobile ? "120" : "180"}
          height={isMobile ? "80" : "120"}
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 55 C35 30, 85 30, 85 55 L85 65 L35 65 Z"
            fill="#1e293b"
            className="fill-slate-800 transition-colors duration-500 group-hover:fill-slate-700"
          />

          <path d="M42 38 L35 22 L52 35" fill="#1e293b" className="fill-slate-800 group-hover:fill-slate-700" />
          <path d="M78 38 L85 22 L68 35" fill="#1e293b" className="fill-slate-800 group-hover:fill-slate-700" />

          <g className="stroke-amber-500/60" strokeWidth="1.5" strokeLinecap="round">
            <line x1="48" y1="48" x2="54" y2="48" />
            <line x1="66" y1="48" x2="72" y2="48" />
          </g>

          <rect x="30" y="62" width="60" height="6" rx="3" fill="#334155" fillOpacity="0.5" />
          <rect x="35" y="64" width="50" height="1.5" rx="1" fill="#475569" />

          <g>
            <circle cx="45" cy="60" r="4" fill="#475569" className="animate-[bounce_0.6s_infinite] fill-slate-500" />
            <circle cx="75" cy="60" r="4" fill="#475569" className="animate-[bounce_0.8s_infinite_0.1s] fill-slate-600" />
          </g>

          <path
            d="M45 42 Q60 38 75 42"
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="4"
            fill="none"
            className="group-hover:stroke-amber-500/10 transition-colors"
          />
        </svg>

      </div>
    </div>
  );
}
