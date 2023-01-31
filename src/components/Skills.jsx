import React, { createElement } from "react";
import content from "../Content";

const Skills = () => {
  const { skills } = content;
  return (
    <section id="skills">
      <div className="md:container py-6 lg:py-16 px-5 md:px-8 lg:px-16 mx-auto ">
        <header>
          <h1 className="text-3xl md:text-6xl text-slate-300/60 font-semibold">
            {skills.title}
          </h1>
        </header>
        <div className="flex justify-center items-center content-center flex-wrap gap-10 mt-5">
          {skills.skills.map((skill, i) => (
            <div
              key={skill.id}
              className="flex-1 flex flex-col justify-center items-center text-center mt-5 hover:text-zinc-300"
            >
              <span className="text-green-400 text-6xl">
                {createElement(skill.icon)}
              </span>
              <h2 className="text-2xl md:text-3xl text-slate-500 font-semibold whitespace-nowrap mt-5">
                {skill.text}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
