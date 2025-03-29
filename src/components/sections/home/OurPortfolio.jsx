import PortfolioCard from "@/components/cards/PortfolioCard";
import { ArrowUpRight, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurPortfolio = () => {
  const projectsList = [
    {
      image: "/portfolio/1.png",
      type: "Web Development",
      title: "Marvallex Gold",
      desc: "Lorem ipsum dolor sit amet consectetur. Lorem condimentum ornare a habitant sed scelerisque nulla mauris at. Porta urna at turpis aliquam enim faucibus eu. Pretium tristique lobortis ultrices sit platea. Et integer pellentesque dui at id aliquam.",
      link: "#",
    },
  ];
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-5 pb-32 pt-32 md:pb-60">
      <Image
        src="/logo/logo-light.png"
        width={168}
        height={168}
        alt="logo"
        loading="lazy"
        className="absolute right-5 top-0 -z-10 size-28 md:size-40 lg:top-32"
        quality={100}
      />
      <Image
        src="/bg/main-arrow-bg.png"
        quality={100}
        loading="lazy"
        width={450}
        height={450}
        alt="arrow"
        className="absolute -bottom-5 left-0 -z-10 hidden md:bottom-0 md:flex md:size-52"
      />
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8">
        <div className="flex w-full max-w-5xl flex-col gap-4 text-center">
          <span className="text-xl text-secondary md:text-2xl">
            Our Portfolio
          </span>
          <span className="text-[28px] font-semibold md:text-5xl md:leading-snug">
            Elevating Your Digital Presence: Your One-Stop Solution
          </span>
        </div>
        {projectsList.map((project, index) => (
          <PortfolioCard project={project} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurPortfolio;
