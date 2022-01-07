import React from 'react';

interface Props {
   roles: string[];
   onCard?: boolean;
}

export const Roles: React.FC<Props> = ({ roles, onCard }) => {
   return (
      <span className="heading-label text-lg sm:text-base flex items-center gap-2 transition-colors duration-300">
         {roles.map((role, index) => (
            <React.Fragment key={index}>
               {role}{' '}
               {index === roles.length - 1 ? (
                  ''
               ) : (
                  <span className={`h-[4px] w-[4px] rounded-full bg-dark-gray dark:bg-gray-100 ${onCard ? 'md:dark:bg-dark-gray' : ''}`} />
               )}
            </React.Fragment>
         ))}
      </span>
   );
};
