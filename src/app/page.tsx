import { getAllStudentPortalItems } from "@/lib/api";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

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
  try {
    portalItems = await getAllStudentPortalItems();
    console.log("Portal Items: " + portalItems);
  } catch (error) {
    console.error("Error fetching portal items:", error);
  }

  return (
    <>
      <h1>Student Portal</h1>
      <section aria-label="Applications" className="container py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portalItems.map((item) => (
            <Card key={item.infoSlug}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <CardHeader className="max-w-full h-48 ">
                    <Image
                      src={item.logo.url}
                      width={400}
                      height={400}
                      className="mx-auto object-cover"
                      alt={`${item.softwareTitle} logo`}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{item.softwareTitle}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
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
