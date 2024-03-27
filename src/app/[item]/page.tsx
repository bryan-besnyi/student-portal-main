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
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={portalItem.loginUrl}
          >
            Access {portalItem.softwareTitle}
          </Link>
          <p>Description: {portalItem.description}</p>
          {portalItem.logo && portalItem.logo.url ? (
            <img
              src={portalItem.logo.url}
              alt={`${portalItem.softwareTitle} logo`}
            />
          ) : null}
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
          <div className="grid grid-cols-2">
            {portalItem.relatedTutorialCollection.items.map((tutorial) => (
              <Card key={tutorial.sys.id} className="mb-4">
                <CardHeader>
                  {tutorial.featuredImage && (
                    <img
                      src={tutorial.featuredImage.url}
                      alt={tutorial.title}
                      className="w-full object-contain"
                    />
                  )}
                </CardHeader>
                <CardContent>
                  <CardTitle>{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/tutorials/${tutorial.slug}`}
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                  >
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p>Portal item not found or failed to load.</p>
      )}
    </div>
  );
}
