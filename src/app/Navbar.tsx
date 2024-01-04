"use client";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Navigation Item 1",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 2",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 3",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 4",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 5",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 6",
    href: "#",
    description: "Navigation Item Subtext",
  },
];

//------
export function Navbar () {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
 <>
<nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 relative">
        <Image
          src="/smccd-horizontal-blue.svg"
          alt="SMCCCD Logo"
          width={100}
          height={100}
          className="m-5 lg:w-60 "
        />
  <div className="mobile-menu z-30 block absolute top-0 right-0 lg:hidden ">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 text-slate-200  hover:text-white "
          >
            <RxHamburgerMenu className=" z-10 h-5 w-10 m-5  text-black" />
          </button>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="lg:flex md:space-x-8 hidden">
          <NavigationMenuItem>
        <NavigationMenuTrigger>
          Get started at SMCCCD
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Icons.logo className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    NavItem 1
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Some brief description of this item.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/docs" title="Item 2">
              Item 2 description
            </ListItem>
            <ListItem href="/docs/installation" title="Item 3">
              Item 3 description
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Item 4">
              Item 4 description
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Tutorials</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Support
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
                <Link href="" passHref>
                  <NavigationMenuLink className="block py-2 pl-3 pr-4 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-red-700">
                        <Button variant="default" className="ml-auto">
                        Need Help?
                      </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {showMenu && (
           <NavigationMenu>
           <NavigationMenuList>
          <div className="menu lg:hidden mt-10 pt-2" id="navbar">
            <ul className=" flex flex-row items-center ">
            <NavigationMenuItem>
        <NavigationMenuTrigger className="text-xs">
        Get started at SMCCCD
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Icons.logo className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    NavItem 1
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Some brief description of this item.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/docs" title="Item 2">
              Item 2 description
            </ListItem>
            <ListItem href="/docs/installation" title="Item 3">
              Item 3 description
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Item 4">
              Item 4 description
            </ListItem>
          </ul>
        </NavigationMenuContent> 
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-xs">Tutorials</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

              <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Support
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="" passHref>
                  <NavigationMenuLink className=" text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-red-700">
                        <Button variant="default" className="text-xs ">
                        Need Help?
                      </Button>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </ul>
        
          </div>
  </NavigationMenuList>
</NavigationMenu>
        )}

      </div>
      
    </nav>
  
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

