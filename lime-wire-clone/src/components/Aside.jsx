import { IoTelescopeOutline, IoTelescopeSharp } from "react-icons/io5";
import { MdDesktopWindows, MdOutlineDesktopMac } from "react-icons/md";

const Aside = ({ onTabChange, activeTab }) => {
  return (
    <div className="md:w-[5rem] w-full h-[5rem] border-r-[1px] bg-tertiary md:h-full flex md:flex-col items-center justify-around md:justify-start gap-10 pt-6 shadow-sm fixed md:left-0 bottom-0 z-30 md:top-14">
      <button
        className="flex flex-col items-center gap-2 hover:text-primary cursor-pointer"
        onClick={() => onTabChange("home")}
      >
        {activeTab === "home" ? (
          <MdDesktopWindows className="text-xl" />
        ) : (
          <MdOutlineDesktopMac className="text-xl" />
        )}
        <p
          className={`text-xs ${
            activeTab === "explore" ? "regular" : "semi-bold"
          }`}
        >
          Home
        </p>
      </button>
      <button
        className="flex flex-col items-center gap-2 hover:text-primary cursor-pointer"
        onClick={() => onTabChange("explore")}
      >
        {activeTab === "explore" ? (
          <IoTelescopeSharp className="text-xl" />
        ) : (
          <IoTelescopeOutline className="text-xl" />
        )}
        <p
          className={`text-xs ${
            activeTab === "explore" ? "semi-bold" : "regular"
          }`}
        >
          Explore
        </p>
      </button>
    </div>
  );
};
export default Aside;
