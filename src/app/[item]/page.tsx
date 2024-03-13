import { getStudentPortalItem } from "@/lib/api";

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
    <main>
      {portalItem ? (
        <div>
          <h1>Software Title: {portalItem.softwareTitle}</h1>
          <p>Login URL: {portalItem.loginUrl}</p>
          <p>Info Slug: {portalItem.infoSlug}</p>
          <p>Description: {portalItem.description}</p>
          {portalItem.logo && portalItem.logo.url ? (
            <img
              src={portalItem.logo.url}
              alt={`${portalItem.softwareTitle} logo`}
            />
          ) : null}
          {/* Assuming infoPageContent is rich text, displaying it might require parsing */}
        </div>
      ) : (
        <p>Portal item not found or failed to load.</p>
      )}
    </main>
  );
}
