import intel from "../assets/product_logo1.svg";
import apple from "../assets/product_logo2.svg";
import disney from "../assets/product_logo3.svg";
import att from "../assets/product_logo4.svg";
import paytm from "../assets/product_logo5.svg";

const Logos = () => {
  return (
    <div className="flex flex-wrap lg:gap-0 gap-4 w-full justify-around py-8">
      <div>
        <img src={intel} alt="" />
      </div>
      <div>
        <img src={apple} alt="" />
      </div>
      <div>
        <img src={disney} alt="" />
      </div>
      <div>
        <img src={att} alt="" />
      </div>
      <div>
        <img src={paytm} alt="" />
      </div>
    </div>
  );
};
export default Logos;
