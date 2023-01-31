import person from "./assets/images/AboutMe/ghjkghg.webp";
import bgPerson from "./assets/images/AboutMe/about_bg.jpg";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { CgViewComfortable } from "react-icons/cg";
import { RiCodeView } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";

import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./assets/images/projects";

import {
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
} from "./assets/images/testimonials";

const content = {
  nav: [
    {
      id: 0,
      name: "Home",
      link: "#home",
    },
    {
      id: 1,
      name: "About",
      link: "#About",
    },
    {
      id: 2,
      name: "Skills",
      link: "#skills",
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ],
  hero: {
    subTitle: "Hi' I'm",
    title: "Mohammad Quneifdi",
    para: "Front-end Web Developer ||",
    subPara: " React.js",
    img: person,
  },
  skills: {
    title: "Skills",
    skills: [
      {
        id: 0,
        icon: AiOutlineHtml5,
        text: "html",
      },
      {
        id: 1,
        icon: SiCss3,
        text: "css",
      },
      {
        id: 2,
        icon: TbBrandJavascript,
        text: "javascript",
      },
      {
        id: 3,
        icon: GrReactjs,
        text: "react.js",
      },
      {
        id: 4,
        icon: SiTailwindcss,
        text: "Tailwindcss",
      },
      {
        id: 5,
        icon: FaGithubSquare,
        text: "git & github",
      },
    ],
  },
  aboutMe: {
    title: "About Me",
    name: "Mohammad Quneifdi",
    text: `my name is Mohammad quneifdi I'm selfTought Front End Developer lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, natus
      sed tenetur iure minima vel voluptate culpa vero numquam assumenda iste
      amet consequatur magni, consectetur ipsa ut fugiat a laudantium.`,
    img: bgPerson,
  },
  projects: {
    title: "Projects",
    project: [
      {
        id: 0,
        pName: "Project Name",
        pImage: project1,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
      {
        id: 1,
        pName: "Project Name",
        pImage: project2,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
      {
        id: 2,
        pName: "Project Name",
        pImage: project3,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
      {
        id: 3,
        pName: "Project Name",
        pImage: project4,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
      {
        id: 4,
        pName: "Project Name",
        pImage: project5,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
      {
        id: 5,
        pName: "Project Name",
        pImage: project6,
        icon1: RiCodeView,
        link1: "...",
        icon2: CgViewComfortable,
        link2: "...",
      },
    ],
  },
  testimonials: {
    title: "Testimoinals",
    testimonial: [
      {
        id: 0,
        name: "Person Name",
        work: "Person Work",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        avatar: test1,
      },
      {
        id: 1,
        name: "Person Name",
        work: "Person Work",
        text: `tenetur iure minima vel voluptate culpa vero numquam assumenda iste
        amet consequatur magni`,
        avatar: test2,
      },
      {
        id: 2,
        name: "Person Name",
        work: "Person Work",
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        avatar: test3,
      },
      {
        id: 3,
        name: "Person Name",
        work: "Person Work",
        text: `Placeat, natus
        sed tenetur iure minima vel voluptate culpa vero numquam assumenda iste
        amet consequatur magni`,
        avatar: test4,
      },
      {
        id: 4,
        name: "Person Name",
        work: "Person Work",
        text: `Placeat,sed tenetur minima vel culpa vero numquam assumenda iste
        amet consequatur magni`,
        avatar: test5,
      },
      {
        id: 5,
        name: "Person Name",
        work: "Person Work",
        text: `sed tenetur iure minima vel voluptate culpa vero numquam assumenda iste
        amet consequatur magni`,
        avatar: test6,
      },
    ],
  },
  contact: {
    title: "Contact Me",
    contact: [
      {
        id: 0,
        icon: "...",
        link: "...",
      },
      {
        id: 1,
        icon: "...",
        link: "...",
      },
      {
        id: 2,
        icon: "...",
        link: "...",
      },
    ],
  },
  footer: {
    copyRight: `All @ copyrights Reseve for`,
    span: "mohammad quneifdi",
    icons: [
      {
        id: 0,
        icon: FiLinkedin,
        link: "...",
      },
      {
        id: 1,
        icon: BsInstagram,
        link: "...",
      },
      {
        id: 2,
        icon: TfiTwitter,
        link: "...",
      },
    ],
  },
};

export default content;
