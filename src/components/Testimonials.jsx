import React from "react";
import content from "../Content";

const Testimonials = () => {
  const { testimonials } = content;
  return (
    <section id="contact">
      <div className="md:container py-6 lg:py-16 px-5 md:px-8 lg:px-16 mx-auto">
        <header className="pb-8">
          <h1 className="text-3xl md:text-6xl text-slate-300/60 font-semibold">
            {testimonials.title}
          </h1>
        </header>

        {/* testimonials boxes container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-5 gap-y-8">
          {testimonials.testimonial.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col border-2 border-slate-600 p-5"
            >
              <header className="flex justify-start itmes-center py-5">
                <img
                  src={item.avatar}
                  alt="..."
                  className="w-20 h-20 rounded-full ring-2 ring-white align-middle"
                />
                <div className="ml-4 pt-5">
                  <h2 className="font-medium text-xl text-amber-500">
                    {item.name}
                  </h2>
                  <p className="font-normal text-lg text-slate-300">
                    {item.work}
                  </p>
                </div>
              </header>
              <div className="text-slate-400">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
