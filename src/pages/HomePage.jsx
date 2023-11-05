import MainLink from "../components/MainLink/MainLink";
import src from "../assets/bg3.jpg";

const HomePage = () => {
  return (
    <div
      className="w-full text-6xl grid grid-cols-2 bg-white min-h-screen"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      d
      <div className="flex flex-col justify-items-stretch me-16">
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
