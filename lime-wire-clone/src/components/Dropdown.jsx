import { useEffect, useRef, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

const Dropdown = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        className="text-sm text-quaternary hover:text-black/70 semi-bold flex items-center gap-2"
        onClick={toggleDropdown}
      >
        {name}
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute default:w-56 w-max max-h-96 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg overflow-auto top-full">
          <div>
            {items &&
              items.map((item, index) => (
                <a
                  href=""
                  className=" hover:bg-slate-200 cursor-pointer block w-full focus-visible:bg-slate-200 focus:outline-transparent focus-visible:outline-transparent text-slate-900"
                  key={index}
                >
                  <span className="p-4 flex items-center justify-between gap-x-4">
                    {item.label}
                    <MdKeyboardArrowRight className="block transition-transform text-lg hover:translate-x-1" />
                  </span>
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
