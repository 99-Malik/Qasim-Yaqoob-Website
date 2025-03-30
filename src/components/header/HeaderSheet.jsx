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
import { headerLinks } from "@/lib/data";
import NavLink from "./NavLink";
import GetInTouchButton from "./GetInTouchButton";
import NavSheetLink from "./NavSheetLink";

const HeaderSheet = () => {
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
                <span className="text-2xl font-bold">Repair Site</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
            <X strokeWidth={0.6} className="size-8" />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-40 h-[92%] justify-between py-10">
          <div className="flex flex-col gap-4">
            {headerLinks.map((link, index) => (
              <SheetClose asChild key={index}>
                <NavSheetLink title={link.title} href={link.href} />
              </SheetClose>
            ))}
          </div>
          <GetInTouchButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSheet;
