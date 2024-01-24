import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import ScrollToTop from "../Hooks/ScrollToTop";
export default function TopNav() {
  const [dropDown, setDropDown] = useState(false);
  const nav = useNavigate();
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nav]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropDownRef]);

  return (
    <div className="topNav flex">
      <ScrollToTop />
      <p className="text-3xl cursor-pointer" onClick={() => nav("/")}>
        Nix Fix
      </p>
      <div className="absolute right-0 mr-4">
        <button className="text-3xl" onClick={toggleDropDown}>
          <IoMdMenu />
        </button>
      </div>
      {dropDown && (
        <div
          ref={dropDownRef}
          className="dropDown px-4 py-2 absolute right-0 mt-8 rounded-lg mr-4 flex-column transition ease-in-out duration-500 cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <ul>
            <li className="mb-2" onClick={() => nav("/facials")}>
              <a>Facials</a>
            </li>
            <li className="mb-2" onClick={() => nav("/wax")}>
              <a>Wax</a>
            </li>
            <li className="mb-2" onClick={() => nav("/makeup")}>
              <a>Permanent Makeup</a>
            </li>
            <li className="mb-2">
              <a href="https://www.vagaro.com/nixfixllc?fbclid=IwAR1UVsan_MT_4iLTZpheoLCeORB65hUMD6nwax51HWN3uvTWi9J-Ri11mo4&ig_fbb=true">
                Booking
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
