import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AboutQuery } from '../generated/types';
import { Paragraph } from './Paragraph';

export const About: React.FC = () => {
   const data = useStaticQuery<AboutQuery>(query);
   console.log(data);

   return (
      <div className="flex flex-col justify-center gap-12 h-screen pl-24 max-h-[64rem] relative">
         <div className="absolute top-0 right-0 h-full w-full bg-gray-100 -z-20" />
         <div className="flex flex-col gap-4 w-3/5">
            <div className="flex flex-col">
               <h2 className="text-lg uppercase font-normal font-body">About</h2>
               <span className="text-4xl font-bold font-display">{data.sanityAbout.title}</span>
            </div>
            <Paragraph body={data.sanityAbout.body} />
         </div>
      </div>
   );
};

const query = graphql`
   query About {
      sanityAbout {
         title
         body {
            children {
               marks
               text
            }
         }
      }
   }
`;
