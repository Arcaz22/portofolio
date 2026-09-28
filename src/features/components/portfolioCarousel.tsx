import { lazy, Suspense, useState } from 'react';
import { portfolios } from '@/features/data/portfolios';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';

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
      <div className="surface-card flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:rounded-[28px] sm:p-7 lg:p-8">
        <div>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Independent builds · {current.year}</p>
              <p className="mb-4 text-[11px] text-white/42 sm:text-xs">Personal projects, designed and built independently</p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-4xl md:text-5xl">{current.title}</h3>
            </div>
            <div className="icon-box hidden sm:grid"><Layers3 size={18} strokeWidth={1.6} /></div>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {current.category.slice(0, 4).map((cat) => (
              <span key={cat} className="tag-chip">
                {cat}
              </span>
            ))}
          </div>
          {current.impactSummary && (
            <p className="mb-3 max-w-2xl text-sm leading-relaxed text-white/58 sm:text-base">
              {current.impactSummary}
            </p>
          )}
          {current.link && (
            <p className="mb-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:mb-4 sm:text-base">
              Explore the build via {" "}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#eeb55c] underline decoration-[#eeb55c]/30 underline-offset-4 transition-colors hover:text-white"
              >
                {(() => {
                  if (current.link.includes('t.me')) return 'Telegram Bot';
                  if (current.link.includes('github.com')) return 'GitHub Repo';
                  if (current.link.includes('vercel.app')) return 'Live Site';
                  return 'Project Link';
                })()}
              </a> <ArrowUpRight className="inline" size={14} />
            </p>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {portfolios.map((_, idx) => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#eeb55c]' : 'w-2 bg-white/15'}`} />
              ))}
            </div>
            <span className="font-mono text-[10px] text-white/38">{String(currentIndex + 1).padStart(2, '0')} / {String(portfolios.length).padStart(2, '0')}</span>
          </div>

          {isMobile ? (
            <div className="space-y-2">
              <button onClick={handleCaseStudy} className="primary-button group/btn w-full">
                Read case study
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="flex gap-2">
                <button onClick={handlePrev} className="secondary-button group/prev flex-1">
                  <ArrowLeft size={15} /> PREV
                </button>
                <button onClick={handleNext} className="secondary-button group/next flex-1">
                  NEXT <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button onClick={handleCaseStudy} className="primary-button group/btn flex-1">
                Read case study
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <button onClick={handlePrev} className="secondary-button px-3 group/nav">
                <ArrowLeft size={17} />
              </button>
              <button onClick={handleNext} className="secondary-button px-3 group/nav">
                <ArrowRight size={17} />
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
