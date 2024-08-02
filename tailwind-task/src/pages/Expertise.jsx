import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbMicroscope } from "react-icons/tb";

const Expertise = () => {
  return (
    <section className="w-full">
      <h2 className="text-center lg:text-[2.5rem] text-[1.5rem]">
        Our Expertise
      </h2>
      <h4 className="text-center font-semibold text-xl">
        Right from app development to scaling your organization, we have all the
        capabilities you need
      </h4>
      <div className="flex flex-wrap justify-between items-center my-10">
        <div className="lg:w-[30%] p-4 hover:bg-neutral-100">
          <LiaLaptopCodeSolid className="text-7xl" />
          <h5 className="text-xl py-2"> App Development</h5>
          <p className="font-semibold leading-8 text-lg tracking-tight">
            Build a secure, future-proof application through the latest
            technologies and enhance your user experience
          </p>
          <p className="pt-8">Read more →</p>
        </div>
        <div className="lg:w-[30%] p-4  hover:bg-neutral-100">
          <HiOutlineLightBulb className="text-7xl" />
          <h5 className="text-xl py-2">Technology Consulting</h5>
          <p className="font-semibold leading-8 text-lg tracking-tight">
            Explore new opportunities, get insights and overcome your barriers
            by consulting with our experts
          </p>
          <p className="pt-8">Read more →</p>
        </div>
        <div className="lg:w-[30%] p-4 hover:bg-neutral-100">
          <TbMicroscope className="text-7xl" />
          <h5 className="text-xl py-2">Research and Development</h5>
          <p className="font-semibold leading-8 text-lg tracking-tight">
            Analyze, solve complex challenges and develop solutions that create
            a revolution
          </p>
          <p className="pt-8">Read more →</p>
        </div>
      </div>
    </section>
  );
};
export default Expertise;
