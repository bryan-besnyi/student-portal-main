"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/smccdlogo.png"
              width={150}
              height={75}
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="text-white font-bold ml-2 hidden sm:inline">
              Student Portal
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                target={item.isLocal ? undefined : "_blank"}
                rel={item.isLocal ? undefined : "noopener noreferrer"}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
                target={item.isLocal ? undefined : "_blank"}
                rel={item.isLocal ? undefined : "noopener noreferrer"}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
