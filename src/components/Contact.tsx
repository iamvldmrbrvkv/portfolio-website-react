import { contactLinks } from "../utils/data";
import contactImage from "../assets/images/vladimir_borovkov_tells_his_secrets.png";
import { useDarkMode } from "../context";

const Contact = () => {
  const { isDark } = useDarkMode();

  return (
    <section id="contact">
      <h2 className="mx-[50px] my-[10px] text-center text-[24px]">Contact</h2>
      <img
        src={contactImage}
        alt="Vladimir Borovikov tells his secrets Memoji"
        className="mx-auto my-0 block h-[350px]"
      />
      <div className="flex flex-wrap justify-around border-b border-black p-[10px] dark:border-white">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={contact.icon}
              alt={contact.alt}
              className={`h-[25px] ${isDark ? "invert" : ""}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
