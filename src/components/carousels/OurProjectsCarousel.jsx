"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projectsList } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurProjectsCarousel = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);
  return (
    <div className="flex w-full flex-col gap-5 pb-20 pl-2.5 sm:pl-5 lg:pl-10 xl:pl-[4vw] 2xl:pl-[10vw]">
      <div className="hidden md:flex gap-5 self-end sm:pr-5 lg:pr-10 xl:pr-[4vw]">
        <button
          onClick={() => api.scrollPrev()}
          className="grid size-16 place-items-center rounded-full shadow-[0px_0px_5.82px_0px_#00000040]"
        >
          <ChevronLeft className="size-8 text-[#292D32]" strokeWidth={1} />
        </button>
        <button
          onClick={() => api.scrollNext()}
          className="grid size-16 place-items-center rounded-full shadow-[0px_0px_5.82px_0px_#00000040]"
        >
          <ChevronRight className="size-8 text-[#292D32]" strokeWidth={1} />
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className=""
      >
        <CarouselContent>
          {projectsList.map((project, index) => (
            <CarouselItem
              className={cn(
                "flex min-h-[400px] flex-col p-2.5 pl-[18px] sm:basis-3/4 lg:basis-[45%]",
              )}
              key={index}
            >
              <div className="gap flex h-full w-full flex-col rounded-2xl p-4 pb-6 shadow-[0px_0px_4px_0px_#00000040]">
                <Image
                  src={project.image}
                  width={605}
                  height={339}
                  alt="image"
                  loading="lazy"
                  quality={100}
                  className="aspect-video w-full rounded-xl"
                />
                <span className="pt-6 text-4xl font-medium">
                  {project.title}
                </span>
                <span className="pt-2 text-xl text-black/70">
                  {project.desc}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurProjectsCarousel;
