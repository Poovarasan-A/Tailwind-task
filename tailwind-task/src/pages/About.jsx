import platform from "../assets/platform.png";

const About = () => {
  return (
    <section className="lg:mt-20 w-full">
      <div>
        <h2 className="text-center lg:text-[2.5rem] text-[2rem]">
          Your dream made a reality, on any platform!
        </h2>
        <h4 className="text-center font-semibold lg:text-2xl text-xl">
          Having built over <span className="font-bold">120+</span> apps on
          almost every single platform and device, we can make <br /> your dream
          a reality
        </h4>
        <img src={platform} alt="about" className="py-14" />
      </div>
    </section>
  );
};
export default About;
