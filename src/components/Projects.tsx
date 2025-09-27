import { projects } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="mx-[50px] my-[10px] text-center text-[24px]">Projects</h2>
      <div className="border-b border-black p-[10px] dark:border-white">
        <p className="mx-[50px] my-[10px]">
          You can find all of my projects on{" "}
          <a
            href="https://github.com/iamvldmrbrvkv"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub.
          </a>
        </p>
        <br />
        {projects.map((project, index) => (
          <div key={index}>
            <p className="mx-[50px] my-[10px]">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>{" "}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                (GitHub)
              </a>
              {" - "}
              {project.description}
            </p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
