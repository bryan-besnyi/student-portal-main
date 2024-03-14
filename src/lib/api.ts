const STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
  }
  softwareTitle
  loginUrl
  infoSlug
  description
  fullDescription
  logo {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const jsonResponse = await response.json();

  return jsonResponse;
}

function extractStudentPortalItemEntries(fetchResponse) {
  return fetchResponse?.data?.studentPortalItemCollection?.items;
}

export async function getAllStudentPortalItems(isDraftMode = false) {
  const studentPortalItems = await fetchGraphQL(
    `query {
      studentPortalItemCollection(where:{softwareTitle_exists: true}, preview: ${
        isDraftMode ? "true" : "false"
      }) {
          items {
            ${STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractStudentPortalItemEntries(studentPortalItems);
}

// Todo fix the primary key so we aint doin this bullshit
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getStudentPortalItem(softwareTitle, isDraftMode = false) {
  const adjustedSoftwareTitle = capitalizeFirstLetter(softwareTitle);
  console;
  const query = `query {
    studentPortalItemCollection(where: {softwareTitle: "${adjustedSoftwareTitle}"}, limit: 1, preview: ${
    isDraftMode ? "true" : "false"
  }) {
      items {
        ${STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS}
      }
    }
  }`;

  console.log("QUERY: " + query);

  // Debug: Log the complete query string to verify correctness
  console.log("Constructed GraphQL Query:", query);

  // Fetch the data using the constructed query
  const studentPortalItem = await fetchGraphQL(query, isDraftMode);

  // Debug: Log the raw response from Contentful
  console.log("Contentful Response:", studentPortalItem);

  // Extract and return the student portal item entry
  return extractStudentPortalItemEntries(studentPortalItem)[0];
}
