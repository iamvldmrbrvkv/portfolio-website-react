import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context';
import darkModeIcon from '../assets/images/dark_mode_button_sun.png';

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-1 bg-white dark:bg-[rgb(32,33,36)] flex justify-between items-center border-t border-b border-black dark:border-white p-[10px] flex-wrap md:justify-between [@media(max-width:768px)]:justify-center">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mx-[30px] text-center no-underline hover:no-underline focus:no-underline active:no-underline text-black dark:text-[#eee] visited:text-black dark:visited:text-[#eee]"
      >
        <h1 className="text-[32px]">Vladimir Borovikov</h1>
      </Link>
      <nav className="mx-[30px] [@media(max-width:768px)]:mx-auto">
        <div className="flex justify-around items-center flex-wrap">
          <ul className="list-none flex gap-x-[9px]">
            <li>
              {location.pathname === '/' ? (
                <a 
                  href="#about-me"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
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
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
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
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
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