import { projects } from '../utils/data';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-center my-[10px] mx-[50px]">Projects</h2>
      <div className="border-b border-black dark:border-white p-[10px]">
        <p className="my-[10px] mx-[50px]">
          You can find all of my projects on{' '}
          <a 
            href="https://github.com/iamvldmrbrvkv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono"
          >
            GitHub.
          </a>
        </p>
        <br />
        {projects.map((project, index) => (
          <div key={index}>
            <p className="my-[10px] mx-[50px]">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono"
              >
                {project.title}
              </a>
              {' '}
              <a 
                href={project.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono"
              >
                (GitHub)
              </a>
              {' - '}{project.description}
            </p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;