import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { ProjectPageQuery } from '../generated/types';

const Project: React.FC<PageProps<ProjectPageQuery>> = ({ data }) => {
   const { project } = data;

   console.log({ project });

   return (
      <div>
         <h1>{project.name}</h1>
      </div>
   );
};

export default Project;

export const query = graphql`
   query ProjectPage($id: String!) {
      project: sanityProject(id: { eq: $id }) {
         id
         name
         roles
         repository
         projectLink {
            title
            url
         }
         image {
            hotspot {
               x
               y
            }
            asset {
               gatsbyImageData(placeholder: BLURRED, fit: FILL)
            }
         }
         imageAlt
         stack {
            image {
               hotspot {
                  y
                  x
               }
               asset {
                  gatsbyImageData(placeholder: BLURRED, fit: FILL)
               }
            }
         }
         page {
            title
            body {
               children {
                  marks
                  text
               }
            }
            image {
               asset {
                  gatsbyImageData(placeholder: BLURRED, fit: FILL)
               }
               hotspot {
                  x
                  y
               }
            }
            imageAlt
         }
      }
   }
`;
