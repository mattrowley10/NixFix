import FacialDescription from "./FacialDescription";

export default function Facials() {
  return (
    <div className="image-container-facials">
      <div className="facials">
        <div className="facial-content flex justify-center relative right-24 text-3xl lg:right-80 lg:text-4xl lg:pt-2 font-bold ">
          Facials
        </div>
      </div>
      <h2 className="facial-d-header text-3xl pl-48 flex justify-start underline">
        Description & Pricing
      </h2>
      <FacialDescription />
    </div>
  );
}
