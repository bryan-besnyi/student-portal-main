const STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
  }
  softwareTitle
  loginUrl
  infoSlug
  description
  featured
  infoPageContent {
    json
  }
  logo {
    url
  }
`;

const STUDENT_FORM_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
  }
  formTitle
  description
  file {
    url
    fileName
    contentType
  }
  department {
    sys {
      id
    }
    ... on Department {
      name
    }
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
      studentPortalItemCollection(where:{softwareTitle_exists: true}, order: softwareTitle_ASC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
          items {
            ${STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  console.log("Student Portal Items: " + studentPortalItems);
  return extractStudentPortalItemEntries(studentPortalItems);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getAllFeaturedStudentPortalItems(isDraftMode = false) {
  const studentPortalItems = await fetchGraphQL(
    `query {
      studentPortalItemCollection(where:{featured: true}, order: softwareTitle_ASC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
          items {
            ${STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  console.log("Student Portal Items: ", studentPortalItems);
  return extractStudentPortalItemEntries(studentPortalItems);
}

export async function getAllUnfeaturedStudentPortalItems(isDraftMode = false) {
  const studentPortalItems = await fetchGraphQL(
    `query {
      studentPortalItemCollection(where:{featured: false}, order: softwareTitle_ASC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
          items {
            ${STUDENT_PORTAL_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  console.log("Student Portal Items: ", studentPortalItems);
  return extractStudentPortalItemEntries(studentPortalItems);
}

export async function getStudentPortalItem(infoSlug, isDraftMode = false) {
  const query = `query {
    studentPortalItemCollection(where: {infoSlug: "${infoSlug}"}, limit: 1, preview: ${
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

function extractStudentFormItemEntries(response) {
  // Ensure this path matches the structure of the GraphQL response for your "Student Form Item"
  return response?.data?.studentFormItemCollection?.items;
}

export async function getAllStudentFormItems(isDraftMode = false) {
  const query = `query {
    studentFormItemCollection(preview: ${isDraftMode ? "true" : "false"}) {
      items {
        ${STUDENT_FORM_ITEM_GRAPHQL_FIELDS}
      }
    }
  }`;

  console.log("QUERY: " + query);

  return await fetchGraphQL(query, isDraftMode).then(
    extractStudentFormItemEntries
  );
}

export async function getStudentFormItem(formId, isDraftMode = false) {
  const query = `query {
    studentFormItemCollection(where: {sys: {id: "${formId}"}}, limit: 1, preview: ${
    isDraftMode ? "true" : "false"
  }) {
      items {
        ${STUDENT_FORM_ITEM_GRAPHQL_FIELDS}
      }
    }
  }`;

  return await fetchGraphQL(query, isDraftMode).then(
    (response) => response?.data?.studentFormItemCollection?.items[0]
  );
}

export async function getStudentFormItemByDepartment(params) {
  const query = `query {
    studentFormItemCollection(where: {department: {sys: {id: "${
      params.department
    }}"}}, preview: ${params.preview ? "true" : "false"}) {
      items {
        ${STUDENT_FORM_ITEM_GRAPHQL_FIELDS}
      }
    }
  }`;

  return await fetchGraphQL(query, params.preview).then(
    extractStudentFormItemEntries
  );
}

export async function getAllDepartmentsWithForms(isDraftMode = false) {
  // This query fetches all forms along with the associated department details
  const query = `query {
    studentFormItemCollection(preview: ${isDraftMode ? "true" : "false"}) {
      items {
        ${STUDENT_FORM_ITEM_GRAPHQL_FIELDS}
      }
    }
  }`;

  const response = await fetchGraphQL(query, isDraftMode);
  console.log("GraphQL Response:", response);

  if (response.errors) {
    console.error("GraphQL Errors:", response.errors);
    return [];
  }

  // Organize forms by department
  const formsByDepartment = {};
  response.data.studentFormItemCollection.items.forEach((form) => {
    const departmentId = form.department?.sys?.id;
    if (departmentId) {
      if (!formsByDepartment[departmentId]) {
        formsByDepartment[departmentId] = {
          id: departmentId,
          name: form.department.name,
          forms: [],
        };
      }
      formsByDepartment[departmentId].forms.push(form);
    }
  });

  // Convert the object to an array of departments with their forms
  return Object.values(formsByDepartment);
}
