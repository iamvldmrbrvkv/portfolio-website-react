import profileImage from "../assets/images/vladimir_borovikov_with_laptop.png";

const About = () => {
  return (
    <section id="about-me">
      <h2 className="mx-[50px] my-[10px] text-center text-[24px]">About Me</h2>
      <div className="flex items-center justify-between border-b border-black p-[10px] max-md:flex-wrap max-md:justify-center dark:border-white">
        <p className="mx-[50px] my-[10px]">
          Hi, I'm Vladimir Borovikov, a frontend engineer. In the past I was a
          musician and art worker, but decided to become a software engineer. In
          my spare time I like walking in nature, playing video games and
          watching coding dreams when I'm sleeping.
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
