import ProjectsDescriptionSection from "@/components/sections/portfolio/projects/ProjectsDescriptionSection";

const ProjectPage = async ({ params }) => {
  const projectId = (await params).id;
  return (
    <ProjectsDescriptionSection id={projectId} />
  );
};

export default ProjectPage;
