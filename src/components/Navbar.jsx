import React, { useState } from "react";
import content from "../Content";
import { BiMenuAltRight } from "react-icons/bi";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {
  const { nav } = content;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <nav className="md:container px-6 md:px-8 lg:px-16 mx-auto flex items-center py-8 md:py-11">
        <div>
          <h1 className="uppercase text-2xl lg:text-3xl text-shadow">
            md-quneifdi
          </h1>
        </div>
        <ul className="flex-1 md:flex justify-end list-decimal hidden">
          {nav.map((item, i) => (
            <li
              key={item.id}
              className="mr-10 hover:text-amber-300 cursor-pointer last:mr-0"
            >
              <a href={item.link} className="decoration-slice">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <div className="mobile-menu flex-1 flex justify-end md:hidden relative">
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="h-10 cursor-pointer"
          >
            {toggle ? (
              <RiMenuFoldLine className="w-full h-full" />
            ) : (
              <BiMenuAltRight className="w-full h-full" />
            )}
          </span>
          <div
            className={`flex justify-center bg-gradient-to-r from-zinc-500 md:from-zinc-700
           absolute z-[100] top-11 right-1 border-2 border-slate-500 min-w-[270px] rounded-lg
           ${toggle ? "flex" : "hidden"}`}
          >
            <ul className="flex-1 flex  flex-col justify-center text-center">
              {nav.map((item, i) => (
                <li
                  key={item.id}
                  className=" hover:text-amber-300 cursor-pointer mb-5 first:mt-5"
                >
                  <a href={item.href} className="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
