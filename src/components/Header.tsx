import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context';
import darkModeIcon from '../assets/images/dark_mode_button_sun.png';

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  return (
    <header className="flex justify-between items-center border-t border-b border-black dark:border-white p-[10px] flex-wrap md:justify-between [@media(max-width:768px)]:justify-center">
      <Link to="/" className="mx-[30px] text-center header-title">
        <h1 className="font-mono">Vladimir Borovikov</h1>
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
            <li>
              {location.pathname === '/' ? (
                <a 
                  href="#projects"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
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
            <li>
              {location.pathname === '/' ? (
                <a 
                  href="#skills"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }, 0);
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
            <li>
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