export const allServicesWithSlug = `
{
    services(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }  
`;

export const service = `
    fragment ServiceFields on Service {
        title
        slug
        date
        excerpt
        featuredImage {
        node {
            sourceUrl
        }
        }
    }
    query ServiceBySlug($id: ID!, $idType: ServiceIdType!) {
        service(id: $id, idType: $idType) {
        ...ServiceFields,
        content
        }
    }
`;

export const allServices = `
    query AllPosts {
      services(first: 10000, where: {orderby: {field: DATE, order: DESC}}, after: "") {
        edges {
          node {
            id
            date
            title
            slug
            excerpt
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }       
      }
    }
`;
