import { useNavigate } from "react-router-dom";
export default function Footer() {
  const nav = useNavigate();

  return (
    <div className="footer flex justify-center py-4 px-4">
      <ul className="inline-flex text-2xl cursor-pointer">
        <li className="pr-2" onClick={() => nav("/contactUs")}>
          Contact Us
        </li>
        <li className="pr-2">
          <a>Facebook</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
      </ul>
    </div>
  );
}
