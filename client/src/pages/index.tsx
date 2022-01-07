import React from 'react';
import { Helmet } from 'react-helmet';
import { About } from '../components/About';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Projects } from '../components/projects/Projects';
import { Skills } from '../components/skills/Skills';
import { Timeline } from '../components/timeline/Timeline';

const Home: React.FC = () => {
   return (
      <main className="relative overflow-hidden">
         <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>Ben Lammers</title>
            <meta name="description" content="Ben Lammers is a Front End Developer based in Kingston, ON." />
            <meta charSet="utf-8" />
         </Helmet>
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
