import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-pastelOrange-secondary">
      <div className="text-6xl ">
        <Link to={"/"}>Go Back</Link>
      </div>
      <div class="container">
        <h1>FormSubmit Demo</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/justinilic@email.com"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea
              placeholder="Your Message"
              class="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-dark btn-block">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
