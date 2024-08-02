import logo from "../assets/logo (1).png";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full">
      <hr className="border-2" />
      <img src={logo} alt="" className="w-[14rem] py-8" />
      <div className="flex items-start pb-10 lg:gap-[20%]">
        <ul className="leading-8">
          <li className="link">What we do?</li>
          <li className="link">App Development</li>
          <li className="link">Technology Consulting</li>
          <li className="link">Research and Development</li>
        </ul>

        <ul className="leading-8">
          <li className="link">How we do it?</li>
          <li className="link">Success Stories</li>
          <li className="link">For Enterprises</li>
          <li className="link">Who we are?</li>
          <li className="link">Contact Us</li>
          <li className="link">Careers</li>
          <li className="link">Accelerator</li>
        </ul>
        <div>
          <p>FOLLOW US</p>
          <div className="flex gap-4 items-center py-2">
            <FaLinkedinIn className="text-2xl" />
            <FaYoutube className="text-3xl" />
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-sm py-4">
        MacAppStudio © Copyright 2024 | All Rights Reserved.
      </p>
    </section>
  );
};
export default Footer;
