import OurProjectsCarousel from "@/components/carousels/OurProjectsCarousel";

const OurProjects = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-32">
      <div className="flex w-full max-w-7xl flex-col gap-5">
        <h1 className="text-center text-5xl font-medium">Our Projects</h1>
      </div>
      <OurProjectsCarousel />
    </div>
  );
};

export default OurProjects;
