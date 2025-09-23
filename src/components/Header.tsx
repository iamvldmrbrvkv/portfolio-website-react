import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context';
import darkModeIcon from '../assets/images/dark_mode_button_sun.png';

const Header: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  return (
    <header className="flex justify-between items-center border-t border-b border-black dark:border-white p-[10px] flex-wrap">
      <h1 className="mx-[30px] text-center">Vladimir Borovikov</h1>
      <nav className="mx-[30px]">
        <div className="flex justify-around items-center flex-wrap">
          <ul className="list-none space-x-4">
            <li className="inline-block">
              {location.pathname === '/' ? (
                <a 
                  href="#about-me"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-mono"
                >
                  About Me
                </a>
              ) : (
                <Link 
                  to="/#about-me"
                  className="font-mono"
                >
                  About Me
                </Link>
              )}
            </li>
            <li className="inline-block">
              {location.pathname === '/' ? (
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-mono"
                >
                  Projects
                </a>
              ) : (
                <Link 
                  to="/#projects"
                  className="font-mono"
                >
                  Projects
                </Link>
              )}
            </li>
            <li className="inline-block">
              {location.pathname === '/' ? (
                <a 
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-mono"
                >
                  Skills
                </a>
              ) : (
                <Link 
                  to="/#skills"
                  className="font-mono"
                >
                  Skills
                </Link>
              )}
            </li>
            <li className="inline-block">
              <Link 
                to="/contact"
                className="font-mono"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button 
            onClick={toggleDarkMode}
            className="ml-[10px] border-none bg-transparent cursor-pointer"
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