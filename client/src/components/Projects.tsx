import React from 'react';
import { HighlightedProject } from './HighlightedProject';
import { SideProject } from './SideProject';

export const Projects: React.FC = () => {
   return (
      <section className="flex flex-col gap-24 w-full p-24 pb-0 bg-amber-400">
         <HighlightedProject />
         <HighlightedProject alignEnd />
         <SideProject />
         <SideProject alignEnd />
      </section>
   );
};
