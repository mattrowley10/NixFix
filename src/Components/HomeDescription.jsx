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
          alt="facial"
          onClick={() => nav("/facials")}
        />
        <img
          className="home-d-img rounded-md cursor-pointer"
          src="/public/wax6.jpeg"
          alt="waxes"
          onClick={() => nav("/wax")}
        />
        <img
          className="home-d-img rounded-md cursor-pointer pl-4"
          src="/public/pmu2.png"
          onClick={() => nav("/makeup")}
        />

        <p className="flex justify-start lg:ml-40 text-2xl">Facials</p>
        <p className="flex justify-start lg:ml-40 text-2xl">Waxing </p>
        <p className="flex justify-start lg:ml-32 text-2xl">Permanent MakeUp</p>
      </div>
    </div>
  );
}
