import FacialDescription from "./FacialDescription";

export default function Facials() {
  return (
    <div className="image-container-facials">
      <div className="facials">
        <div className="facial-content flex justify-center relative right-24 text-3xl lg:right-80 lg:text-4xl lg:pt-2 font-bold ">
          Facials
        </div>
      </div>
      <div className="book-button-facials flex justify-end text-4xl">
        <button className="book-facials rounded-lg">
          <p className="book-p rounded-md">Book Now</p>
        </button>
      </div>
      <FacialDescription />
    </div>
  );
}
