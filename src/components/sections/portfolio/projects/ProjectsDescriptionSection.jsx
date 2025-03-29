"use client";

import PortfolioProjectCarousel from "@/components/carousels/PortfolioProjectCarousel";
import { categories, projectsList } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Testemonial from "./Testemonial";
import OurProjectsCarousel from "@/components/carousels/OurProjectsCarousel";
import OtherCategories from "./OtherCategories";

const ProjectsDescriptionSection = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const project = projectsList.find((project) => project.id == id);
  console.log("Project:", project);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center">
        <Image
          src="/bg/project-bg.png"
          width={1239}
          height={530}
          alt="icons"
          className="absolute -z-10 object-contain"
          quality={100}
        />
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-3 py-20 text-center md:gap-5">
          <span className="font-semibold text-secondary md:text-2xl">
            {selectedCategory}
          </span>
          <span className="text-3xl font-medium md:text-6xl">
            {project?.title}
          </span>
          <span className="px-5 text-sm text-custom-black/60 md:text-2xl">
            {project.desc}
          </span>
        </div>
      </div>
      <PortfolioProjectCarousel />
      <ProjectDescription />
      <Testemonial
        name={project.review.username}
        comment={project.review.comment}
        designation={project.review.designation}
      />
      <div className="flex flex-col items-center justify-center gap-4 px-5 pb-10 md:pt-20">
        <span className="font-medium text-secondary md:text-2xl">Projects</span>
        <span className="text-3xl font-medium md:text-5xl">
          Related Projects
        </span>
      </div>
      <OurProjectsCarousel />
      <OtherCategories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default ProjectsDescriptionSection;
