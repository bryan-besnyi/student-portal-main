"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
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
import { Button } from "@/components/ui/button";

export default function NavigationMenuDemo() {
  return (
    <nav className="bg-indigo-900 text-white p-5 flex justify-between w-full">
      <Link href="/" legacyBehavior passHref>
        <Image src="/logo.svg" alt="Logo" width={250} height={250} />
      </Link>
      <Drawer>
        <DrawerTrigger className="md:hidden">Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <Link href="/forms">Forms</Link>
            <a href="https://websmart.smccd.edu">WebSMART</a>\
            <a href="https://webschedule.smccd.edu">WebSchedule</a>
            <a href="https://smccd.edu">SMCCD Website</a>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <NavigationMenu>
        <NavigationMenuList className="gap-5">
          <NavigationMenuItem>
            <Link href="/forms" legacyBehavior passHref>
              <NavigationMenuLink>Forms</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="https://websmart.smccd.edu">WebSMART</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
