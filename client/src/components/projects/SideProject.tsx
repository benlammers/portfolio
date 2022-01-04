import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectsQuery } from '../../generated/types';
import { Paragraph } from '../Paragraph';

interface Props {
   project: ProjectsQuery['allSanityProject']['nodes'][number];
   alignEnd?: boolean;
}

export const SideProject: React.FC<Props> = ({ project, alignEnd }) => {
   const objectPosition = `${project.image.hotspot.x * 100}% ${project.image.hotspot.y * 100}%`;

   return (
      <div className={`w-full grid relative ${alignEnd ? 'justify-items-end' : 'justify-items-start'}`}>
         <div className={`w-1/3  h-full shadow-lg absolute top-0 ${alignEnd ? 'left-0' : 'right-0'}`}>
            <GatsbyImage className="w-full h-full" imgStyle={{ objectPosition }} image={project.image.asset.gatsbyImageData} alt={project.imageAlt} />
         </div>
         <div className="grid grid-cols-[1fr_max-content] shadow-lg gap-8 w-[70%] my-6 bg-white h-[260px] z-10 p-9">
            <div className="grid grid-rows-[max-content_1fr_max-content] gap-4">
               <div className="flex flex-col">
                  <h3 className="font-body text-lg font-bold uppercase">{project.name}</h3>
                  <span className="text-3xl font-bold font-display capitalize tracking-tighter">{project.title}</span>
               </div>
               <div className="flex flex-col gap-2">
                  <Paragraph body={project.description} />
               </div>
               <div className="flex gap-8">
                  <a href={project.repository} target="_blank" rel="noopener">
                     View Repository
                  </a>
                  {project.projectLink && (
                     <a href={project.projectLink.url} target="_blank" rel="noopener">
                        {project.projectLink.title}
                     </a>
                  )}
               </div>
            </div>
            <div className="flex flex-col gap-4">
               {project.stack.map((skill, index) => (
                  <GatsbyImage image={skill.image.asset.gatsbyImageData} alt={skill.alt} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
};
