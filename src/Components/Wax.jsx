import WaxDescription from "./WaxDescription";

export default function Wax() {
  return (
    <div className="wax-container">
      <div className="background-wax pb-10">
        <div className="wax-content flex justify-center relative right-24 lg:right-80 lg:pt-2 text-3xl lg:text-4xl">
          Wax
        </div>
      </div>
      <h2 className="wax-d-header text-3xl pl-24  flex justify-start underline">
        Description & Pricing
      </h2>
      <WaxDescription />
    </div>
  );
}
