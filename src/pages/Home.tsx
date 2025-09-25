import { useEffect } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default Home;