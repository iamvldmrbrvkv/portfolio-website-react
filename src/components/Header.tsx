import React from 'react';
import { useDarkMode } from '../context';
import darkModeIcon from '../assets/images/dark_mode_button_sun.png';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  const handleNavClick = (section: string) => {
    onNavigate(section);
  };

  return (
    <header className="flex justify-between items-center border-t border-b border-black dark:border-white p-2.5 flex-wrap">
      <h1 className="mx-7 text-center">Vladimir Borovikov</h1>
      <nav className="mx-7">
        <div className="flex justify-around items-center flex-wrap">
          <ul className="list-none">
            <li className="inline-block">
              <a 
                href="#about-me"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about-me');
                }}
                className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white mr-4 font-mono"
              >
                About Me
              </a>
            </li>
            <li className="inline-block">
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('projects');
                }}
                className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white mr-4 font-mono"
              >
                Projects
              </a>
            </li>
            <li className="inline-block">
              <a 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('skills');
                }}
                className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white mr-4 font-mono"
              >
                Skills
              </a>
            </li>
            <li className="inline-block">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white font-mono"
              >
                Contact
              </a>
            </li>
          </ul>
          <button 
            onClick={toggleDarkMode}
            className="ml-2.5 border-none bg-transparent cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <img 
              src={darkModeIcon} 
              alt="Dark mode toggle" 
              className={`h-[25px] ${isDark ? 'invert' : ''}`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;