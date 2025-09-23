import React from 'react';
import profileImage from '../assets/images/vladimir_borovikov_with_laptop.png';

const About: React.FC = () => {
  return (
    <section id="about-me" className="mb-8">
      <h2 className="text-center m-4 mx-12">About Me</h2>
      <div className="flex justify-between items-center border-b border-black dark:border-white p-2.5 max-md:flex-wrap max-md:justify-center">
        <p className="m-4 mx-12">
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
          className="h-80"
        />
      </div>
    </section>
  );
};

export default About;