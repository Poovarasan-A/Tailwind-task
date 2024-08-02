import logo from "../assets/logo (1).png";

const Header = () => {
  return (
    <div className="w-full h-[5.5rem] flex justify-between items-center border-b-[1px] sticky top-0 left-0 bg-white z-50">
      <img src={logo} alt="logo" className="w-[13rem] cursor-pointer" />
      <ul className="lg:flex hidden gap-8 text-[15px] font-semibold items-center ">
        <li className="link">Who we are?</li>
        <li className="link">What we do?</li>
        <li className="link">How we do it?</li>
        <li className="link">Success Stories</li>
        <li className="link">For Enterprises</li>
        <button className="bg-primary text-white px-3 py-1.5 hover:bg-primary/85">
          Get a Proposal
        </button>
      </ul>
    </div>
  );
};
export default Header;
