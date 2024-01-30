export default function ContactUs() {
  return (
    <div className="contact-us flex flex-col items-center">
      <form className="text-2xl">
        <p className="mt-32"> Name</p>
        <input className="rounded-md mt-2 px-2" type="text"></input>
        <p className="mt-12">Subject</p>
        <input className="rounded-md mt-2 w-80 px-2" type="text"></input>
        <p className="mt-12">Message</p>
        <textarea
          className="rounded-md mt-2 w-96 leading-6 px-2"
          rows={3}
          type="text"
        ></textarea>
        <br />
        <button className="mt-12 ml-36 bg-white px-2 rounded-md">Submit</button>
      </form>
    </div>
  );
}
