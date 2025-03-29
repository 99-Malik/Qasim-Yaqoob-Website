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

const PortfolioProjectCarousel = () => {
  const [api, setApi] = useState();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex w-full flex-col gap-5 py-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="relative"
      >
        <div className="absolute z-10 hidden md:flex h-full w-full items-center justify-between gap-5 px-3 lg:px-16">
          <button
            onClick={() => api.scrollPrev()}
            className="grid size-12 place-items-center rounded-full bg-white shadow-[0px_0px_5.82px_0px_#00000040]"
          >
            <ChevronLeft className="size-8 text-[#292D32]" strokeWidth={1} />
          </button>
          <button
            onClick={() => api.scrollNext()}
            className="grid size-12 place-items-center rounded-full bg-white shadow-[0px_0px_5.82px_0px_#00000040]"
          >
            <ChevronRight className="size-8 text-[#292D32]" strokeWidth={1} />
          </button>
        </div>
        <CarouselContent>
          {projectsList.map((project, index) => (
            <CarouselItem
              className={cn(
                "flex md:min-h-[400px] basis-10/12 flex-col justify-center",
                index == current - 1 ? "p-0" : "p-2 md:p-6",
                "transition-all duration-200 ease-linear",
              )}
              key={index}
            >
              <Image
                src={project.image}
                width={1500}
                height={900}
                alt="image"
                loading="lazy"
                quality={100}
                className="aspect-video w-[90vw] rounded-lg ml-2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PortfolioProjectCarousel;
