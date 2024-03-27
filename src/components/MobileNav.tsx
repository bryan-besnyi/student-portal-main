"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function MobileNav({ navigationItems }) {
  return (
    <>
      {navigationItems.map((item: any) => (
        <div key={item.title} className="mt-2">
          {item.isLocal ? (
            // For internal links, use Next.js Link for client-side navigation
            <Link
              className={`${buttonVariants({
                variant: "outline",
                size: "lg",
              })} w-full text-3xl text-center`}
              href={item.href}
            >
              {item.title} <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            // For external links, use a standard <a> tag
            <a
              className={`${buttonVariants({
                variant: "outline",
                size: "lg",
              })} w-full text-center`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title} <ChevronRight className="h-4 w-4" />
            </a>
          )}
        </div>
      ))}
    </>
  );
}
