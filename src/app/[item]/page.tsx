import { buttonVariants } from "@/app/components/ui/button";
import { getStudentPortalItem } from "@/lib/api";
import Link from "next/link";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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
        </div>
      ) : (
        <p>Portal item not found or failed to load.</p>
      )}
    </div>
  );
}
