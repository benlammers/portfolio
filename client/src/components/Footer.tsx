import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useInView } from 'react-intersection-observer';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GithubLink } from './links/GithubLink';
import { LinkedInLink } from './links/LinkedInLink';
import { TwitterLink } from './links/TwitterLink';
import { InfoQuery } from '../generated/types';

export const Footer: React.FC = () => {
   const data = useStaticQuery<InfoQuery>(query);
   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

   return (
      <footer className="w-full px-16 py-6 pt-12 sm:pt-6 bg-gray-100 dark:bg-black dark:text-gray-100 transition-colors duration-300" ref={ref}>
         <div className={`max-w-[64rem] mx-auto grid items-center gap-12 sm:gap-10 fade-in-init ${inView ? 'animate-fade-in' : ''}`}>
            <div className="grid gap-y-12 items-center justify-items-center sm:grid-cols-3 sm:justify-items-stretch w-full">
               <div className="flex flex-col gap-2 items-center">
                  <span className="w-max font-display text-4xl sm:text-2xl uppercase font-bold">Ben Lammers</span>
                  <div className="grid grid-cols-2 w-full sm:w-min sm:flex gap-4 text-xl sm:text-base">
                     {['About', 'Skills', 'Projects', 'Timeline'].map((section) => (
                        <button
                           key={section}
                           className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                           onClick={() => scrollTo(`#${section.toLowerCase()}`)}
                        >
                           {section}
                        </button>
                     ))}
                  </div>
               </div>
               <div className="sm:self-start sm:row-start-1 sm:col-start-1">
                  <span className="hidden mb-2 sm:mb-1 sm:inline-block font-body text-sm font-medium text-gray-600 dark:text-gray-400">Connect</span>
                  <div className="flex justify-center sm:justify-start gap-8 sm:gap-3 md:gap-4">
                     <TwitterLink inFooter />
                     <GithubLink inFooter />
                     <LinkedInLink inFooter />
                  </div>
               </div>
               <div className="flex gap-y-2 gap-x-4 items-center sm:flex-col sm:items-end sm:self-start">
                  <span className="font-body text-base sm:text-sm font-medium text-gray-600 dark:text-gray-400">Built With</span>
                  <div className="flex gap-4 sm:gap-3 md:gap-4">
                     {data.sanityInfo.stack.map((skill) => (
                        <div className="h-7 w-7" key={skill.id}>
                           <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={skill.id} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse md:justify-between gap-4">
               <span className="font-body text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                  Timeline icons made by{' '}
                  <a className="underline" href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener" title="Freepik">
                     Freepik
                  </a>{' '}
                  from{' '}
                  <a className="underline" href="https://www.flaticon.com/" target="_blank" rel="noopener" title="Flaticon">
                     www.flaticon.com
                  </a>
               </span>
               <span className="font-body text-center text-sm font-medium text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Ben Lammers</span>
            </div>
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
