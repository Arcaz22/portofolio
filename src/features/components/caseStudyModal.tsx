import {
  Dialog,
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-3xl w-[95vw] max-h-[90vh] p-0 bg-slate-950 border-slate-800 shadow-2xl overflow-hidden"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative h-full max-h-[90vh] flex flex-col">

          <div className="flex-none h-32 sm:h-48 bg-linear-to-br from-amber-500/20 via-slate-900 to-slate-950 relative border-b border-slate-800">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute bottom-6 left-6 sm:left-10 right-16">
              <div className="flex flex-wrap gap-2 mb-2">
                {portfolio.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 bg-amber-500 text-[10px] font-bold text-black rounded uppercase tracking-tighter"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <DialogTitle className="text-2xl sm:text-4xl font-black text-white leading-none">
                {portfolio.title.toUpperCase()}
              </DialogTitle>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500 transition-all z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-amber-500" /> Overview
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                      {portfolio.caseStudy.overview}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-amber-500" /> The Challenge
                    </h3>
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-300 text-sm leading-relaxed italic">
                      "{portfolio.caseStudy.challenge}"
                    </div>
                  </section>

                  <section>
                    <h3 className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-amber-500" /> Solution
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {portfolio.caseStudy.solution}
                    </p>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Results</h3>
                    <ul className="space-y-3">
                      {portfolio.caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          </div>
                          <span className="text-slate-400 text-xs font-medium leading-tight">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] font-mono text-slate-400 hover:border-amber-500/50 hover:text-amber-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Timeline</p>
                    <p className="text-sm font-bold text-white">{portfolio.year}</p>
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
