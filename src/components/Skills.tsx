import React from 'react';
import { skills } from '../utils/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-center m-4 mx-12">Skills</h2>
      <div className="flex justify-around border-b border-black dark:border-white p-2.5 flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-2xl mb-2">{skill.icon}</span>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;