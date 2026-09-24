import { lazy, Suspense, useState } from 'react';
import { portfolios } from '@/features/data/portfolios';

const CaseStudyModal = lazy(() =>
  import('./caseStudyModal').then(({ CaseStudyModal: Modal }) => ({ default: Modal })),
);

interface PortfolioCarouselProps {
  isMobile: boolean;
}

export function PortfolioCarousel({ isMobile }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const current = portfolios[currentIndex];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? portfolios.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === portfolios.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleCaseStudy = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="h-full rounded-2xl bg-[#111827]/90 border border-slate-800/80 p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-y-auto no-scrollbar">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-400">Selected work · {current.year}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-none tracking-[-0.04em] text-white mb-3">{current.title}</h3>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {current.category.map((cat) => (
              <span key={cat} className="px-2 py-1 bg-slate-800/60 border border-slate-700 rounded text-[9px] sm:text-[10px] font-mono text-slate-300">
                {cat}
              </span>
            ))}
          </div>
          {current.link && (
            <p className="max-w-2xl text-sm sm:text-base text-slate-300 mb-3 sm:mb-4 leading-relaxed">
              To explore the live demo, click this link to access the {" "}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-colors"
              >
                {(() => {
                  if (current.link.includes('t.me')) return 'Telegram Bot';
                  if (current.link.includes('github.com')) return 'GitHub Repo';
                  if (current.link.includes('vercel.app')) return 'Live Site';
                  return 'Project Link';
                })()}
              </a>.
            </p>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {portfolios.map((_, idx) => (
                <div key={idx} className={`h-1 transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-700'}`} />
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-500">{currentIndex + 1} / {portfolios.length}</span>
          </div>

          {isMobile ? (
            <div className="space-y-2">
              <button onClick={handleCaseStudy} className="group/btn w-full px-4 py-3 bg-amber-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all">
                Read case study
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="flex gap-2">
                <button onClick={handlePrev} className="group/prev flex-1 py-3 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-500 rounded-lg transition-all text-sm flex items-center justify-center gap-1">
                  <span className="transition-transform group-hover/prev:-translate-x-1">←</span> PREV
                </button>
                <button onClick={handleNext} className="group/next flex-1 py-3 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-500 rounded-lg transition-all text-sm flex items-center justify-center gap-1">
                  NEXT <span className="transition-transform group-hover/next:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button onClick={handleCaseStudy} className="group/btn flex-1 px-4 py-3 bg-amber-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                Read case study
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <button onClick={handlePrev} className="group/nav p-3 border border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/5 text-slate-300 hover:text-amber-500 rounded-lg transition-all">
                <svg className="w-5 h-5 transition-transform group-hover/nav:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={handleNext} className="group/nav p-3 border border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/5 text-slate-300 hover:text-amber-500 rounded-lg transition-all">
                <svg className="w-5 h-5 transition-transform group-hover/nav:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <CaseStudyModal isOpen onClose={() => setIsModalOpen(false)} portfolio={current} />
        </Suspense>
      )}
    </>
  );
}
