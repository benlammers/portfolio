import React from 'react';
import { About } from '../components/About';
import { Banner } from '../components/Banner';
import { DarkToggle } from '../components/DarkToggle';
import { Footer } from '../components/Footer';
import { Projects } from '../components/projects/Projects';
import { Skills } from '../components/skills/Skills';
import { Timeline } from '../components/timeline/Timeline';

const Home: React.FC = () => {
   return (
      <main className="relative">
         <DarkToggle />
         <Banner />
         <About />
         <Skills />
         <Projects />
         <Timeline />
         <Footer />
      </main>
   );
};

export default Home;
