import { IoSearch } from "react-icons/io5";
import logo from "../assets/limewireLogo-BOKNEEHS.svg";
import Dropdown from "./Dropdown";
import { FiMenu } from "react-icons/fi";
import { FaSquarePlus } from "react-icons/fa6";

const Header = () => {
  const aiTools = [
    { label: "AI Image Tools", link: "#" },
    { label: "AI Image Generator", link: "#" },
    { label: "AI Image Editor", link: "#" },
    { label: "AI Image Upscaler", link: "#" },
    { label: "AI Image Outpainter", link: "#" },
  ];

  const more = [
    { label: "About LimeWire", link: "#" },
    { label: "Developer API", link: "#" },
    { label: "Press", link: "#" },
    { label: "Help Center", link: "#" },
    { label: "Blog", link: "#" },
    { label: "LimeWire Merch", link: "#" },
  ];
  return (
    <div className="sticky top-0 left-0 bg-tertiary w-full h-[3.5rem] border-b-[1px] flex items-center px-4 justify-between z-50">
      {/* Desktop */}
      <div className="flex gap-4">
        <img src={logo} alt="logo" className="w-[7.8rem]" />
        <div className="hidden md:flex gap-4">
          <div
            className="flex items-center gap-2 border-[1px] border-black/15 text-sm rounded-full px-4 h-9 md:w-[15rem] lg:w-[12rem] xl:w-[25rem]  focus-within:outline-primary/10 focus-within:outline
        focus-within:outline-3 focus-within:border-primary/40"
            tabIndex="0"
          >
            <IoSearch className="text-quaternary text-lg" />
            <input
              type="text"
              placeholder="Search on LimeWire..."
              className="w-full h-full placeholder:text-black outline-none text-sm bg-transparent"
            />
          </div>
          <div className="flex flex-col text-sm semi-bold">
            <p>
              $0.2368 <span className="text-primary">+9.17%</span>
            </p>
            <small className="text-quaternary medium">LMWR price</small>
          </div>
          <button className="px-4 h-10 bg-primary/90 hover:bg-primary text-white rounded-full text-sm semi-bold">
            Buy LMWR
          </button>
          <div className="md:hidden lg:block divide-y-2 border"></div>
          <div className="lg:flex gap-6 items-center md:hidden">
            <Dropdown name={"AI Tools"} items={aiTools} />
            <Dropdown name={"More"} items={more} />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 semi-bold">
        <button className="text-sm font-bold h-10 px-4 rounded-full bg-button/70 hover:bg-button hover:text-black/70 text-quaternary">
          Sign In
        </button>
        <button className="text-sm font-bold h-10 px-4 rounded-full bg-primary/90 hover:bg-primary text-white">
          Create with AI
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-4">
        <button className="md:hidden">
          <IoSearch className="text-2xl" />
        </button>
        <button>
          <FaSquarePlus className="text-2xl text-primary" />
        </button>
        <button className="">
          <FiMenu className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
export default Header;
