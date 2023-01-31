import React from "react";
import content from "../Content";
import sectionImg from "../assets/images/AboutMe/drag.svg";

const ContactMe = () => {
  const { contact } = content;
  return (
    <section id="contact">
      <div className="md:container py-6 lg:py-16 px-5 md:px-8 lg:px-16 mx-auto">
        <header className="pb-8">
          <h1 className="text-3xl md:text-6xl text-slate-300/60 font-semibold">
            {contact.title}
          </h1>
        </header>
        <div className="flex flex-col-reverse lg:flex-row justify-start lg:items-center">
          <div className="form flex-1">
            <form>
              <div className="my-8 flex flex-col">
                <label htmlFor="name" className="text-xl md:font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="your name"
                  className="p-3 bg-transparent border-b-4 border-slate-500 focus:outline-none shadow-md shadow-zinc-900"
                  required
                />
              </div>
              <div className="my-8 flex flex-col">
                <label htmlFor="email" className="text-xl md:only:font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your email"
                  className="p-3 bg-transparent border-b-4 border-slate-500 focus:outline-none shadow-md shadow-zinc-900"
                  required
                />
              </div>
              <div className="my-5 flex flex-col">
                <label htmlFor="message" className="text-xl md:font-medium">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  placeholder="your message"
                  className="p-3 bg-transparent shadow-md shadow-zinc-900 border-b-4
                   border-slate-500 max-h-44 focus:outline-none"
                  required
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-32 md:w-40 px-4 py-2 md:px-6 md:py-3 bg-amber-500 duration-300 
                  shadow-lg shadow-zinc-900 border-2 border-amber-500 hover:bg-zinc-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="sectionImg flex-1 grid place-items-center md:ml-10 mt-10 lg:mt-0">
            <img
              src={sectionImg}
              alt="..."
              className="w-full max-w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
