import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center border-b border-black dark:border-white">
      <p className="my-[10px] mx-[50px]">
        From Russia with <span className="text-red-500">♥</span>
      </p>
    </footer>
  );
};

export default Footer;