import PortfolioMain from "@/components/sections/portfolio/PortfolioMain";
import ProjectsSection from "@/components/sections/portfolio/projects/ProjectsSection";

const PorfolioPage = () => {
  return (
    <div className="flex w-full flex-col">
      <PortfolioMain />
      <ProjectsSection />
    </div>
  );
};

export default PorfolioPage;
