import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ProjectsQuery } from '../../generated/types';
import { HighlightedProject } from './HighlightedProject';
import { SideProject } from './SideProject';

export const Projects: React.FC = () => {
   const data = useStaticQuery<ProjectsQuery>(query);

   console.log({ data });

   return (
      <section className="flex flex-col gap-24 w-full p-24 pb-0 bg-amber-400">
         {data.allSanityProject.nodes.map((project, index) => {
            if (project.isHighlighted) {
               return <HighlightedProject key={project.id} project={project} alignEnd={index % 2 === 1} />;
            }
            return <SideProject key={project.id} project={project} alignEnd={index % 2 === 1} />;
         })}
      </section>
   );
};

const query = graphql`
   query Projects {
      allSanityProject(sort: { fields: name }) {
         nodes {
            id
            name
            title
            roles
            description {
               children {
                  text
                  marks
               }
            }
            image {
               asset {
                  gatsbyImageData(fit: FILL, placeholder: BLURRED)
               }
               hotspot {
                  x
                  y
               }
            }
            imageAlt
            isHighlighted
            repository
            projectLink {
               url
               title
            }
            stack {
               id
               alt
               image {
                  asset {
                     gatsbyImageData(placeholder: BLURRED, width: 36, height: 36)
                  }
               }
            }
            page {
               title
               imageAlt
               image {
                  asset {
                     gatsbyImageData
                  }
               }
               body {
                  list
               }
            }
         }
      }
   }
`;
