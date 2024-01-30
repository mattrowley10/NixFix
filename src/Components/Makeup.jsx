import MakeupDescription from "./MakeupDescription";
export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="background-makeup">
        <div className="makeup-content flex justify-start lg:pl-24 lg:pt-2 text-3xl lg:text-4xl">
          Permanent Makeup
        </div>
      </div>
      <div className="book-button-makeup flex justify-end text-4xl rounded-lg">
        <a
          className="book-makeup"
          href="https://www.vagaro.com/nixfixllc/services?fbclid=IwAR1UVsan_MT_4iLTZpheoLCeORB65hUMD6nwax51HWN3uvTWi9J-Ri11mo4&ig_fbb=true"
        >
          <p className="book-p rounded-md">Book Now</p>
        </a>
      </div>
      <MakeupDescription />
    </div>
  );
}
