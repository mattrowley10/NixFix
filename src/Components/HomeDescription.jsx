import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function HomeDescription() {
  const nav = useNavigate();
  useEffect(() => {
    function resetTop() {
      if (nav) {
        window.scrollTo(0, 0);
      }
    }
    return resetTop;
  }, [nav]);
  return (
    <div className="home-description">
      <div className="home-d ">
        <img
          className="home-d-img rounded-md cursor-pointer pr-4"
          src="https://cdn.pixabay.com/photo/2023/08/31/08/58/facial-8224799_1280.jpg "
          alt="Woman getting a facial and massage who is feeling very relaxed"
          onClick={() => nav("/facials")}
        />
        <img
          className="home-d-img rounded-md cursor-pointer"
          src="/public/wax6.jpeg"
          alt="A group of people who have all just gotten their legs waxed feeling great!"
          onClick={() => nav("/wax")}
        />
        <img
          className="home-d-img rounded-md cursor-pointer pl-4"
          src="/public/pmu2.png"
          onClick={() => nav("/makeup")}
          alt="Woman getting her permanent makeup applied and feeling happy"
        />

        <p className="flex justify-start ml-6 md:ml-12 lg:ml-40 text-xl md:text-2xl lg:text-2xl">
          Facials
        </p>
        <p className="flex justify-start ml-6 md:ml-12 lg:ml-40 text-xl md:text-2xl lg:text-2xl">
          Waxing{" "}
        </p>
        <p className="flex justify-start ml-6 md:ml-12 lg:ml-32 text-xl md:text-2xl lg:text-2xl">
          Permanent MakeUp
        </p>
      </div>
    </div>
  );
}
