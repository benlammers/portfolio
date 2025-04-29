import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';
import { ProjectsQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';
import { HotspotImage } from '../HotspotImage';
import { Link } from 'gatsby';
import { Roles } from '../Roles';
import { Trophy } from '../Trophy';

interface Props {
   project: ProjectsQuery['allSanityProject']['nodes'][number];
}

export const HighlightedProject: React.FC<Props> = ({ project }) => {
   const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

   return (
      <article className="group grid relative gap-4 sm:gap-8 justify-items-end odd:justify-items-start" ref={ref}>
         <div
            className={`w-full rounded-md overflow-hidden shadow-lg md:w-1/3 bg-[#EAEAEA] p-12 md:absolute top-1/4 group-even:left-0 group-odd:right-6
               group-even:fade-left-init group-odd:fade-right-init ${inView ? 'group-even:animate-fade-left group-odd:animate-fade-right' : ''}`}
         >
            <Trophy />
         </div>
         <div
            className={`grid rounded-md grid-rows-[max-content_1fr_max-content] gap-4 md:shadow-lg md:w-[70%] lg:w-2/3 md:my-10 md:min-h-[420px] md:z-10 md:p-9 
            bg-white dark:bg-dark-gray-2 md:dark:bg-gray-300 transition-colors duration-300 group-odd:fade-left-init group-even:fade-right-init
            ${inView ? 'group-odd:animate-fade-left group-even:animate-fade-right' : ''}`}
         >
            <div className="flex flex-col dark:text-gray-100 md:dark:text-dark-gray">
               <h3 className="heading-label text-amber-500 font-bold">{project.name}</h3>
               <span className="heading-tertiary capitalize">{project.title}</span>
               <Roles roles={project.roles} onCard />
            </div>
            <div className="flex flex-col gap-2 dark:text-gray-100 md:dark:text-dark-gray">
               <Paragraph body={project.description} />
            </div>
            <div className="flex flex-col gap-6 items-start justify-between sm:items-center sm:gap-4 sm:flex-row-reverse mt-3">
               <div className="flex gap-4 md:gap-2 lg:gap-4">
                  {project.stack.map((skill, index) => (
                     <GatsbyImage className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
                  ))}
               </div>
               <Link
                  to={`/projects/${project.slug.current}`}
                  className="grid grid-cols-[1fr_max-content] pr-2 min-w-[10rem] md:min-w-[9rem] lg:min-w-[10rem] shadow-md rounded-md items-center bg-amber-400 dark:bg-amber-500 hover:bg-amber-300 dark:hover:bg-amber-400 transition-colors duration-300"
               >
                  <span className="w-full text-lg text-center py-1.5 dark:text-dark-gray">Learn More</span>
                  <svg className="stroke-dark-gray h-4 w-4 pt-[1px]" viewBox="0 0 16 16" fill="none">
                     <path d="M4.8125 1.625L11.1875 8L4.8125 14.375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </Link>
            </div>
         </div>
      </article>
   );
};
