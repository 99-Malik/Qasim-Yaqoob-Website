import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";

const ServicesMain = () => {
  return (
    <section className="relative flex min-h-[20rem] w-full flex-col items-center justify-center gap-3 px-5 text-center md:min-h-[40rem] md:gap-5">
      <h1 className="text-3xl font-medium md:text-6xl">Our Services</h1>
      <span className="max-w-5xl text-custom-black/70 md:text-2xl md:leading-normal">
        We will bring the breathe of our experience and industry knowledge to
        help you succeed.
      </span>
      <div className="absolute -z-10 flex h-fit w-full px-10 md:inset-0 md:h-full">
        <Image
          src="/bg/about-bg.png"
          quality={100}
          loading="lazy"
          width={1500}
          height={1500}
          alt="MAIN BG"
          className="object-contain"
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
      <Image
        src="/bg/our-clients/arrow.png"
        width={174}
        height={179}
        alt="Arrow"
        loading="lazy"
        className="absolute right-20 top-5 size-10 md:size-44"
      />
    </section>
  );
};

export default ServicesMain;
