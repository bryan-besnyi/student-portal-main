import {
  getAllFeaturedStudentPortalItems,
  getAllStudentPortalItems,
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

export async function Home() {
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
          {portalItems.map((item) => (
            <Card key={item.infoSlug}>
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
                  <Link
                    href={item.infoSlug}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Get info
                  </Link>
                  <Link
                    href={item.loginUrl}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Log in/Access
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <h2 className="text-3xl font-sans font-bold mt-10 mb-5 text-gray-400">
          Other Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherPortalItems.map((item) => (
            <Card key={item.infoSlug}>
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
                  <Link
                    href={item.infoSlug}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Get info
                  </Link>
                  <Link
                    href={item.loginUrl}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Log in/Access
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
