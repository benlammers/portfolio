import React from 'react';

interface Props {
   id: string;
   bg: string;
   className?: string;
}

export const Section: React.FC<Props> = ({ id, bg, className, children }) => {
   return (
      <section id={id} className={`w-full relative px-8 sm:px-16 py-24 ${bg}`}>
         <div className={`max-w-[64rem] mx-auto ${className}`}>{children}</div>
      </section>
   );
};
