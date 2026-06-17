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
    <main className="w-full min-h-screen overflow-x-hidden bg-slate-950 text-foreground">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-4 p-4 sm:p-5 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:overflow-hidden">
        <div className="min-h-[280px] md:col-span-4 md:min-h-[360px] lg:col-span-5 lg:min-h-0">
          <CreativeDevCard />
        </div>

        <div className="min-h-[260px] md:col-span-2 md:min-h-[360px] lg:col-span-3 lg:min-h-0">
          <ExperienceCard />
        </div>

        <div className="grid min-h-[220px] grid-cols-2 gap-4 md:col-span-6 md:min-h-[180px] lg:col-span-4 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-2">
          <StatusCard />
          <ResumeCard />
        </div>

        <div className="min-h-[320px] md:col-span-4 md:min-h-[300px] lg:col-span-10 lg:min-h-0">
          <PortfolioCarousel />
        </div>

        <div className="min-h-[180px] md:col-span-2 md:min-h-[300px] lg:col-span-2 lg:min-h-0">
          <IdentityVisual isMobile={isMobile} />
        </div>

        <div className="md:col-span-6 lg:col-span-12">
          <FooterSection isMobile={isMobile} />
        </div>
      </div>
    </main>
  );
}
