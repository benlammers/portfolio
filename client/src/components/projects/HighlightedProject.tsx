import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectsQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';

interface Props {
   project: ProjectsQuery['allSanityProject']['nodes'][number];
   alignEnd?: boolean;
}

export const HighlightedProject: React.FC<Props> = ({ project, alignEnd }) => {
   const objectPosition = `${project.image.hotspot.x * 100}% ${project.image.hotspot.y * 100}%`;

   return (
      <div className={`w-full grid relative ${alignEnd ? 'justify-items-end' : 'justify-items-start'}`}>
         <div className={`w-1/2  h-full shadow-lg absolute top-0 ${alignEnd ? 'left-0' : 'right-0'}`}>
            <GatsbyImage className="w-full h-full" imgStyle={{ objectPosition }} image={project.image.asset.gatsbyImageData} alt={project.imageAlt} />
         </div>
         <div className="grid grid-rows-[max-content_1fr_max-content] shadow-lg gap-4 w-2/3 my-10 bg-white h-[420px] z-10 p-9 pr-16">
            <div className="flex flex-col">
               <h3 className="font-body text-lg font-bold uppercase text-amber-400">{project.name}</h3>
               <span className="text-3xl font-bold font-display capitalize tracking-tighter">{project.title}</span>
               <span className="flex items-center gap-2 font-body text-lg uppercase">
                  {project.roles.map((role, index) => (
                     <React.Fragment key={index}>
                        {role} {index === project.roles.length - 1 ? '' : <span className="h-[4px] w-[4px] rounded-full bg-black" />}
                     </React.Fragment>
                  ))}
               </span>
            </div>
            <div className="flex flex-col gap-2">
               <Paragraph body={project.description} />
            </div>
            <div className="flex justify-between">
               <button>View Project</button>
               <div className="flex gap-4">
                  {project.stack.map((skill, index) => (
                     <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
