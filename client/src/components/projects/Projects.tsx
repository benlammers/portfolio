import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ProjectsQuery } from '../../generated/types';
import { HighlightedProject } from './HighlightedProject';
import { SideProject } from './SideProject';
import { Section } from '../Section';

export const Projects: React.FC = () => {
   const data = useStaticQuery<ProjectsQuery>(query);

   return (
      <Section id="projects" bg="md:bg-amber-400 dark:bg-dark-gray" className="flex flex-col gap-16">
         {data.allSanityProject.nodes.map((project) => {
            if (project.isHighlighted) {
               return <HighlightedProject key={project.id} project={project} />;
            }
            return <SideProject key={project.id} project={project} />;
         })}
      </Section>
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
                     gatsbyImageData(placeholder: BLURRED, fit: FILL)
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
