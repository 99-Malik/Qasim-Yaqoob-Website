"use client";

import { categories } from "@/lib/data";
import { useState } from "react";
import ServiceSelector from "./ServiceSelector";
import { servicesData } from "@/lib/services";
import Image from "next/image";

const WhatWeProvide = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="flex w-full flex-col items-center justify-center px-5">
      <div className="grid w-full max-w-screen lg:max-w-7xl lg:grid-cols-[3.5fr_8.5fr] gap-10">
        <ServiceSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-medium">{selectedCategory}</h1>
          <span className="text-xl max-w-4xl leading-snug">
            {servicesData[selectedCategory].desc}
          </span>
          <Image
            src={servicesData[selectedCategory].image}
            width={890}
            height={600}
            alt="image"
            loading="lazy"
            quality={100}
          />
          <h1 className="text-5xl font-medium">Technologies</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {servicesData[selectedCategory].technologyIcons.map(
              (icon, index) => (
                <div
                  key={index}
                  className="grid aspect-square w-full place-items-center rounded-2xl shadow-[0px_0px_4px_0px_#00000040]"
                >
                  <Image src={icon} width={86} height={86} alt="icon" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
