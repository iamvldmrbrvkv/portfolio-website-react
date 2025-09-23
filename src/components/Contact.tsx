import React from 'react';
import { contactLinks } from '../utils/data';
import contactImage from '../assets/images/vladimir_borovkov_tells_his_secrets.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-center m-4 mx-12">Contact</h2>
      <img 
        src={contactImage} 
        alt="Vladimir Borovikov tells his secrets Memoji" 
        className="h-80 block mx-auto"
      />
      <div className="flex justify-around border-b border-black dark:border-white p-2.5 flex-wrap gap-4">
        {contactLinks.map((contact, index) => (
          <a 
            key={index}
            href={contact.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={contact.icon} 
              alt={contact.alt}
              className="h-[25px] dark:invert"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;