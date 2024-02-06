import FacialDescription from "./FacialDescription";
import { useNavigate } from "react-router-dom";
export default function Facials() {
  const nav = useNavigate();
  return (
    <div className="image-container-facials">
      <div className="facials">
        <div className="facial-content flex justify-center relative right-24 text-3xl lg:right-80 lg:text-4xl lg:pt-2 font-bold ">
          Facials
        </div>
      </div>
      <div className="book-button-facials flex justify-end text-4xl rounded-lg">
        <a
          className="book-facials"
          href="https://www.vagaro.com/nixfixllc?fbclid=IwAR1UVsan_MT_4iLTZpheoLCeORB65hUMD6nwax51HWN3uvTWi9J-Ri11mo4&ig_fbb=true"
        >
          <p className="book-p rounded-md">Book Now</p>
        </a>
      </div>
      <FacialDescription />
    </div>
  );
}
