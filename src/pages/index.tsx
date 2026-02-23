import { CreativeDevCard } from '@/features/components/creativeDevCard';
import { ExperienceCard } from '@/features/components/experienceCard';
import { FooterSection } from '@/features/components/footerSection';
import { IdentityVisual } from '@/features/components/identityVisual';
import { PortfolioCarousel } from '@/features/components/portfolioCarousel';
import { ResumeCard } from '@/features/components/resumeCard';
import { StatusCard } from '@/features/components/statusCard';
import { useIsMobile } from '@/hooks/useMobile';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="w-full bg-slate-950 text-foreground overflow-x-hidden min-h-screen lg:h-screen lg:overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4 lg:h-full">
        <div className="flex flex-col lg:flex-row gap-4 lg:flex-1 min-h-0">
          <div className="flex-2 min-h-0">
            <CreativeDevCard />
          </div>

          <div className="flex-1 min-h-0">
            <ExperienceCard />
          </div>

          <div className="flex flex-col flex-1 gap-4 min-h-0">
            <div className="min-h-0">
              <StatusCard />
            </div>
            <div className="min-h-0">
              <ResumeCard />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:flex-1 min-h-0">
          <div className="flex-1 min-h-0">
            <PortfolioCarousel />
          </div>

          <div className="lg:w-48 lg:h-full min-h-0">
            <IdentityVisual isMobile={isMobile} />
          </div>
        </div>

        <div className="mt-2 lg:flex-none">
          <FooterSection isMobile={isMobile} />
        </div>
      </div>
    </main>
  );
}
