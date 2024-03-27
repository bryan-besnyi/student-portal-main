"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function DesktopNav({ navigationItems }) {
  console.log("NAV ITEMS: " + navigationItems);
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.isLocal ? (
                // For internal links, use Next.js Link for client-side navigation
                <Link href={item.href} passHref legacyBehavior>
                  <NavigationMenuLink asChild className="text-white">
                    <a>{item.title}</a>
                  </NavigationMenuLink>
                </Link>
              ) : (
                // For external links, use a standard <a> tag
                <NavigationMenuLink asChild className="text-white">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-3">
        <Link
          href="/support"
          className={buttonVariants({ variant: "outline" })}
        >
          Get Help
        </Link>
      </div>
    </>
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
