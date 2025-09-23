import React from 'react';
import profileImage from '../assets/images/vladimir_borovikov_with_laptop.png';

const About: React.FC = () => {
  return (
    <section id="about-me">
      <h2 className="text-center my-[10px] mx-[50px]">About Me</h2>
      <div className="flex justify-between items-center border-b border-black dark:border-white p-[10px] max-md:flex-wrap max-md:justify-center">
        <p className="my-[10px] mx-[50px]">
          Hi, I'm Vladimir Borovikov, a full-stack engineering student at{' '}
          <a 
            href="https://www.codecademy.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black dark:text-white underline decoration-red-500 hover:no-underline visited:text-red-500 visited:decoration-black dark:visited:text-blue-400 dark:visited:decoration-white"
          >
            Codecademy.
          </a>{' '}
          In the past I was a musician and art worker, but now I decided become a software engineer. 
          In my spare time I like walking in nature, playing video games and watching coding dreams when I'm sleeping.
        </p>
        <img 
          src={profileImage} 
          alt="Vladimir Borovikov with laptop Memoji" 
          className="h-[350px]"
        />
      </div>
    </section>
  );
};

export default About;