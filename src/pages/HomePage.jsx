import MainLink from "../components/MainLink/MainLink";
import src from "../assets/bg1.jpg";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <div
      className="w-full pt-16 bg-white px-1 min-h-screen"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2 max-w-[800px] rounded-xl bg-white mb-5">
        <h1 className="text-2xl text-center leading-10 tracking-wide md:text-4xl font-bold font-playfair-reg text-gray-800 pt-5 px-5">
          Hi, I'm Justin <br /> a Web Developer
        </h1>
        <div className="w-full flex justify-center text-gray-800 pb-3">
          <a href="https://github.com/Ulgamon">
            <div className="text-2xl p-3 shadow1 m-1 bg-gray-100 rounded-full">
              <VscGithubInverted />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/justin-ili%C4%87-4ab412296/">
            <div className="text-2xl p-3 shadow1 m-1 bg-gray-100 rounded-full">
              <TiSocialLinkedin />
            </div>
          </a>
          <a href="https://twitter.com/JIlic11791">
            <div className="text-2xl p-3 shadow1 m-1 bg-gray-100 rounded-full">
              <VscTwitter />
            </div>
          </a>
          <a href="mailto://ilicjustin@gmail.com">
            <div className="text-2xl p-3 shadow1 m-1 bg-gray-100 rounded-full">
              <MdEmail />
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 max-w-[800px] mx-auto flex flex-col justify-items-stretch">
        <MainLink
          to={"/about"}
          title={"About Me"}
          className={"bg-pastelBlue-primary font-bold"}
        />
        <MainLink
          to={"/projects"}
          title={"Projects"}
          className={"bg-pastelGreen-primary font-bold"}
        />
        <MainLink
          to={"/contact"}
          title={"Contact"}
          className={"bg-pastelOrange-primary font-bold"}
        />
      </div>
    </div>
  );
};

export default HomePage;
