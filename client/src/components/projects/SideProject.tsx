import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';
import { ProjectsQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';
import { HotspotImage } from '../HotspotImage';
import { Link } from '../Link';

interface Props {
   project: ProjectsQuery['allSanityProject']['nodes'][number];
}

export const SideProject: React.FC<Props> = ({ project }) => {
   const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

   return (
      <article className="group grid relative gap-8 justify-items-end odd:justify-items-start" ref={ref}>
         <div
            className={`w-full aspect-video shadow-lg  md:w-1/3 md:h-full md:absolute top-0 group-even:left-0 group-odd:right-0
            group-even:fade-left-init group-odd:fade-right-init ${inView ? 'group-even:animate-fade-left group-odd:animate-fade-right' : ''}`}
         >
            <HotspotImage image={project.image} alt={project.imageAlt} />
         </div>
         <div
            className={`grid grid-cols-[1fr_max-content]  md:gap-8 md:w-[70%] md:my-6 md:min-h-[260px] md:z-10 md:p-9 md:pb-5 md:shadow-lg 
            transition-colors duration-300 bg-white dark:bg-dark-gray-2 md:dark:bg-gray-300
            group-odd:fade-left-init group-even:fade-right-init ${inView ? 'group-odd:animate-fade-left group-even:animate-fade-right' : ''}`}
         >
            <div className="grid grid-rows-[max-content_1fr_max-content_max-content] gap-2 dark:text-gray-100 md:dark:text-dark-gray">
               <div className="flex flex-col">
                  <h3 className="heading-label font-bold">{project.name}</h3>
                  <span className="heading-tertiary capitalize">{project.title}</span>
               </div>
               <div className="flex flex-col gap-2">
                  <Paragraph body={project.description} />
               </div>
               <div className="flex gap-4 md:hidden my-2">
                  {project.stack.map((skill, index) => (
                     <GatsbyImage className="w-10 h-10" image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
                  ))}
               </div>
               <div className="flex gap-4 mt-2">
                  <Link type="github" href={project.repository} title="View Repository" />
                  {project.projectLink && <Link type="external" href={project.projectLink.url} title={project.projectLink.title} />}
               </div>
            </div>
            <div className="flex-col gap-4 lg:gap-2 hidden md:flex">
               {project.stack.map((skill, index) => (
                  <GatsbyImage className="w-8 h-8 lg:w-10 lg:h-10" image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
               ))}
            </div>
         </div>
      </article>
   );
};
