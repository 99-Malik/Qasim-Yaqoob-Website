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
import { usePathname } from "next/navigation";

const TestimonialsCarousel = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  let primaryBgColor = "bg-primary";
  let primaryTextColor = "text-primary";

  if (company === "lg") {
    primaryBgColor = "bg-[#A50034]";
    primaryTextColor = "text-[#A50034]";
  } else if (company === "samsung") {
    primaryBgColor = "bg-[#1428a0]";
    primaryTextColor = "text-[#1428a0]";
  } else if (company === "bosch") {
    primaryBgColor = "bg-[#ed1c24]";
    primaryTextColor = "text-[#ed1c24]";
  } else if (company === "siemens") {
    primaryBgColor = "bg-[#009999]";
    primaryTextColor = "text-[#009999]";
  }

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonialsList = [
    {
      image: "/person.png",
      name: "Sarah Mitchell",
      occupation: "Homeowner",
      comment:
        "Excellent same-day service for my Samsung washing machine. The technician was professional, diagnosed the issue quickly, and had it fixed within an hour. Highly recommended!",
    },
    {
      image: "/person.png",
      name: "David Chen",
      occupation: "Restaurant Owner",
      comment:
        "Their team saved our business when our commercial refrigerator broke down. Fast response, expert repair of our Bosch fridge, and great follow-up service. Couldn't ask for better!",
    },
    {
      image: "/person.png",
      name: "Emily Rodriguez",
      occupation: "Home Chef",
      comment:
        "I was impressed by their knowledge of Siemens appliances. Fixed my dishwasher and oven on the same visit. Professional, courteous, and very reasonable prices.",
    },
    {
      image: "/person.png",
      name: "James Wilson",
      occupation: "Property Manager",
      comment:
        "We use them for all our rental properties' appliance repairs. Their technicians are certified for all major brands and provide reliable, quality service every time.",
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
      <div className="grid w-full max-w-7xl gap-8 lg:grid-cols-[482px_1fr]">
        <div className="flex w-full flex-col justify-center gap-3">
          <span className={`text-xl ${primaryTextColor} md:font-medium`}>
            Customer Reviews
          </span>
          <span className="text-[28px] font-medium md:text-4xl md:leading-snug">
            What Our Customers Say About Our Service?
          </span>
          <span className="text-[#475467]">
            We take pride in delivering exceptional appliance repair services
            that our customers can rely on. Our certified technicians are
            trained to work with leading brands like Bosch, Siemens, Samsung,
            and LG, ensuring your appliances are in expert hands.
          </span>
          <div className="flex items-center gap-1 pt-3">
            <button
              className={`grid size-10 cursor-pointer place-items-center rounded-full border ${primaryBgColor}`}
              onClick={() => api.scrollPrev()}
            >
              <ArrowUpLeft />
            </button>
            <button
              className={`grid size-10 cursor-pointer place-items-center rounded-full border ${primaryBgColor}`}
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
                  current === index + 1 && primaryBgColor,
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
