export const allPosts = `
    query AllPosts {
      posts(first: 10000, where: {orderby: {field: DATE, order: DESC}}, after: "") {
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

export const allPostsWithSlug = `
  {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const post = `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
`;

export const postPaginate = `
    query PaginatePost($endCursor: String!) {
      posts(after: $endCursor, first: 4) {
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
            pageInfo {
              endCursor
              hasNextPage
            }
  }
}
`;