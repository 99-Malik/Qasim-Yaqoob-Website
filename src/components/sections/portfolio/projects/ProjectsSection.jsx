"use client";

import { useState } from "react";
import ProjectCategories from "./ProjectCategories";
import PortfolioCard from "@/components/cards/PortfolioCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories, projectsList } from "@/lib/data";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const filteredProjects = projectsList.filter(
    (project) =>
      project.type === selectedCategory || selectedCategory === "All",
  );
  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;

  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-7xl flex-col gap-20 py-20">
        <ProjectCategories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex w-full flex-col gap-16">
          {paginatedProjects.length > 0 ? (
            paginatedProjects.map((project, index) => (
              <PortfolioCard
                project={project}
                index={startIndex + index}
                key={startIndex + index}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-gray-500">
              <h2 className="text-2xl font-semibold text-gray-700">
                No projects found
              </h2>
              <p className="mt-2 text-lg">
                Try selecting a different category!
              </p>
              <span className="mt-4 text-6xl">🚀</span>
            </div>
          )}
        </div>
        {/* Pagination Controls */}
        <div className="flex w-full items-center justify-between gap-4 border-t border-black/10 pt-5 md:px-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="rounded-lg border-[1.5px] border-black/10 px-2 py-2 text-[#344054] disabled:opacity-50 md:px-4"
          >
            <span className="hidden md:flex">Previous</span>
            <span className="md:hidden">
              <ChevronLeft />
            </span>
          </button>
          <span className="font-medium text-[#344054] md:text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="rounded-lg border-[1.5px] border-black/10 px-2 py-2 text-[#344054] disabled:opacity-50 md:px-4"
          >
            <span className="hidden md:flex">Next</span>
            <span className="md:hidden">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
