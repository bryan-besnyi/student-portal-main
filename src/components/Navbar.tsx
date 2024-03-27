import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { MenuIcon } from "lucide-react";

const navigationItems = [
  {
    title: "Student Forms",
    href: "/forms",
    isLocal: true,
  },
  {
    title: "WebSmart",
    href: "https://websmart.smccd.edu",
    isLocal: false,
  },
  {
    title: "Student Email",
    href: "https://smccd.onmicrosoft.com",
    isLocal: false,
  },
  {
    title: "WebSchedule",
    href: "https://webschedule.smccd.edu",
    isLocal: false,
  },
];

export default function Navbar() {
  return (
    <div className="bg-blue-950 p-1 md:p-3 shadow-lg w-full">
      <div className="py-1 px-2 md:px-0 md:container flex justify-between items-center">
        {/* Logo & Branding */}
        <div className="flex items-center space-x-2">
          <Image src="/smccdlogo.png" width={200} height={100} alt="Logo" />
          <span className="text-lg flex items-center text-white font-bold">
            <span className="text-3xl mr-3">|</span> Student Portal
          </span>
        </div>
        <div className="hidden lg:flex">
          <DesktopNav navigationItems={navigationItems} />
        </div>
        <Drawer direction="bottom">
          <DrawerTrigger className="md:hidden flex text-white">
            <MenuIcon className="mr-2 h-6 w-6" />
            Menu
          </DrawerTrigger>
          <DrawerContent>
            {/* Drawer Header */}
            <DrawerHeader>
              <DrawerTitle>Student Portal Navigation Menu</DrawerTitle>
            </DrawerHeader>
            {/* Drawer Body */}
            <MobileNav navigationItems={navigationItems} />
            {/* Drawer Footer */}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
