import MakeupDescription from "./MakeupDescription";
export default function Makeup() {
  return (
    <div className="makeup-container">
      <div className="background-makeup">
        <div className="makeup-content flex justify-start lg:pl-24 lg:pt-2 text-3xl lg:text-4xl">
          Permanent Makeup
        </div>
      </div>
      <MakeupDescription />
    </div>
  );
}
