import { IoBookOutline } from "react-icons/io5";
import cyber from "../assets/cyber.png";

const Navbar = ({ onTabChange, activeTab }) => {
  return (
    <div>
      <div className="w-full flex items-center justify-center py-4 gap-4">
        <button
          className={`lg:w-[8rem] w-[8rem] py-1.5 text-xs  rounded-sm
            ${
              activeTab === "summary"
                ? "bg-secondary text-white"
                : "border-[1px] border-button-border text-button-border"
            }  flex items-center gap-2 justify-center`}
          onClick={() => onTabChange("summary")}
        >
          <IoBookOutline className="text-lg" />
          Summary
        </button>
        <button
          className={`lg:w-[9rem] w-[10rem] py-1.5 text-xs   ${
            activeTab === "AI GPT"
              ? "bg-secondary text-white"
              : "border-[1px] border-button-border text-button-border"
          } rounded-sm flex items-center justify-center lg:gap-2 gap-1`}
          onClick={() => onTabChange("AI GPT")}
        >
          <div className="w-5 h-5 opacity-70">
            <img src={cyber} alt="" className="w-5 h-5 object-cover" />
          </div>
          AI GPT
        </button>
      </div>
      <hr className="border-[1px] border-light" />
    </div>
  );
};

export default Navbar;
