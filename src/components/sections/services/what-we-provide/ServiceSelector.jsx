import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ServiceSelector = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="relative flex w-full flex-col gap-8">
      <h1 className="text-3xl font-medium text-secondary">What we Provide?</h1>
      <div className="flex w-full flex-wrap gap-3 py-1 lg:flex-col">
        {categories.map((category, index) => (
          <button
            key={index}
            className={cn(
              "flex items-center justify-between rounded-full px-6 py-3 shadow-[0px_0px_3.78px_0px_#00000040]",
              "border border-white transition-all duration-150 ease-linear",
              category === selectedCategory
                ? "bg-primary text-white"
                : "hover:border-primary hover:bg-primary/5",
            )}
            onClick={() => setSelectedCategory(category)}
          >
            <span className="text-nowrap lg:text-lg">
              {index + 1}. {category}
            </span>
            <ArrowUpRight />
          </button>
        ))}
      </div>
      <Image
        src="/bg/arrow-2.svg"
        width={380}
        height={380}
        alt="arrow"
        quality={100}
        loading="lazy"
        className="absolute bottom-0 left-[-4vw] hidden lg:block"
      />
    </div>
  );
};

export default ServiceSelector;
