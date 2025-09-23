import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: React.FC = () => {
  return (
    <main>
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default Home;