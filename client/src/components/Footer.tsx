import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';
import { InfoQuery } from '../generated/types';

export const Footer: React.FC = () => {
   const data = useStaticQuery<InfoQuery>(query);

   return (
      <footer className="w-full px-16 py-6 pt-12 sm:pt-6 bg-gray-100">
         <div className="max-w-[64rem] mx-auto grid items-center gap-12 sm:gap-6">
            <div className="grid gap-y-12 items-center justify-items-center sm:grid-cols-3 sm:justify-items-stretch w-full">
               <div className="flex flex-col gap-2 items-center">
                  <span className="w-max font-display text-4xl sm:text-2xl uppercase font-bold">Ben Lammers</span>
                  <div className="grid grid-cols-2 w-full sm:w-min sm:flex gap-4 text-xl sm:text-base">
                     <button className="hover:text-gray-700" onClick={() => scrollTo('#about')}>
                        About
                     </button>
                     <button className="hover:text-gray-700" onClick={() => scrollTo('#skills')}>
                        Skills
                     </button>
                     <button className="hover:text-gray-700" onClick={() => scrollTo('#projects')}>
                        Projects
                     </button>
                     <button className="hover:text-gray-700" onClick={() => scrollTo('#timeline')}>
                        Timeline
                     </button>
                  </div>
               </div>
               <div className="sm:self-start sm:row-start-1 sm:col-start-1">
                  <span className="hidden mb-2 sm:mb-1 sm:inline-block font-body text-sm font-medium text-gray-600">Connect</span>
                  <div className="flex justify-center sm:justify-start gap-8 sm:gap-3 md:gap-4">
                     <TwitterLink inFooter />
                     <GithubLink inFooter />
                     <LinkedInLink inFooter />
                  </div>
               </div>
               <div className="flex gap-y-2 gap-x-4 items-center sm:flex-col sm:items-end sm:self-start">
                  <span className="font-body text-base sm:text-sm font-medium text-gray-600">Built With</span>
                  <div className="flex gap-4 sm:gap-3 md:gap-4">
                     {data.sanityInfo.stack.map((skill) => (
                        <div className="h-7 w-7" key={skill.id}>
                           <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={skill.id} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <span className="font-body text-center text-sm font-medium text-gray-500">&copy; {new Date().getFullYear()} Ben Lammers</span>
         </div>
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

// Todo add credit to icons
