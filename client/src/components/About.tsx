import React from 'react';

export const About: React.FC = () => {
   return (
      <div className="flex flex-col justify-center gap-12 h-screen pl-24 max-h-[64rem] relative">
         <div className="absolute top-0 right-0 h-full w-full bg-gray-100 -z-20" />
         <div className="flex flex-col gap-4 w-3/5">
            <div className="flex flex-col">
               <h2 className="text-lg uppercase font-normal font-body">About</h2>
               <span className="text-4xl font-bold font-display">I'm a passionate developer</span>
            </div>
            <p className="text-lg font-normal font-body">
               I was introduced to web development by my brother and have been taking in everything I can since. Exploring the web has been intriguing, entering
               the space when React was embracing hooks and functional components.
            </p>
            <p className="text-lg font-normal font-body">
               I am an <span className="text-amber-500 underline decoration-double underline-offset-2">avid podcast listener</span> where I stay up to date with
               new and upcoming technologies. I am delighted when trying out tools such as GraphQL Codegen and at the prospect of the rise of Svelte as a
               dominant player in the front end world.
            </p>
            <p className="text-lg font-normal font-body">
               It's an exciting time to be a developer and I look forward to the oppurtunities ahead and the products to be built.
            </p>
         </div>
      </div>
   );
};
