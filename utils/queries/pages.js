export const allPagesWithSlug = `
{
    pages(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }  
`;

export const page = `
    fragment PageFields on Page {
        title
        slug
        date
        featuredImage {
          node {
              sourceUrl
          }
        }
    }
    query PageBySlug($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
        ...PageFields
        content
        }
    }
`;
