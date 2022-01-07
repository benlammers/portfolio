import React from 'react';

interface Props {
   id: string;
   parentClass?: string;
   contentClass?: string;
}

export const Section: React.FC<Props> = ({ id, parentClass, contentClass, children }) => {
   return (
      <section id={id} className={`w-full relative px-6 sm:px-16 transition-colors duration-300 ${parentClass ? parentClass : ''}`}>
         <div className={`max-w-[64rem] mx-auto ${contentClass ? contentClass : ''}`}>{children}</div>
      </section>
   );
};
