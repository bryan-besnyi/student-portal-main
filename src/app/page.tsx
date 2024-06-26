import {
  getAllFeaturedStudentPortalItems,
  getAllUnfeaturedStudentPortalItems,
} from "@/lib/api";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import HomeHero from "@/components/HomeHero";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Renders the Home page component.
 * Fetches featured and other student portal items and displays them in a grid layout.
 * Each item is rendered as a Card component with its logo, title, description, and links.
 * @returns The rendered Home page component.
 */
export default async function Home() {
  let portalItems = [];
  let otherPortalItems = [];
  try {
    portalItems = await getAllFeaturedStudentPortalItems();
  } catch (error) {
    console.error("Error fetching portal items:", error);
  }

  try {
    otherPortalItems = await getAllUnfeaturedStudentPortalItems();
  } catch (error) {
    console.error("Error fetching portal items:", error);
  }

  return (
    <>
      <HomeHero />
      <section aria-label="Applications" className="container py-16 mx-auto">
        <h2 className="text-3xl font-sans font-bold mb-5 text-gray-400">
          Featured Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portalItems &&
            portalItems.map((item) => (
              <Card key={item.title}>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-end p-5 -mb-10">
                    <Badge
                      className="bg-green-700 text-white"
                      variant="secondary"
                    >
                      Popular
                    </Badge>
                  </div>
                  <div>
                    <CardHeader className="max-w-full h-48 overflow-hidden">
                      <Image
                        src={item.logo.url}
                        width={350}
                        height={350}
                        className="mx-auto object-contain"
                        alt={`${item.softwareTitle} logo`}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{item.softwareTitle}</CardTitle>
                      <CardDescription className="mt-2">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                  <CardFooter className="mt-auto flex justify-end gap-3">
                    {item.infoSlug && (
                      <Link
                        href={item.infoSlug}
                        className={buttonVariants({ variant: "outline" })}
                      >
                        Get info
                      </Link>
                    )}
                    {item.loginUrl && (
                      <Link
                        href={item.loginUrl}
                        className={buttonVariants({ variant: "secondary" })}
                      >
                        Log in/Access
                      </Link>
                    )}
                  </CardFooter>
                </div>
              </Card>
            ))}
        </div>
        <h2 className="text-3xl font-sans font-bold mt-10 mb-5 text-gray-400">
          Other Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherPortalItems &&
            otherPortalItems.map((item) => (
              <Card key={item.title}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <CardHeader className="max-w-full h-48 overflow-hidden">
                      <Image
                        src={item.logo.url}
                        width={400}
                        height={400}
                        className="object-contain"
                        alt={`${item.softwareTitle} logo`}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{item.softwareTitle}</CardTitle>
                      <CardDescription className="mt-2">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                  <CardFooter className="mt-auto flex justify-end gap-3">
                    {item.infoSlug && (
                      <Link
                        href={item.infoSlug}
                        className={buttonVariants({ variant: "outline" })}
                      >
                        Get info
                      </Link>
                    )}
                    {item.loginUrl && (
                      <Link
                        href={item?.loginUrl}
                        className={buttonVariants({ variant: "secondary" })}
                      >
                        Log in/Access
                      </Link>
                    )}
                  </CardFooter>
                </div>
              </Card>
            ))}
        </div>
      </section>
    </>
  );
}
