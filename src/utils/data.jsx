import gazdinstvo from "../assets/gazdinstvo.png";
import { DiMysql } from "react-icons/di";
import { VscDatabase } from "react-icons/vsc";
import { PiPackageFill } from "react-icons/fi";
import { SiVite } from "react-icons/si";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoAws,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoDocker,
} from "react-icons/bi";

// Technologies
const aws = {
  title: "AWS",
  url: "https://aws.amazon.com",
  iconEl: <BiLogoAws />,
};

const mongoDB = {
  title: "MongoDB",
  url: "https://www.mongodb.com/",
  iconEl: <BiLogoMongodb />,
};

const MySQL = {
  title: "MySQL",
  url: "https://www.mysql.com/",
  iconEl: <DiMysql />,
};

const React = {
  title: "React",
  url: "https://react.dev/",
  iconEl: <BiLogoReact />,
};

const vite = {
  title: "Vite",
  url: "https://vitejs.dev/",
  iconEl: <SiVite />,
};

const NodeJS = {
  title: "Node.js",
  url: "https://nodejs.org/en",
  iconEl: <BiLogoNodejs />,
};

const Html = {
  title: "HTML",
  url: "https://en.wikipedia.org/wiki/HTML",
  iconEl: <BiLogoHtml5 />,
};

const CSS = {
  title: "CSS",
  url: "https://www.w3.org/Style/CSS/Overview.en.html",
  iconEl: <BiLogoCss3 />,
};

const JavaScript = {
  title: "JavaScript",
  url: "https://www.javascript.com/",
  iconEl: <BiLogoJavascript />,
};

const github = {
  title: "GitHub",
  url: "https://tailwindcss.com/",
  iconEl: <BiLogoGithub />,
};

const docker = {
  title: "Docker",
  url: "https://www.docker.com/",
  iconEl: <BiLogoDocker />,
};

const tailwindcss = {
  title: "tailwindcss",
  url: "https://tailwindcss.com/",
  iconEl: <BiLogoTailwindCss />,
};

// Packages

// Frontend React
const reactQuery = {
  title: "react-query",
  url: "https://tanstack.com/query/v3/",
  iconEl: <PiPackageFill />,
};
const lottieReact = {
  title: "littie-react",
  url: "https://lottiereact.com/",
  iconEl: <PiPackageFill />,
};
const reactRouter = {
  title: "react-router",
  url: "https://reactrouter.com/en/main",
  iconEl: <PiPackageFill />,
};
const reactSpring = {
  title: "@react-spring",
  url: "https://www.react-spring.dev/",
  iconEl: <PiPackageFill />,
};

// Backend NodeJS
const express = {
  title: "express",
  url: "https://expressjs.com/",
  iconEl: <PiPackageFill />,
};
const bcrypt = {
  title: "bcrypt",
  url: "https://www.npmjs.com/package/bcryptjs",
  iconEl: <PiPackageFill />,
};
const multer = {
  title: "multer",
  url: "https://www.npmjs.com/package/multer",
  iconEl: <PiPackageFill />,
};
const bodyparser = {
  title: "body-parser",
  url: "https://www.npmjs.com/package/body-parser",
  iconEl: <PiPackageFill />,
};
const mongoose = {
  title: "mongoose",
  url: "https://mongoosejs.com/",
  iconEl: <PiPackageFill />,
};
const expressvalidator = {
  title: "express-validator",
  url: "https://www.npmjs.com/package/bcryptjs",
  iconEl: <PiPackageFill />,
};
const jsonwebtoken = {
  title: "jsonwebtoken",
  url: "https://www.npmjs.com/package/jsonwebtoken",
  iconEl: <PiPackageFill />,
};
const awssdk = {
  title: "@aws-sdk",
  url: "https://aws.amazon.com/sdk-for-javascript/",
  iconEl: <PiPackageFill />,
};

export const projectData = [
  {
    id: "1",
    title: "Gazdinstvo Damjan",
    shortDescription: "Volunteer e-commerce project.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum deserunt mollitia sit? Dolores ad, voluptatibus soluta velit vitae molestiae sapiente, recusandae magnam quis autem laboriosam enim id fugiat suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, dicta esse. Saepe voluptatibus praesentium cum. Quibusdam, eum! Labore quibusdam dolor repellendus reprehenderit, soluta quod. Eum quis beatae repellat nemo. Nobis?",
    links: [
      {
        url: "https://gazdinstvodamjan.com",
        title: "Gazdinstvo Damjan",
      },
    ],
    imagePath: gazdinstvo,
  },
];
