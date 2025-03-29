import { MapPin } from "lucide-react";
import Image from "next/image";

const LocationSection = () => {
  const offices = [
    {
      title: "Lahore Office",
      address: "Capital technology, Park Road, First floor, Room 101.",
    },
    {
      title: "Islamabad Office",
      address: "Capital technology, Park Road, First floor, Room 101.",
    },
    {
      title: "UK Office",
      address: "Capital technology, Park Road, First floor, Room 101.",
    },
  ];
  return (
    <div className="flex w-full flex-col pb-20 md:pb-[26rem]">
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-32 bg-primary/5 px-5 pb-12 md:pb-64 pt-16 md:pt-32">
        <div className="grid w-full max-w-7xl md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-1 md:gap-3">
            <span className="md:text-xl font-medium">Location</span>
            <span className="text-3xl md:text-5xl font-medium uppercase">Our Office</span>
            <span className="md:text-xl text-[#475467]">
              You can visit us at our offices at given addresses.
            </span>
          </div>
          <div className="flex flex-col gap-10">
            {offices.map((office, index) => (
              <div className="flex items-start gap-3">
                <div className="grid size-12 max-h-12 min-w-12 place-items-center rounded-lg bg-primary text-white">
                  <MapPin />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xl md:text-3xl font-medium">{office.title}</span>
                  <span className="text-sm md:text-base text-secondary">{office.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex w-full max-w-7xl flex-col items-center justify-center">
          <Image
            src="/map.png"
            width={1318}
            height={593}
            alt="map"
            loading="lazy"
            quality={100}
            className="absolute top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
