import WaxDescription from "./WaxDescription";

export default function Wax() {
  return (
    <div className="wax-container">
      <div className="background-wax">
        <div className="wax-content flex justify-center relative right-24 lg:right-80 lg:pt-2 text-3xl lg:text-4xl">
          Wax
        </div>
      </div>
      <div className="book-button flex justify-end text-4xl">
        <button className="book-wax rounded-lg">
          <p className="book-p rounded-md">Book Now</p>
        </button>
      </div>
      <WaxDescription />
    </div>
  );
}
