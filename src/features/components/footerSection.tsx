import { profile } from '@/features/data/profile';
import type { SocialPlatform } from '@/features/portofolio';

interface FooterSectionProps {
  isMobile?: boolean;
}

export function FooterSection({ isMobile = false }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  const socialLinks = (["linkedin", "github", "email", "medium"] as const)
    .map((platform) => {
      const href = profile.social[platform];
      if (!href) return null;

      return {
        href,
        aria: socialMeta[platform].label,
        path: socialMeta[platform].path,
      };
    })
    .filter((item): item is { href: string; aria: string; path: string } => item !== null);

  return (
    <footer className="rounded-2xl bg-slate-950/50 border border-slate-800 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">

        {/* Left side */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-script">
            {profile.name}
          </h2>
          <p className="text-xs sm:text-sm text-amber-500 font-semibold tracking-widest mt-1">
            {profile.bio}
          </p>
          <p className="text-[10px] sm:text-xs text-slate-400 mt-2">
            © {currentYear} — All rights reserved
          </p>
        </div>

        <div className="flex justify-center sm:justify-end gap-2 sm:gap-4">
          {socialLinks.map((item) => (
            <SocialLink
              key={item.aria}
              href={item.href}
              aria={item.aria}
              path={item.path}
            />
          ))}
        </div>
      </div>

      {isMobile && (
        <button className="w-full mt-4 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-sm">
          LET'S TALK
        </button>
      )}
    </footer>
  );
}

const socialMeta: Record<SocialPlatform, { label: string; path: string }> = {
  linkedin: {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  github: {
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  email: {
    label: "Email",
    path: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
  },
  medium: {
    label: "Medium",
    path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
  },
};

function SocialLink({ href, aria, path }: { href: string; aria: string; path: string }) {
  return (
    <a
      href={href}
      {...(!href.startsWith("mailto:") && { target: "_blank", rel: "noopener noreferrer" })}
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/50 transition-all"
      aria-label={aria}
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}
