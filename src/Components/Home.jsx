import HomeDescription from "./HomeDescription";

export default function Home() {
  return (
    <div className="scroll-container">
      <div className="home">
        <p className="flex justify-start ml-6 lg:ml-24 pt-6 text-2xl lg:text-3xl">
          A New World of Beauty{" "}
        </p>
      </div>
      <div className="image-container">
        <img
          className="image opacity-80"
          src="https://images.pexels.com/photos/168441/pexels-photo-168441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Beautiful woman with well kept skin, well done makeup, embodying the image of a woman who has recently been to the 
          esthetician for her beauty needs"
        />
        <p className="image-quote text-3xl lg:text-5xl">
          "The Human Body <br></br> is the <br></br> Best Work of Art"
        </p>
      </div>
      <HomeDescription />
    </div>
  );
}
