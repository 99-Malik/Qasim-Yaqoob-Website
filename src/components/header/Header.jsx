import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import { headerLinks } from "@/lib/data";
import GetInTouchButton from "./GetInTouchButton";

const Header = () => {
  const companies = [
    { name: "Bosch", href: "/company/bosch" },
    { name: "Siemens", href: "/company/siemens" },
    { name: "Samsung", href: "/company/samsung" },
    { name: "LG", href: "/company/lg" },
  ];
  return (
    <div className="absolute z-50 flex w-screen items-center justify-center">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center rounded-b-2xl border-b-2 border-primary/80 bg-white shadow">
        <div className="flex w-full items-center justify-between gap-5 px-8 py-5">
          <Link className="text-2xl font-bold" href="/">
            Repair site
          </Link>
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {headerLinks.map((link, index) => (
              <NavLink title={link.title} href={link.href} key={index} />
            ))}
          </div>
          <GetInTouchButton className="hidden md:flex" />
          <div className="md:hidden">
            <HeaderSheet />
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:justify-start gap-5 border-t border-black/10 px-5 py-4">
          {companies.map((company, index) => (
            <NavLink key={index} title={company.name} href={company.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
