import React, { createElement } from "react";
import content from "../Content";

const Projects = () => {
  const { projects } = content;
  return (
    <section id="projects">
      <div className="md:container py-6 lg:py-16 px-5 md:px-8 lg:px-16 mx-auto">
        <header className="pb-8">
          <h1 className="text-3xl md:text-6xl text-slate-300/60 font-semibold">
            {projects.title}
          </h1>
        </header>
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 my-10">
          {projects.project.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col shadow-lg shadow-black "
            >
              <div className="img flex-1 flex ">
                <img src={item.pImage} alt="..." className="w-full h-[270px]" />
              </div>
              <div className="icon-links flex-1 flex justify-between items-center p-3 bg-white">
                <div className="text-center text-lg text-blue-500 hover:text-blue-300 cursor-pointer grid place-items-center">
                  <span>{createElement(item.icon1)}</span>
                  <p>code</p>
                </div>
                <div className="text-center text-lg text-blue-500 hover:text-blue-300 cursor-pointer grid place-items-center">
                  <span className="text-center ">
                    {createElement(item.icon2)}
                  </span>
                  <p>view</p>
                </div>
              </div>
              <div className="py-2 pl-2 bg-amber-500 cursor-pointer">
                <p>{item.pName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
