import { buttonVariants } from "@/components/ui/button";
import { getStudentPortalItem } from "@/lib/api";
import Link from "next/link";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function PortalItemPage({ params }) {
  let portalItem = null;

  try {
    portalItem = await getStudentPortalItem(params.item);
    console.log(`Params: `, params);
    console.log(`Full Portal Item:`, portalItem);
  } catch (error) {
    console.error("Error fetching portal item:", error);
  }

  return (
    <div>
      {portalItem ? (
        <div className="container mx-auto prose prose-xl py-16">
          <h1>{portalItem.softwareTitle}</h1>
          {portalItem.logo && portalItem.logo.url ? (
            <img
              src={portalItem.logo.url}
              alt={`${portalItem.softwareTitle} logo`}
              className="w-1/2 mx-auto"
            />
          ) : null}
          <Link
            className={buttonVariants({ variant: "default" })}
            href={portalItem.loginUrl}
          >
            Access {portalItem.softwareTitle}
          </Link>
          <div className="prose-xl">
            {portalItem.infoPageContent && portalItem.infoPageContent.json ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(portalItem.infoPageContent.json),
                }}
              />
            ) : null}
          </div>
          {/* Tutorials Section */}
          {portalItem.relatedTutorialCollection.items.length > 0 && (
            <h2>Related Tutorials</h2>
          )}
          <div className="md:hidden">
            {portalItem.relatedTutorialCollection.items.map((tutorial) => (
              <div key={tutorial.sys.id}>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <Link href={`/tutorials/${tutorial.slug}`}>Read more</Link>
              </div>
            ))}
          </div>
          <Carousel className="hidden md:block">
            <CarouselContent>
              {portalItem.relatedTutorialCollection.items.map((tutorial) => (
                <CarouselItem className="basis-1/2" key={tutorial.sys.id}>
                  <Card className="mb-4 h-full flex flex-col justify-between">
                    <CardContent>
                      {tutorial.featuredImage && (
                        <img
                          src={tutorial.featuredImage.url}
                          alt={tutorial.title}
                          className="w-full h-32 object-contain"
                        />
                      )}
                      <CardTitle>{tutorial.title}</CardTitle>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/tutorials/${tutorial.slug}`}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Read more{" "}
                        <span className="sr-only">about {tutorial.title}</span>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <p>Portal item not found or failed to load.</p>
      )}
    </div>
  );
}
