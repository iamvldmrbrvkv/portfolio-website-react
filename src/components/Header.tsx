import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context';
import { useEffect } from 'react';

const Header = () => {
  const { isDark, themeMode, toggleThemeMode } = useDarkMode();
  const location = useLocation();

  const updateHeaderHeight = () => {
    const header = document.querySelector('header');
    if (header) {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height + 10}px`);
    }
  };

  useEffect(() => {
    updateHeaderHeight();
    
    const handleResize = () => updateHeaderHeight();
    window.addEventListener('resize', handleResize);
    
    const timeout = setTimeout(updateHeaderHeight, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeout);
    };
  }, [themeMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector('header');
    
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight - 10;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return { icon: '☀️', label: 'Light theme (click for dark)' };
      case 'dark': 
        return { icon: '🌙', label: 'Dark theme (click for system)' };
      case 'system':
        return { icon: '💻', label: `System theme: ${isDark ? 'dark' : 'light'} (click for light)` };
      default:
        return { icon: '☀️', label: 'Light theme' };
    }
  };

  const { icon, label } = getThemeIcon();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-1 bg-white dark:bg-[rgb(32,33,36)] flex justify-between items-center border-t border-b border-black dark:border-white p-[10px] flex-wrap md:justify-between max-md:justify-center">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mx-[30px] text-center no-underline hover:no-underline focus:no-underline active:no-underline text-black dark:text-[#eee] visited:text-black dark:visited:text-[#eee]"
      >
        <h1 className="text-[32px]">Vladimir Borovikov</h1>
      </Link>
      <nav className="mr-[30px] max-md:mx-auto">
        <div className="flex justify-around items-center flex-wrap">
          <ul className="list-none flex gap-x-[9px]">
            <li>
              {location.pathname === '/' ? (
                <a 
                  href="#about-me"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about-me');
                  }}
                >
                  About Me
                </a>
              ) : (
                <Link 
                  to="/#about-me"
                >
                  About Me
                </Link>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  Projects
                </a>
              ) : (
                <Link 
                  to="/#projects"
                >
                  Projects
                </Link>
              )}
            </li>
                        <li>
              {location.pathname === '/' ? (
                <a 
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                >
                  Skills
                </a>
              ) : (
                <Link 
                  to="/#skills"
                >
                  Skills
                </Link>
              )}
            </li>
            <li>
              <Link 
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button 
            onClick={toggleThemeMode}
            className="ml-[10px] border-none bg-transparent cursor-pointer text-[25px] leading-none"
            aria-label={label}
            title={label}
          >
            {icon}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;