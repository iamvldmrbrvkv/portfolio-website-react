import { useCallback } from 'react';
import { DarkModeProvider } from './context';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleNavigation = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-gray-100 font-mono">
        <Header onNavigate={handleNavigation} />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
