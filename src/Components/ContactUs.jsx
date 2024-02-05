import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6qlhlm6",
        "template_7tc4uae",
        form.current,
        "2XqmJch-BuEi-PyFI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-us flex flex-col items-center">
      <form className="text-2xl" ref={form} onSubmit={sendEmail}>
        <p className="mt-32"> Name</p>
        <input
          className="rounded-md mt-2 px-2"
          type="text"
          name="user_name"
        ></input>
        <p className="mt-12">Email</p>
        <input
          className="rounded-md mt-2 px-2"
          type="text"
          name="user_email"
        ></input>
        <p className="mt-12">Subject</p>
        <input
          className="rounded-md mt-2 w-80 px-2"
          type="text"
          name="subject"
        ></input>

        <p className="mt-12">Message</p>
        <textarea
          className="rounded-md mt-2 w-96 leading-6 px-2"
          rows={3}
          type="text"
          name="message"
        ></textarea>
        <br />
        <button
          className="mt-12 ml-36 bg-white px-2 rounded-md"
          type="submit"
          value="Send"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
