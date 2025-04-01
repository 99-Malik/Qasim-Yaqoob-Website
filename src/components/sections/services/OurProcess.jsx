import Image from "next/image";
import React from "react";
import CustomDesignCard from "./CustomDesignCard";
import { usePathname } from "next/navigation";

const OurProcess = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  const primaryColor =
    company === "bosch"
      ? "text-boschPrimary"
      : company === "siemens"
      ? "text-siemensPrimary"
      : company === "samsung"
      ? "text-samsungPrimary"
      : company === "lg"
      ? "text-lgPrimary"
      : "text-primary";

  return (
    <div className="flex w-full flex-col items-center justify-center py-20 px-5 md:px-10">
      <div className="flex w-full max-w-7xl flex-col gap-10 items-center justify-center">
        <div className="grid md:grid-cols-[7fr_4.5fr] gap-10">
          <div className="flex w-full flex-col gap-5">
            <span className={`text-4xl font-medium ${primaryColor}`}>
              Our Process
            </span>
            <span className="text-xl">
              Web development is a multifaceted process that involves designing,
              coding, and building websites or web applications. It encompasses
              front-end development, where user interfaces are crafted to
              provide engaging experiences, and back-end development, which
              entails creating the underlying functionality and databases.
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <CustomDesignCard />
          <CustomDesignCard />
          <CustomDesignCard />
          <CustomDesignCard />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
