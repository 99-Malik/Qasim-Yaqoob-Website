"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import GetInTouchButton from "@/components/header/GetInTouchButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutMain = ({
  title = "About Us",
  desc = "We are your authorized repair specialists for Bosch, Siemens, Samsung, and LG appliances. Our certified technicians provide reliable, efficient repairs for all your home appliances, ensuring minimal disruption to your daily life with quick turnaround times and quality service.",
}) => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  const primaryTextColor =
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
    <section className="relative flex min-h-[33rem] w-full flex-col items-center justify-center gap-3 px-5 pt-32 text-center text-white md:gap-5">
      <h1 className={`text-3xl font-medium ${primaryTextColor} md:text-6xl`}>
        {title}
      </h1>
      <span className="max-w-5xl md:text-2xl md:leading-normal">{desc}</span>
      <div className="flex items-center justify-center gap-2">
        <Link href="tel:+1234567890">
          <GetInTouchButton title="Call Us" />
        </Link>
        <Link
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton title="Whatsapp" />
        </Link>
      </div>
      <Image
        src="/static/main-banner.jpg"
        quality={100}
        loading="lazy"
        width={2000}
        height={1000}
        alt="main bg"
        className="absolute top-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-black/80"></div>
    </section>
  );
};

export default AboutMain;
