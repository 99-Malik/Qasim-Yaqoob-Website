"use client";

import { cn } from "@/lib/utils";

const ProjectCategories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  hideSelected = false,
  scrollToTop = false,
}) => {
  const handleCategoryClick = (category) => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSelectedCategory(category);
  };
  return (
    <div className="no-scrollbar flex w-full max-w-full items-center gap-4 overflow-auto">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            "flex min-w-fit items-center justify-center rounded-lg border-[1.5px] px-5 py-2.5 md:text-lg",
            selectedCategory === category
              ? hideSelected
                ? "hidden"
                : "border-primary bg-primary text-white"
              : "border-black/10 hover:border-primary hover:bg-primary/10",
            "transition-all duration-150 ease-in",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectCategories;
