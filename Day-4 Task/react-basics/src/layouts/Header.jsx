import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[5rem] border-b-2 flex items-center justify-around sticky top-0 left-0 bg-white/95">
      <h2 className="font-extrabold text-xl">
        <Link to={"/"}>Home</Link>
      </h2>
      <ul className="flex items-center gap-24">
        <li className="font-semibold cursor-pointer hover:text-neutral-600">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-neutral-600">
          <Link to={"/features"}>Features</Link>
        </li>
        <li className="font-semibold cursor-pointer hover:text-neutral-600">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
