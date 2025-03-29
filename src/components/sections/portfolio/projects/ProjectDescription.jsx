import Image from "next/image";
import React from "react";

const ProjectDescription = () => {
  return (
    <div className="flex w-full flex-col gap-20 py-20">
      <div className="grid w-full gap-14 px-5 lg:grid-cols-[4fr_6fr] lg:pl-[5vw] lg:pr-0">
        <div className="flex h-full flex-col justify-center gap-4 lg:gap-6">
          <span className="text-3xl lg:text-5xl font-medium">Heading 123</span>
          <span className="text-sm lg:text-xl text-black/70">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis{" "}
          </span>
        </div>
        <div className="aspect-square 2xl:aspect-video">
          <Image
            width={1500}
            height={1500}
            className="h-full w-full rounded-lg object-cover"
            src="/portfolio/1.png"
            alt="image"
            loading="lazy"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 lg:gap-6 px-[5vw] text-center">
        <span className="text-3xl lg:text-5xl font-medium">Heading 123</span>
        <span className="text-sm lg:text-xl max-w-7xl text-black/70">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis{" "}
        </span>
      </div>
      <div className="grid w-full gap-14 px-5 lg:grid-cols-[4fr_6fr] lg:pl-0 lg:pr-[5vw] lg:[direction:rtl]">
        <div className="flex h-full flex-col justify-center gap-4 lg:gap-6 lg:[direction:ltr]">
          <span className="text-3xl lg:text-5xl font-medium">Heading 123</span>
          <span className="text-sm lg:text-xl text-black/70">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis{" "}
          </span>
        </div>
        <div className="aspect-square 2xl:aspect-video">
          <Image
            width={1500}
            height={1500}
            className="h-full w-full rounded-lg object-cover"
            src="/portfolio/1.png"
            alt="image"
            loading="lazy"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
