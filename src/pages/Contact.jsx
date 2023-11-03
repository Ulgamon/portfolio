import { Link } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
import NavBar from "../components/NavBar/NavBar";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-pastelOrange-secondary text-slate-800">

      <div class="w-1/2 mx-auto bg-white p-10 rounded-lg realisticshadow">
        <form
          target="_blank"
          action="https://formsubmit.co/ilicjustin@gmail.com"
          method="POST"
        >
          <div className="w-full">
            <div class="form-row">
              <div className="flex flex-col mb-2">
                <label className="text-sm">Full Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded outline-none text-lg p-1 shadow-inner border border-pastelOrange-complementarySec"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-sm">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded outline-none text-lg p-1 border shadow-inner border-pastelOrange-complementarySec"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm">Message:</label>
            <textarea
              placeholder="Your Message"
              className="w-full rounded outline-none text-lg p-1 border shadow-inner border-pastelOrange-complementarySec"
              name="message"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center outline-none text-lg p-1 rounded-full bg-pastelOrange-complementarySec"
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
