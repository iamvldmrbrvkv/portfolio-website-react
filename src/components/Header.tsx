import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../context";
import { useEffect } from "react";

const Header = () => {
  const { isDark, themeMode, toggleThemeMode } = useDarkMode();
  const location = useLocation();

  const updateHeaderHeight = () => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height + 10}px`,
      );
    }
  };

  useEffect(() => {
    updateHeaderHeight();

    const handleResize = () => updateHeaderHeight();
    window.addEventListener("resize", handleResize);

    const timeout = setTimeout(updateHeaderHeight, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [themeMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight - 10;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case "light":
        return { icon: "☀️", label: "Light theme (click for dark)" };
      case "dark":
        return { icon: "🌙", label: "Dark theme (click for system)" };
      case "system":
        return {
          icon: "💻",
          label: `System theme: ${isDark ? "dark" : "light"} (click for light)`,
        };
      default:
        return { icon: "☀️", label: "Light theme" };
    }
  };

  const { icon, label } = getThemeIcon();

  return (
    <header className="fixed top-0 right-0 left-0 z-1 flex w-full flex-wrap items-center justify-between border-t border-b border-black bg-white p-[10px] max-md:justify-center md:justify-between dark:border-white dark:bg-[rgb(32,33,36)]">
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mx-[30px] text-center text-black no-underline visited:text-black hover:no-underline focus:no-underline active:no-underline dark:text-[#eee] dark:visited:text-[#eee]"
      >
        <h1 className="text-[32px]">Vladimir Borovikov</h1>
      </Link>
      <nav className="mr-[30px] max-md:mx-auto">
        <div className="flex flex-wrap items-center justify-around">
          <ul className="flex list-none gap-x-[9px]">
            <li>
              {location.pathname === "/" ? (
                <a
                  href="#about-me"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about-me");
                  }}
                >
                  About Me
                </a>
              ) : (
                <Link to="/#about-me">About Me</Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
              ) : (
                <Link to="/#projects">Projects</Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
              ) : (
                <Link to="/#skills">Skills</Link>
              )}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            onClick={toggleThemeMode}
            className="ml-[10px] cursor-pointer border-none bg-transparent text-[25px] leading-none"
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
