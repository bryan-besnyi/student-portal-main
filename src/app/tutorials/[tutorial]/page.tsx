import { getTutorialBySlug } from "@/lib/api";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import options from "@/lib/contentful-renderer"; // Import the updated options

export default async function TutorialPage({ params }) {
  let tutorial = null;
  let tutorialHtml = "";

  try {
    tutorial = await getTutorialBySlug(params.tutorial);
    if (tutorial && tutorial.content) {
      const linkedAssets = tutorial.content.links?.assets?.block || [];
      tutorialHtml = documentToHtmlString(
        tutorial.content.json,
        options(linkedAssets)
      );
    }
  } catch (error) {
    console.error("Error fetching tutorial:", error);
  }

  return (
    <div>
      {tutorial ? (
        <div className="py-12 container mx-auto">
          <article className="prose lg:prose-lg prose-a:text-blue-600 prose-img:my-3 mx-auto">
            <h1 className="text-center lg:text-nowrap font-light">
              {tutorial.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: tutorialHtml }} />
          </article>
        </div>
      ) : (
        <p>Tutorial not found.</p>
      )}
    </div>
  );
}
