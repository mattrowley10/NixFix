import MakeupDescription from "./MakeupDescription";
export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="background-makeup">
        <div className="makeup-content flex justify-start lg:pl-24 lg:pt-2 text-3xl lg:text-4xl">
          Permanent Makeup
        </div>
      </div>
      <h2 className="makeup-d-header text-3xl pl-24 lg:pl-48 flex justify-start underline">
        Description & Pricing
      </h2>
      <MakeupDescription />
    </div>
  );
}
