import { CardContent, Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { SiExpress, SiPostgresql, SiSequelize } from "react-icons/si";

export function PortofolioComponent() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-10">
        <div className="container mx-auto grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project</h2>
          </div>
          <div className="w-72 md:w-3/4 lg:w-1/2 mx-auto">
            <div className="flex flex-col min-h-[200px] mx-auto">
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="md:w-1/2 lg:w-1/3">
                    <Card imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" projectName="Attendance" centerContent>
                      <CardContent>
                        <CardHeader>
                          <CardTitle>API Attendance</CardTitle>
                        </CardHeader>
                        <CardDescription>RESTful API is designed to streamline the attendance tracking process with a variety of features tailored to meet your organization needs.</CardDescription>
                        <CardFooter className="flex justify-center items-center gap-4 mt-5">
                          <SiExpress />
                          <SiSequelize />
                          <SiPostgresql />
                        </CardFooter>
                      </CardContent>
                    </Card>
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
