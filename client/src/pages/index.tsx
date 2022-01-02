import React from 'react';
import { About } from '../components/About';
import { Background } from '../components/Background';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';

const Home: React.FC = () => {
   return (
      <main className="relative">
         <Background />
         <Banner />
         <About />
         <Projects />
         <Skills />
         <Timeline />
         <Footer />
      </main>
   );
};

export default Home;
