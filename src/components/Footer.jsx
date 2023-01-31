import React, { createElement } from "react";
import content from "../Content";

const Footer = () => {
  const { footer } = content;
  return (
    <div>
      <div className="md:container px-5 py-3 md:px-8 lg:px-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 border-t-2 border-slate-500">
          <p className="mt-5 md:mt-0">
            {footer.copyRight}{" "}
            <span className=" text-[20px] text-amber-500 font-medium">
              {footer.span}
            </span>
          </p>
          <ul className=" flex-1 flex justify-end items-center mt-5 md:mt-0">
            {footer.icons.map((item, i) => (
              <li
                key={item.id}
                className="mr-10 last:mr-0 text-lg md:cursor-pointer"
              >
                <a href={item.link}>{createElement(item.icon)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
