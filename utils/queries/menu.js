export const mainMenu = `
query MainMenu {
    menuItems(first: 5) {
      edges {
        node {
          path
          label
          id
        }
      }
    }
  }
`;