import { Link } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
import NavBar from "../components/NavBar/NavBar";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-pastelOrange-secondary flex justify-center items-center text-slate-800">
      <div class="w-1/2 mx-auto bg-white p-10 rounded-lg realisticshadow font-proximanova">
        <h1 className="text-5xl mb-2 text-center font-sarina">Contact</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/ilicjustin@gmail.com"
          method="POST"
        >
          <div className="w-full">
            <div>
              <div className="flex flex-col mb-4 font-proximanova">
                <label className="font-playfair-reg ms-1">Full Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-md outline-none text-lg p-1 border border-pastelOrange-complementarySec"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-playfair-reg ms-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md outline-none text-lg p-1 border border-pastelOrange-complementarySec"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-playfair-reg ms-1">Message:</label>
            <textarea
              placeholder="Your Message"
              className="w-full rounded-md outline-none text-lg p-1 border border-pastelOrange-complementarySec"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2 font-playfair-reg mx-auto flex justify-center outline-none text-lg p-1 rounded-full bg-pastelOrange-complementarySec"
          >
            Send Email <VscSend className="m-1.5" />
          </button>
        </form>
      </div>
      <NavBar />
    </div>
  );
};

export default Contact;
