import { useDarkMode } from "../context";
import { skills } from "../utils/data";

const Skills = () => {
  const { isDark } = useDarkMode();

  return (
    <section id="skills">
      <h2 className="mx-[50px] my-[10px] text-center text-[24px]">Skills</h2>
      <div className="flex flex-wrap justify-around border-b border-black p-[10px] dark:border-white">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.icon}
            alt={skill.alt}
            className={`h-[25px] ${isDark ? "invert" : ""}`}
            title={skill.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
