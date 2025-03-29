import ProjectCategories from "./ProjectCategories";
import Image from "next/image";

const OtherCategories = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-6 px-5 pb-24 md:pb-52">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <h1 className="text-4xl font-medium">Other Services</h1>
        <ProjectCategories
          scrollToTop
          hideSelected
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Image
        src="/bg/main-arrow-bg.png"
        quality={100}
        loading="lazy"
        width={180}
        height={180}
        alt="arrow"
        className="absolute -bottom-5 left-0 -z-10 size-24 md:bottom-0 md:size-44"
      />
    </div>
  );
};

export default OtherCategories;
