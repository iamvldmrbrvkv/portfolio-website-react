import { useDarkMode } from '../context';
import { skills } from '../utils/data';

const Skills = () => {
  const { isDark } = useDarkMode();
  
  return (
    <section id="skills">
      <h2 className="text-center my-[10px] mx-[50px]">Skills</h2>
      <div className="flex justify-around border-b border-black dark:border-white p-[10px] flex-wrap">
        {skills.map((skill, index) => (
          <img 
            key={index}
            src={skill.icon} 
            alt={skill.alt}
            className={`h-[25px] ${isDark ? 'invert' : ''}`}
            title={skill.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;