import { Link } from "react-router-dom";
import bg from "../assets/bg2.png";

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-pastelBlue-secondary py-10 text-6xl overflow-auto"
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}
    >
      <section className="w-1/2 max-w-[1240px] rounded-xl p-10 mx-auto bg-slate-900 text-dirtyWhite realisticshadow">
        <h1 className="font-sarina text-center mb-5">About Me</h1>
        <p className="text-xl font-playfair-reg">Tojica</p>
        <p className="text-lg font-proximanova">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          aperiam ad. Recusandae distinctio voluptate soluta accusantium ea
          laborum in saepe repellat impedit dolorum ullam dicta sunt ipsam,
          debitis omnis aliquam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius mollitia magnam praesentium aperiam labore
          itaque accusamus modi similique ut, voluptatibus fugiat blanditiis
          tempora sequi deleniti quis earum hic corrupti unde. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Delectus maxime adipisci, quia
          quibusdam dignissimos repellat doloribus debitis accusantium earum
          dolor accusamus nulla hic nam maiores veniam tenetur nesciunt.
          Suscipit, labore. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Animi doloremque facere quia possimus id ipsa ab corrupti!
          Corrupti saepe asperiores earum. Totam reprehenderit omnis optio
          dolore temporibus laboriosam. Tenetur, id? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nostrum aperiam assumenda minima alias?
          Corporis hic molestias, eveniet optio temporibus nisi nemo, a in
          officia tempora iste laudantium labore cupiditate numquam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nemo, nostrum alias
          repellendus ipsa expedita eum hic animi porro adipisci in voluptas,
          sapiente et. Ipsum ad aliquam ducimus, facilis dicta accusantium?
        </p>
      </section>
    </div>
  );
};
export default About;
