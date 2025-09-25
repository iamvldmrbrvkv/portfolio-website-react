import profileImage from '../assets/images/vladimir_borovikov_with_laptop.png';

const About = () => {
  return (
    <section id="about-me">
      <h2 className="text-[24px] text-center my-[10px] mx-[50px]">About Me</h2>
      <div className="flex justify-between items-center border-b border-black dark:border-white p-[10px] max-md:flex-wrap max-md:justify-center">
        <p className="my-[10px] mx-[50px]">
          Hi, I'm Vladimir Borovikov, a frontend engineer. 
          In the past I was a musician and art worker, but decided to become a software engineer. 
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