import { VscSend } from "react-icons/vsc";
import { useState } from "react";
import useInput from "../hooks/useInput";

const URL = "https://formsubmit.co/ajax/ilicjustin@gmail.com";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    blurInputHandler: blurNameInputHandler,
    changeInputHandler: changeNameInputHandler,
    enteredValue: name,
    invalidInput: nameInvalidInput,
    valueIsValid: nameIsValid,
  } = useInput((value) => value.trim());

  const {
    blurInputHandler: blurEmailInputHandler,
    changeInputHandler: changeEmailInputHandler,
    enteredValue: email,
    invalidInput: emailInvalidInput,
    valueIsValid: emailIsValid,
  } = useInput((value) => value.trim());

  const {
    blurInputHandler: blurMessageInputHandler,
    changeInputHandler: changeMessageInputHandler,
    enteredValue: message,
    invalidInput: messageInvalidInput,
    valueIsValid: messageIsValid,
  } = useInput((value) => value.trim());

  const canSubmitForm = nameIsValid && emailIsValid && messageIsValid;
  const invalidInputClass = " border-red-500";

  const sendEmail = async (name, email, message) => {
    setIsLoading(true);
    try {
      const response = await fetch(URL, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name: name, email: email, message: message }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();
      console.log(data, "Data from inside the sendEmail function.");
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err);
      console.log(err);
    }
    setIsLoading(false);
  };

  const submitHandler = async (event) => {
    setError(null);
    event.preventDefault();
    if (!canSubmitForm) {
      blurNameInputHandler();
      blurEmailInputHandler();
      blurMessageInputHandler();
      return;
    }
    const data = await sendEmail(name, email, message);
    console.log(data, "from inside the submithandler", error);
    if (data?.success === "false") {
      setError("Something went wrong, please try again.");
      return;
    }

    setSuccessMessage("Thank you for your email :).");
  };

  return (
    <div className="w-full min-h-screen bg-pastelOrange-secondary px-1 flex justify-center items-center text-slate-800">
      <div className="w-full md:w-3/4 lg:w-1/2 max-w-[800px] mx-auto bg-white p-10 rounded-lg realisticshadow font-gotham">
        <h1 className="text-2xl sm:text-4xl mb-2 text-center font-sarina">Contact</h1>
        <form onSubmit={submitHandler}>
          <div className="w-full">
            <div>
              <div className="flex flex-col mb-4 font-gotham">
                <label className="font-playfair-reg ms-1">
                  Full Name:{" "}
                  <p className="inline text-red-500 font-gotham">
                    {nameInvalidInput ? "cannot leave empty" : ""}
                  </p>
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Your Name"
                  onChange={changeNameInputHandler}
                  onBlur={blurNameInputHandler}
                  className={
                    `w-full rounded-md outline-none text-lg p-1 border ` +
                    (nameInvalidInput
                      ? invalidInputClass
                      : " border-pastelOrange-complementarySec")
                  }
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-playfair-reg ms-1">
                  Email:{" "}
                  <p className="inline text-red-500 font-gotham">
                    {emailInvalidInput ? "cannot leave empty" : ""}
                  </p>
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={changeEmailInputHandler}
                  onBlur={blurEmailInputHandler}
                  className={
                    `w-full rounded-md outline-none text-lg p-1 border ` +
                    (emailInvalidInput
                      ? invalidInputClass
                      : " border-pastelOrange-complementarySec")
                  }
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-playfair-reg ms-1">
              Message:{" "}
              <p className="inline text-red-500 font-gotham">
                {messageInvalidInput ? "cannot leave empty" : ""}
              </p>
            </label>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={changeMessageInputHandler}
              onBlur={blurMessageInputHandler}
              className={
                `w-full rounded-md outline-none text-lg p-1 border ` +
                (messageInvalidInput
                  ? invalidInputClass
                  : " border-pastelOrange-complementarySec")
              }
              name="message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-5 py-2 font-playfair-reg mx-auto flex justify-center disabled:cursor-not-allowed disabled:opacity-75 outline-none text-lg p-1 rounded-full bg-pastelOrange-complementarySec"
          >
            Send Email{" "}
            <VscSend
              className={`m-1.5 ` + (isLoading ? " animate-bounce" : "")}
            />
          </button>
          {successMessage && (
            <p className="text-center text-green-500 text-xl">
              {successMessage}
            </p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
