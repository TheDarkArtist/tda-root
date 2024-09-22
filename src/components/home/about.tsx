import React from "react";

const About = () => {
  return (
    <section className="mt-2 mb-10 sm:px-0">
      <Line text="Bachelor at Technology with majors in Computer Science & Technology" />
      <Line text="Love Linux and working with linux based enviroments, I use Arch BTW" />
    </section>
  );
};

export default About;

const Line = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2 items-start md:items-center">
      <span className="text-sky-600 text-2xl font-black">&gt;</span>
      <p>{text}</p>
    </div>
  );
};
