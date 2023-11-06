import { myStack } from "../utils/data";
import StackItem from "../components/Project/StackItem";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-pastelBlue-primary py-16 px-1 overflow-auto">
      <section className="w-full md:w-3/4 lg:w-1/2 max-w-[1240px] rounded-lg p-10 mx-auto bg-slate-900 text-dirtyWhite realisticshadow">
        <h1 className="font-sarina text-center text-3xl md:text-6xl mb-5">
          About Me
        </h1>
        <p className="text-lg proximanova mb-5"></p>
        <p className="text-lg font-proximanova">
          Hi, my name is Justin. I'm a 22-year-old programmer from Serbia.
          Always trying to learn new stuff and get new experiences. For the past
          few years, I have been honing my web development skills. Started off
          in college in computer science during COVID pandemic, from which I
          dropped out after two years but still gained a lot of knowledge. After
          that, I learned HTML, CSS, and JavaScript, followed by React. I
          started building my own web pages and applications. Then I learned
          about Node.JS, SQL, NoSQL, and Docker. I struggled a little with
          deployment but learned a few things about AWS. To show all of these
          skills, I built this portfolio website, and that's where I'm
          currently at.
        </p>
        <h3 className="text-xl font-playfair-reg mt-3 ps-1">
          Technologies that I work with:
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
