// app/[tutorial]/page.tsx

import { getTutorialBySlug } from "@/lib/api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default async function TutorialPage({ params }) {
  console.log(`Params: `, params);
  let tutorial = null;
  let tutorialHtml = "";

  try {
    tutorial = await getTutorialBySlug(params.tutorial);
    if (tutorial && tutorial.content) {
      tutorialHtml = documentToHtmlString(tutorial.content.json);
    }
  } catch (error) {
    console.error("Error fetching tutorial:", error);
    // Handle error appropriately...
  }

  return (
    <div>
      {tutorial ? (
        <div className="container mx-auto">
          <article className="prose">
            <h1>{tutorial.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: tutorialHtml }} />
            {/* Render featured image and other content as needed */}
          </article>
        </div>
      ) : (
        <p>Tutorial not found.</p>
      )}
    </div>
  );
}
