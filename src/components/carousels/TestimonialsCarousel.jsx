"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TestimonialsCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonialsList = [
    {
      image: "/person.png",
      name: "Kelly Williams",
      occupation: "Head of Design, Layers",
      comment:
        "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    },
    {
      image: "/person.png",
      name: "Alex Johnson",
      occupation: "CEO, TechCorp",
      comment:
        "An absolutely wonderful experience! Their team is highly professional and efficient.",
    },
    {
      image: "/person.png",
      name: "Samantha Lee",
      occupation: "Marketing Manager, BrandX",
      comment:
        "Highly recommended! The service exceeded my expectations in every way.",
    },
  ];

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
    <div className="max-w-screen flex w-full flex-col items-center justify-center gap-2 overflow-hidden px-5 py-20">
      <Image
        src="/logo/logo-light.png"
        width={168}
        height={168}
        alt="logo"
        loading="lazy"
        className="-z-10 size-28 self-end md:size-40"
        quality={100}
      />
      <div className="grid w-full max-w-7xl gap-8 lg:grid-cols-[482px_1fr]">
        <div className="flex w-full flex-col justify-center gap-3">
          <span className="text-xl text-secondary md:font-medium">
            Testimonials
          </span>
          <span className="text-[28px] font-medium md:text-5xl md:leading-snug">
            What Our Clients Say About Us?
          </span>
          <span className="text-[#475467]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi,
          </span>
          <div className="flex items-center gap-1 pt-3">
            <button
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-black/10"
              onClick={() => api.scrollPrev()}
            >
              <ArrowUpLeft />
            </button>
            <button
              className="grid size-10 cursor-pointer place-items-center rounded-full border border-black/10"
              onClick={() => api.scrollNext()}
            >
              <ArrowUpRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="max-w-[92vw] sm:max-w-[95vw]"
          >
            <CarouselContent>
              {testimonialsList.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-[100%] flex-col p-2.5 pl-[23px] md:min-h-[400px] md:basis-[65%]"
                >
                  <div className="flex lg:aspect-square flex-col items-center gap-5 rounded-[10px] bg-white px-8 py-14 shadow-[0px_0px_4px_0px_#00000040] sm:w-full sm:px-10 sm:py-20">
                    <Image
                      src="/person.png"
                      width={84}
                      height={84}
                      alt="Person"
                      className="rounded-full"
                      loading="lazy"
                      quality={100}
                    />
                    <div className="flex flex-col items-center text-center">
                      <span className="text-xl font-semibold">
                        {testimonial.name}
                      </span>
                      <span className="text-lg text-[#475467]">
                        {testimonial.occupation}
                      </span>
                    </div>
                    <span className="text-center text-xl">
                      "{testimonial.comment}"
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex max-w-[500px] items-center justify-center gap-6">
            {testimonialsList.map((_, index) => (
              <button
                key={index}
                onClick={() => api.scrollTo(index)}
                className={cn(
                  "size-4 rounded-full bg-primary/20",
                  current === index + 1 && "bg-primary",
                )}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/bg/main-arrow-bg.png"
        quality={100}
        loading="lazy"
        width={250}
        height={250}
        alt="arrow"
        className="-z-10 hidden self-start md:flex"
      />
    </div>
  );
};

export default TestimonialsCarousel;
