"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { headerLinks, sendMessage } from "@/lib/data";
import NavLink from "./NavLink";
import GetInTouchButton from "./GetInTouchButton";
import NavSheetLink from "./NavSheetLink";
import { usePathname } from "next/navigation";

const HeaderSheet = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];
  const servicesList = [
    {
      title: "TV Repair",
      desc: "Expert repair services for Samsung and LG TVs, including screen repairs, power issues, smart TV troubleshooting, and circuit board repairs.",
      image: "/services/tv-repair.jpg",
      href: "/services/tv-repair",
    },
    {
      title: "Washing Machine Repair",
      desc: "Repair solutions for Bosch, Siemens, Samsung, and LG washing machines. From drum problems to electronic faults, we fix it all.",
      image: "/services/washing-machine-repair.webp",
      href: "/services/washing-machine-repair",
    },
    {
      title: "Dryer Repair",
      desc: "Professional dryer repair services for all major brands. We handle heating issues, motor repairs, belt replacements, and sensor problems.",
      image: "/services/dryer-repair.jpg",
      href: "/services/dryer-repair",
    },
    {
      title: "Dishwasher Repair",
      desc: "Specialized repairs for Bosch, Siemens, Samsung, and LG dishwashers. We fix water leaks, drainage issues, and cleaning system problems.",
      image: "/services/dishwasher-repair.jpg",
      href: "/services/dishwasher-repair",
    },
    {
      title: "Oven Repair",
      desc: "Complete oven repair services including temperature control, heating element replacement, door repairs, and electronic control fixes.",
      image: "/services/oven-repair.jpg",
      href: "/services/oven-repair",
    },
    {
      title: "Refrigerator Repair",
      desc: "Expert refrigerator repairs covering cooling systems, compressor issues, ice maker repairs, and temperature control problems.",
      image: "/services/fridge-repair.png",
      href: "/services/refrigerator-repair",
    },
    {
      title: "Stove/Cooker Repair",
      desc: "Professional repair services for electric and gas stoves. We handle burner repairs, ignition problems, and control panel issues.",
      image: "/services/stove-repair.avif",
      href: "/services/stove-repair",
    },

  ];
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="min-w-screen w-full px-8">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between py-6">
            <SheetClose asChild>
              <Link href="/">
                <span className="text-2xl font-bold">Repair Experts AE</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <X strokeWidth={0.6} className="size-8" />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-[92%] flex-col justify-between pb-20 pt-5">
          <div className="flex flex-col gap-4">
            {headerLinks.map((link, index) => (
              <NavSheetLink title={link.title} href={link.href} key={index} />
            ))}
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-black/10 bg-gray-100/20 px-3 py-5">
            {servicesList.map((service, index) => (
              <div className="flex" key={index}>
                <SheetClose asChild>
                  <Link
                    href={
                      pathname.includes("/company/")
                        ? "/company/" + company + service.href
                        : service.href
                    }
                    className="flex w-full items-center gap-4 rounded-lg hover:bg-gray-200"
                  >
                    {service.title}
                  </Link>
                </SheetClose>
              </div>
            ))}
          </div>
          <GetInTouchButton onClick={sendMessage} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheet;
