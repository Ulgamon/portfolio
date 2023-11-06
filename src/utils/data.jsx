import gazdinstvo from "../assets/gazdinstvo.png";
import cybertruck from "../assets/cybertruck.png";
import firewatch from "../assets/firewatch.png";
import portfolio from "../assets/portfolio.png";
import { DiMysql } from "react-icons/di";
import { LuPackage } from "react-icons/lu";
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
  url: "https://github.com/",
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
  iconEl: <LuPackage />,
};
const lottieReact = {
  title: "lottie-react",
  url: "https://lottiereact.com/",
  iconEl: <LuPackage />,
};
const reactRouter = {
  title: "react-router",
  url: "https://reactrouter.com/en/main",
  iconEl: <LuPackage />,
};
const reactSpring = {
  title: "@react-spring",
  url: "https://www.react-spring.dev/",
  iconEl: <LuPackage />,
};

// Backend NodeJS
const express = {
  title: "express",
  url: "https://expressjs.com/",
  iconEl: <LuPackage />,
};
const bcrypt = {
  title: "bcrypt",
  url: "https://www.npmjs.com/package/bcryptjs",
  iconEl: <LuPackage />,
};
const multer = {
  title: "multer",
  url: "https://www.npmjs.com/package/multer",
  iconEl: <LuPackage />,
};
const bodyparser = {
  title: "body-parser",
  url: "https://www.npmjs.com/package/body-parser",
  iconEl: <LuPackage />,
};
const mongoose = {
  title: "mongoose",
  url: "https://mongoosejs.com/",
  iconEl: <LuPackage />,
};
const expressvalidator = {
  title: "express-validator",
  url: "https://www.npmjs.com/package/express-validator",
  iconEl: <LuPackage />,
};
const jsonwebtoken = {
  title: "jsonwebtoken",
  url: "https://www.npmjs.com/package/jsonwebtoken",
  iconEl: <LuPackage />,
};
const awssdk = {
  title: "@aws-sdk",
  url: "https://aws.amazon.com/sdk-for-javascript/",
  iconEl: <LuPackage />,
};

export const projectData = [
  {
    id: 0,
    title: "Gazdinstvo Damjan",
    shortDescription: "Full stack e-commerce project.",
    longDescription: `My most significant volunteer project. It's a full-stack web e-commerce application for selling honey. 
It uses Node.js and Express for server-side logic, React for front-end, and MongoDB database. I was responsible
 for its design and creation. It supports features like authentication (log in, sign up, account verification, 
  password reset), cart (adding, removing, updating, reading), and orders (ordering items, generating PDF invoices,
     and sending invoices via email).The React application was deployed on AWS S3 Bucket with CloudFront as a CDN and the Node.js application was deployed on an EC2 instance.
      The task was quite challenging, but I gained a lot of knowledge from it. 
     I'm glad I took it. And if you ever feel bored of it, you can always click on the bee and take it for a fly with the arrow keys. `,
    link: {
      url: "https://gazdinstvodamjan.com",
      title: "Gazdinstvo Damjan",
    },
    imagePath: gazdinstvo,
    stack: [
      aws,
      awssdk,
      Html,
      CSS,
      tailwindcss,
      mongoDB,
      mongoose,
      NodeJS,
      express,
      React,
      vite,
      bcrypt,
      multer,
      bodyparser,
      expressvalidator,
      jsonwebtoken,
      reactQuery,
      reactRouter,
      lottieReact,
    ],
  },
  {
    id: 1,
    title: "Tesla Cybertruck",
    shortDescription:
      "I really liked the design and the animations of the site.",
    longDescription: `This project is a recreation of a well-known Tesla Cybertruck website. The idea was to copy 
    this site to demonstrate that I can do my job using the given design. The components and animations were
     all built by me, and they can be found on my Github repository at the link above. The application uses 
     React (Vite) for building and managing components. I used Tailwind CSS for styling, @react-spring library for physics-based animations.
      The project was deployed on AWS. I uploaded Dist folder to AWS S3 bucket and used CloudFront for distributing 
      it with low latency, as it uses regional edge locations and edge locations to cache data very close to the users.`,
    link: {
      url: "https://d1q42h8kfu47gl.cloudfront.net",
      title: "Tesla Cybertruck",
    },
    imagePath: cybertruck,
    stack: [aws, Html, CSS, tailwindcss, React, vite, reactSpring],
    githubLink: {
      url: "https://github.com/Ulgamon/cybertruck",
      title: "Tesla Cybertruck",
    },
  },
  {
    id: 2,
    title: "Firewatch",
    shortDescription:
      "I really liked the design and the animations of the site.",
    longDescription: `Firewatch. Their website is awesome and I really liked it. They use parallax effect to create the 
    illusion of distance as the elements move at different speeds when scrolling e.g., closest element moves much faster
     than the most distant object. I used React for building this project and wanted to show that I can work from design. 
     The project was deployed on AWS using CloudFront CDN for content delivery. I used @react-spring for Parallax animation.
      They didn't use physics-based animation, and I find mine better because it feels more natural.`,
    link: {
      url: "https://d2aiq123gknzes.cloudfront.net/",
      title: "Firewatch",
    },

    imagePath: firewatch,
    stack: [aws, Html, CSS, tailwindcss, React, vite, reactSpring],
    githubLink: {
      url: "https://github.com/Ulgamon/firewatch",
      title: "Firewatch",
    },
  },
  {
    id: 3,
    title: "Portfolio",
    shortDescription:
      "This is the site you are currently on. I hope you like it :).",
    longDescription: `I built this site to showcase my projects and skills.`,
    link: {
      url: "https://localhost:5173",
      title: "Portfolio",
    },
    imagePath: portfolio,
    stack: [aws, Html, CSS, tailwindcss, React, vite, reactSpring, reactRouter],
    githubLink: {
      url: "https://github.com/Ulgamon/portfolio",
      title: "Portfolio",
    },
  },
];

export const myStack = [
  aws,
  Html,
  CSS,
  JavaScript,
  NodeJS,
  React,
  mongoDB,
  MySQL,
  github,
  docker,
];
