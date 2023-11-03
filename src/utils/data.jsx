import gazdinstvo from "../assets/gazdinstvo.png";
import { WiCloud } from "react-icons/wi";
import { VscDatabase } from "react-icons/vsc";

// Technologies
const aws = {
  title: "AWS",
  url: "https://aws.amazon.com",
  iconEl: <WiCloud />,
};

const mongoDB = {
  title: "MongoDB",
  url: "https://www.mongodb.com/",
  iconEl: <VscDatabase />,
};

const SQL = {
  title: "SQL",
  url: "",
  iconEl: <VscDatabase />,
};

// Packages
const reactQuery = {
  title: "React Query",
  url: "https://tanstack.com/query/v3/",
  iconEl: <VscDatabase />,
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
