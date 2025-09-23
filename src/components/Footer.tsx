import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center border-b border-black dark:border-white p-4">
      <p>
        From Russia with <span className="text-red-500">♥</span>
      </p>
    </footer>
  );
};

export default Footer;