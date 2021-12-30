import React from 'react';
import { graphql } from 'gatsby';
import { ProjectsQuery } from '../generated/types';

interface Props {
   data: ProjectsQuery;
}

const Projects: React.FC<Props> = ({ data }) => {
   console.log({ data });
   return (
      <div>
         {data.allSanityProject.nodes.map((project) => (
            <div key={project._id}>
               <h1>{project.title}</h1>
               <p>{project.description}</p>
               <img width="100px" src={project.image.asset.url} />
            </div>
         ))}
      </div>
   );
};

export default Projects;

export const query = graphql`
   query Projects {
      allSanityProject {
         nodes {
            _id
            date
            description
            image {
               asset {
                  url
               }
            }
            role
            title
            skills {
               _id
               icon {
                  asset {
                     url
                  }
               }
               name
               level
            }
         }
      }
      allSanitySkill {
         nodes {
            _id
         }
      }
   }
`;
