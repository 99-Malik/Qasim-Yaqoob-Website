import Image from "next/image";

const Testemonial = ({name, comment}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-40">
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-14">
        <Image
          src="/bg/main-arrow-bg.png"
          quality={100}
          loading="lazy"
          width={150}
          height={150}
          alt="arrow"
          className="absolute -bottom-5 left-0 -z-10 hidden md:bottom-0 md:flex md:size-40"
        />
        <div className="flex flex-col gap-5 text-center">
          <span className="text-center text-2xl font-medium text-secondary">
            Testimonial
          </span>
          <h1 className="max-w-xl text-center text-5xl font-medium leading-snug">
            What Our Client Said About Us?
          </h1>
        </div>
        <div className="z-10 flex w-full max-w-6xl text-center flex-col items-center gap-5 rounded-lg bg-white md:px-20 px-10 py-12 md:py-28 shadow-[0px_0px_6px_0px_#00000040]">
          <div className="flex flex-col items-center">
            <Image
              src="/person.png"
              quality={100}
              loading="lazy"
              alt="person"
              width={64}
              height={64}
              className="mb-5 rounded-full bg-gray-100"
            />
            <span className="text-2xl font-semibold text-primary">
              {name}
            </span>
            <span className="text-xl text-[#475467]">
              Head of Design, Layers
            </span>
          </div>
          <span className="text-center text-2xl font-medium leading-normal text-[#101828]">
            “{comment}”
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
