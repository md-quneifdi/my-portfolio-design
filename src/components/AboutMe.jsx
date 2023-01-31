import React from "react";
import content from "../Content";

const AboutMe = () => {
  const { aboutMe } = content;
  return (
    <section id="About">
      <div className="md:container py-6 lg:py-14 px-5 md:px-8 lg:px-16 mx-auto">
        <header>
          <h1 className="text-3xl md:text-6xl text-slate-300/60 font-semibold">
            {aboutMe.title}
          </h1>
        </header>
        <div className="content flex flex-col md:flex-row justify-start items-center my-8">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-5xl text-amber-300 mb-8">
              {aboutMe.name}
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-slate-500 mb-5 max-w-[470px] leading-10">
              {aboutMe.text}
            </p>
          </div>
          <div className="flex-1 md:ml-5 md:mt-0 mt-5  mx-auto md:p-10">
            <img src={aboutMe.img} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
