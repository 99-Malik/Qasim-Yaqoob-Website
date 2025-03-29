import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import HeaderSheet from "./HeaderSheet";
import { headerLinks } from "@/lib/data";
import GetInTouchButton from "./GetInTouchButton";

const Header = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-[82rem] items-center justify-between gap-5 px-8 pb-2 pt-14">
        <Link href="/">
          <Image
            src="/logo/primary-logo.png"
            width={198}
            height={54}
            loading="eager"
            priority
            className="w-32 md:w-48"
            quality={100}
            alt="Logo"
          />
        </Link>
        <div className="hidden items-center gap-5 lg:gap-8 md:flex">
          {headerLinks.map((link, index) => (
            <NavLink title={link.title} href={link.href} key={index} />
          ))}
        </div>
        <GetInTouchButton className="hidden md:flex" />
        <div className="md:hidden">
          <HeaderSheet />
        </div>
      </div>
    </div>
  );
};

export default Header;
