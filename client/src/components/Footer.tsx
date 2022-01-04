import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';
import { InfoQuery } from '../generated/types';

export const Footer: React.FC = () => {
   const data = useStaticQuery<InfoQuery>(query);

   return (
      <footer className="flex flex-col items-center gap-6 justify-center bg-gray-100 px-24 py-6">
         <div className="grid grid-cols-3 items-center w-full">
            <div className="self-start">
               <span className="font-body text-sm font-medium text-gray-600">Connect</span>
               <div className="flex gap-4">
                  <TwitterLink inFooter />
                  <GithubLink inFooter />
                  <LinkedInLink inFooter />
               </div>
            </div>
            <div className="flex flex-col items-center">
               <span className="font-display text-2xl font-bold">Ben Lammers</span>
               <div className="flex gap-4">
                  <span>About</span>
                  <span>Skills</span>
                  <span>Projects</span>
                  <span>Timeline</span>
               </div>
            </div>
            <div className="flex flex-col gap-2 items-end self-start">
               <span className="font-body text-sm font-medium text-gray-600">Built With</span>
               <div className="flex gap-4">
                  {data.sanityInfo.stack.map((skill) => (
                     <div className="h-7 w-7" key={skill.id}>
                        <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={skill.id} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <span className="font-body text-sm font-medium text-gray-500">&copy; {new Date().getFullYear()} Ben Lammers</span>
      </footer>
   );
};

const query = graphql`
   query Info {
      sanityInfo {
         stack {
            image {
               asset {
                  gatsbyImageData(placeholder: BLURRED, fit: FILL)
               }
            }
            name
            alt
            id
         }
      }
   }
`;
