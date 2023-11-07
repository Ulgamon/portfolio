import { myStack } from "../utils/data";
import StackItem from "../components/Project/StackItem";
import bg from "../assets/bg.jpg";

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-pastelBlue-primary py-16 px-1 overflow-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <section className="w-full md:w-3/4 lg:w-1/2 max-w-[1240px] rounded-lg p-10 mx-auto bg-slate-900 text-dirtyWhite realisticshadow">
        <h1 className="font-sarina text-center text-3xl md:text-6xl mb-5">
          About Me
        </h1>
        <p className="text-lg proximanova mb-5"></p>
        <p className="text-lg font-proximanova">
          Hello, I'm Justin. I'm a Serbian programmer who is 22 years old. I'm
          constantly looking to expand my knowledge and experience. I have been
          honing my web programming skills for the past couple of years. I began
          by studying front-end technologies including HTML, CSS, JavaScript,
          and React. Next, I studied SQL, NoSQL, Node.JS, and Docker for the
          backend. I also acquired knowledge about AWS deployment. To
          demonstrate these abilities to you, I created this portfolio website,
          and that's where I am right now.
        </p>
        <h3 className="text-xl font-playfair-reg mt-3 ps-1">
          Technologies that I'm using:
        </h3>
        <div className="w-fit flex flex-wrap text-lg rounded-lg">
          {myStack.map((el) => (
            <StackItem item={el} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default About;
