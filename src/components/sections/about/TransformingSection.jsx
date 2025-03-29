import Image from "next/image";

const TransformingSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-32">
      <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <span className="text-secondary">
            Custom Solutions for your needs
          </span>
          <h1 className="text-3xl font-medium leading-snug">
            Transforming Digital Experiences with Expert Solutions
          </h1>
          <span className="py-3 text-lg text-custom-black/70">
            We offer a comprehensive suite of digital services tailored to meet
            your every need. Our web development team crafts stunning,
            responsive websites that leave a lasting impression. We excel in app
            development, creating intuitive mobile solutions that drive
            engagement.
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="py-3 text-lg text-custom-black/70">
            Elevate your brand with our social media branding services, ensuring
            a strong online presence. With a passion for innovation, we deliver
            solutions that exceed expectations, making us your trusted partner
            in the digital realm.
          </span>
          <div className="relative flex h-full w-full items-center justify-center py-14">
            <Image
              src="/bg/transforming-bg.png"
              width={350}
              height={250}
              alt="bg"
              loading="lazy"
              className="absolute md:hidden -z-10"
            />
            <Image
              src="/bg/transforming-bg-2.png"
              width={723}
              height={465}
              alt="bg"
              loading="lazy"
              className="absolute md:flex hidden -z-10"
            />
            <Image
              src="/4-words.svg"
              width={575}
              height={237}
              alt="4 words"
              loading="lazy"
            />
            {/* <div className="flex flex-col gap-y-7">
              <div className="flex items-center gap-0.5">
                <span className="-rotate-12 text-nowrap rounded-full bg-primary px-5 py-2 text-white">
                  Trusted Partner
                </span>
                <span className="rotate-6 text-nowrap rounded-full bg-primary px-5 py-2 text-white">
                  Expert Solutions
                </span>
              </div>
              <div className="flex items-center gap-0.5">
                <span className="rotate-6 text-nowrap rounded-full bg-primary px-5 py-2 text-white">
                  Custom Solutions
                </span>
                <span className="-rotate-6 text-nowrap rounded-full bg-primary px-5 py-2 text-white">
                  Best Solutions
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformingSection;
