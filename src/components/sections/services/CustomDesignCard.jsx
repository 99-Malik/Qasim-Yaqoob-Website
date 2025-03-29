import Image from "next/image";

const CustomDesignCard = () => {
  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-[20px] px-10 py-7 shadow-[0px_0px_4px_0px_#00000040] sm:flex-row md:flex-col lg:flex-row">
      <div className="grid size-20 max-h-20 min-w-20 place-items-center rounded-lg bg-[#F5FAFF] shadow-[0px_1px_2px_0px_#1018280D]">
        <Image
          src="/services-icons/1.png"
          width={42}
          height={42}
          alt="icon"
          loading="lazy"
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Custom designs</h1>
        <span className="text-sm text-[#475467]">
          Custom website design creates unique online experiences through
          tailored aesthetics, layout, and typography, enhancing user engagement
          and brand identity.
        </span>
      </div>
    </div>
  );
};

export default CustomDesignCard;
