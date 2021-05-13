export const allMain = `
  query AllMain {
    posts(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
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
    services(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          id
          slug
          date
          title
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
    testiomontials(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
      edges {
        node {
          id
          addons {
            name
            text
            work
          }
        }
      }
    }
  }
`;