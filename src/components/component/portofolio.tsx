import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";

export function PortofolioComponent() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project</h2>
          </div>
          <div className="grid w-full">
            <div className="flex flex-col min-h-[200px]">
              <Carousel
                className="w-full max-w-xs mx-auto h-[320px]"
                opts={{
                  align: "start",
                }}
                orientation="horizontal"
              >
                <CarouselContent className="h-[300px]">
                  <CarouselItem>
                    <div className="p-1">
                      <Card imageUrl="/chandra.jpg" projectName="Project 1" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card imageUrl="/chandra.jpg" projectName="Project 2" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card imageUrl="/chandra.jpg" projectName="Project 3" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
