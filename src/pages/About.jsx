import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-pastelBlue-secondary text-6xl overflow-auto">
      <p>About</p>
      <Link to={"/"}>Idi Nazad</Link>
      <section className="w-1/2 max-w-[1240px] rounded-xl p-10 mx-auto bg-dirtyWhite realisticshadow">
        <h1>About Me</h1>
        <p className="text-lg">
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