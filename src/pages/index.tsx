import { CreativeDevCard } from '@/features/components/creativeDevCard';
import { ExperienceCard } from '@/features/components/experienceCard';
import { FooterSection } from '@/features/components/footerSection';
import { HomelabCard } from '@/features/components/homelabCard';
import { PortfolioCarousel } from '@/features/components/portfolioCarousel';
import { StatusCard } from '@/features/components/statusCard';
import { useHomelabStatus } from '@/hooks/useHombelabstatus';
import { useIsMobile } from '@/hooks/useMobile';

export default function Home() {
  const isMobile = useIsMobile();
  const { data: homelab } = useHomelabStatus();
  const homelabInspectUrl = 'https://rampung.space/monitoring';

  return (
    <main className="portfolio-shell min-h-screen overflow-x-hidden text-foreground">
      <div className="portfolio-grid mx-auto grid min-h-screen w-full max-w-360 grid-cols-1 gap-3 p-3 sm:gap-5 sm:p-6 lg:grid-cols-12 lg:grid-rows-[minmax(360px,auto)_minmax(320px,auto)_auto] lg:gap-5 lg:p-8 xl:p-10">
        <div className="min-h-105 sm:min-h-130 md:min-h-125 lg:col-span-7 lg:min-h-0">
          <CreativeDevCard />
        </div>

        <div className="min-h-90 sm:min-h-105 lg:col-span-5 lg:min-h-0">
          <ExperienceCard />
        </div>

        <div className="grid min-h-65 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-2">
          <StatusCard />
          <HomelabCard
            status={homelab?.status}
            latency={homelab?.latency}
            href={homelabInspectUrl}
          />
        </div>

        <div className="min-h-115 sm:min-h-105 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:min-h-0">
          <PortfolioCarousel isMobile={isMobile} />
        </div>

        <div className="lg:col-span-12 lg:row-start-3">
          <FooterSection isMobile={isMobile} />
        </div>
      </div>
    </main>
  );
}
