import React from "react";
import content from "../Content";
import Button from "./Button";

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home" className="h-[85vh] ">
      <div
        className="md:container py-6 lg:py-14 px-5 md:px-8 lg:px-16 mx-auto 
      flex lg:flex-row flex-col-reverse items-center relative"
      >
        <div
          className="title py-5 md:py-10 flex-1 flex flex-col justify-center 
        lg:justify-start text-center lg:text-left z-10"
        >
          <h3 className="text-xl md:text-3xl font-semibold">{hero.subTitle}</h3>
          <h1 className="text-3xl md:text-6xl font-semibold mt-5 md:mt-10 text-amber-500">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl font-normal mt-5 md:mt-10">
            {hero.para}{" "}
            <span className="text-amber-500 underline underline-offset-8 decoration-amber-400">
              {hero.subPara}
            </span>
          </p>
          <Button />
        </div>
        <div className="p-image flex-1 ml-10 p-10 flex justify-center items-center">
          <img
            className="border-4 border-amber-500 md:max-w-[470px] max-w-[350px] rounded-full
             max-h-[270px] lg:max-h-[370px] shadow-xl shadow-amber-300"
            src={hero.img}
            alt="..."
          />
        </div>
        {/* the position absolute will not work if the div is empty
         unless you use the z-index then it will appear in the screen */}
        <div
          className="absolute z-0 -bottom-14 left-0 w-[30%] h-[30p%] bg-[#414144]
          box_shadow"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
