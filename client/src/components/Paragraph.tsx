import React from 'react';

interface Props {
   body: Array<{ __typename?: 'SanityBlock'; children: Array<{ __typename?: 'SanitySpan'; marks: Array<string>; text: string }> }>;
}

export const Paragraph: React.FC<Props> = ({ body }) => (
   <>
      {body.map((block, index) => (
         <p key={index} className="text-base xs:text-lg font-normal font-body">
            {block.children.map((span, index) => {
               if (span.marks.includes('underline')) {
                  return (
                     <span key={index} className="text-amber-600 dark:text-amber-400 underline decoration-single sm:decoration-double underline-offset-4">
                        {span.text}
                     </span>
                  );
               } else return <React.Fragment key={index}>{span.text}</React.Fragment>;
            })}
         </p>
      ))}
   </>
);
