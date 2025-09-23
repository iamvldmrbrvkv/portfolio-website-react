import React from 'react';
import { projects } from '../utils/data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-center m-4 mx-12">Projects</h2>
      <div className="border-b border-black dark:border-white p-2.5">
        <p className="m-4 mx-12">
          You can find all of my projects on{' '}
          <a 
            href="https://github.com/iamvldmrbrvkv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white"
          >
            GitHub.
          </a>
        </p>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <p className="m-4 mx-12">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white font-bold"
              >
                {project.title}
              </a>
              {' - '}
              {project.description.includes('Luhn algoritm') ? (
                <>
                  JavaScript project with{' '}
                  <a 
                    href="https://en.wikipedia.org/wiki/Luhn_algorithm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white"
                  >
                    Luhn algoritm
                  </a>
                  {' '}that makes credit cards verification.
                </>
              ) : project.description.includes('Spotify API') ? (
                <>
                  The app created using knowledge of React components, passing state, and requests with the{' '}
                  <a 
                    href="https://developer.spotify.com/documentation/web-api" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white"
                  >
                    Spotify API
                  </a>
                  {' '}to build a website that allows users to search the{' '}
                  <a 
                    href="https://open.spotify.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white"
                  >
                    Spotify library
                  </a>
                  , create a custom playlist, then save it to their Spotify account.
                </>
              ) : (
                project.description
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;