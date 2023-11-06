import MainLink from "../components/MainLink/MainLink";
import src from "../assets/bg3.jpg";

const HomePage = () => {
  return (
    <div
      className="w-full py-16 bg-white px-1 min-h-screen"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2 max-w-[800px] rounded-lg bg-white my-5">
        <h1 className="text-4xl md:text-6xl font-sarina text-slate-900 py-10 px-5">
          Hi, I'm Justin - Web Developer
        </h1>
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
