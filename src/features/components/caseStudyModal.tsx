import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Portfolio } from '../data/portfolios';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: Portfolio;
}

export function CaseStudyModal({ isOpen, onClose, portfolio }: CaseStudyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="flex w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] max-h-[92dvh] flex-col overflow-hidden rounded-[28px] border-white/10 bg-[#111827] p-0 shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:w-[95vw] sm:max-w-5xl sm:max-h-[calc(100dvh-2rem)]"
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative flex h-full max-h-[92dvh] flex-col sm:max-h-[calc(100dvh-2rem)]">

          <div className="relative flex-none h-36 border-b border-white/10 bg-[#151b2b] sm:h-44">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(238,181,92,.12),transparent_32%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#eeb55c]/45" />
            <div className="absolute bottom-6 left-6 sm:left-10 right-16">
              <div className="flex flex-wrap gap-2 mb-2">
                {portfolio.category.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-[#eeb55c]/25 bg-[#eeb55c]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#eeb55c]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <DialogTitle className="text-2xl font-semibold leading-[.95] tracking-tighter text-white sm:text-4xl">
                {portfolio.title}
              </DialogTitle>
            </div>

            <DialogClose asChild>
              <button
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/10 p-2 text-white/45 transition-all hover:border-[#eeb55c]/60 hover:text-[#eeb55c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eeb55c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151b2b]"
                aria-label="Close modal"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </DialogClose>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hide">
            <div className="p-5 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(15rem,0.9fr)] md:gap-10">

                <div className="space-y-8">
                  <section>
                    <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#eeb55c]">
                      <span className="h-px w-4 bg-[#eeb55c]" /> Overview
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-white/72 sm:text-base">
                      {portfolio.caseStudy.overview}
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#eeb55c]">
                      <span className="h-px w-4 bg-[#eeb55c]" /> The Challenge
                    </h3>
                    <div className="rounded-2xl border border-white/10 bg-[#0d1220]/65 p-4 text-sm leading-relaxed text-white/62">
                      "{portfolio.caseStudy.challenge}"
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#eeb55c]">
                      <span className="h-px w-4 bg-[#eeb55c]" /> Solution
                    </h3>
                    <p className="text-sm leading-relaxed text-white/62">
                      {portfolio.caseStudy.solution}
                    </p>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/82">Results</h3>
                    <ul className="space-y-3">
                      {portfolio.caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#9fd7b6]/20 bg-[#9fd7b6]/10">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#9fd7b6]" />
                          </div>
                          <span className="text-sm font-medium leading-relaxed text-white/58">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/82">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[10px] text-white/48 transition-colors hover:border-[#eeb55c]/50 hover:text-[#eeb55c]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="border-t border-white/10 pt-6">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/35">Timeline</p>
                    <p className="text-sm font-semibold text-white">{portfolio.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
