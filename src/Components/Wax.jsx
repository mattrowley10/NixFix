import WaxDescription from "./WaxDescription";
import { useNavigate } from "react-router-dom";
export default function Wax() {
  const nav = useNavigate();
  return (
    <div className="wax-container">
      <div className="background-wax">
        <div className="wax-content flex justify-center relative right-24 lg:right-80 lg:pt-2 text-3xl lg:text-4xl">
          Wax
        </div>
      </div>
      <div className="book-button flex justify-end text-4xl rounded-lg">
        <a
          className="book-wax"
          href="https://www.vagaro.com/nixfixllc/services?fbclid=IwAR1UVsan_MT_4iLTZpheoLCeORB65hUMD6nwax51HWN3uvTWi9J-Ri11mo4&ig_fbb=true"
        >
          <p className="book-p rounded-md">Book Now</p>
        </a>
      </div>
      <WaxDescription />
    </div>
  );
}
