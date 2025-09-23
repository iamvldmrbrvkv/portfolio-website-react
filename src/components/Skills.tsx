import React from 'react';
import { skills } from '../utils/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-center m-4 mx-12">Skills</h2>
      <div className="flex justify-around border-b border-black dark:border-white p-2.5 flex-wrap gap-4">
        {skills.map((skill, index) => (
          <img 
            key={index}
            src={skill.icon} 
            alt={skill.alt}
            className="h-[25px] dark:invert"
            title={skill.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;