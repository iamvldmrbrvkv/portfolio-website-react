import { contactLinks } from '../utils/data';
import contactImage from '../assets/images/vladimir_borovkov_tells_his_secrets.png';
import { useDarkMode } from '../context';

const Contact = () => {
  const { isDark } = useDarkMode();
  
  return (
    <section id="contact">
      <h2 className="text-center my-[10px] mx-[50px]">Contact</h2>
      <img 
        src={contactImage} 
        alt="Vladimir Borovikov tells his secrets Memoji" 
        className="h-[350px] block mx-auto my-0"
      />
      <div className="flex justify-around border-b border-black dark:border-white p-[10px] flex-wrap">
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
              className={`h-[25px] ${isDark ? 'invert' : ''}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;