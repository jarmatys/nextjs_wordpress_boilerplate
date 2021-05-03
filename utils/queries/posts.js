export const allPosts = `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            extraPostInfo {
              authorExcerpt
              thumbnailImage {
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