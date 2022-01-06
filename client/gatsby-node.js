async function createProjectPages(graphql, actions) {
   const { createPage } = actions;
   const result = await graphql(`
      query ProjectPages {
         allSanityProject(filter: { isHighlighted: { eq: true } }) {
            nodes {
               id
               slug {
                  current
               }
            }
         }
      }
   `);

   if (result.errors) {
      throw result.errors;
   }

   const projectNodes = (result.data.allSanityProject || {}).nodes || [];

   projectNodes.forEach((project) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = project;
      // If there isn't a slug, we want to do nothing
      if (!slug) return;

      const path = `/projects/${slug.current}`;

      createPage({
         path,
         component: require.resolve('./src/templates/Project.tsx'),
         context: { id },
      });
   });
}

exports.createPages = async ({ graphql, actions }) => {
   await createProjectPages(graphql, actions);
};
