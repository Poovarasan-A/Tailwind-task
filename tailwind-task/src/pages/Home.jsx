import rocket from "../assets/Rocket-smooth.gif";
import Logos from "../components/Logos";
import TextReveal from "../components/TextReveal";

const Home = () => {
  return (
    <section className=" w-full lg:h-[90vh]">
      <div className="lg:flex py-10">
        <div className="lg:w-[60%] flex items-center justify-start pt-5">
          <div className="flex flex-col gap-12 w-full">
            <TextReveal />
            <button className="bg-primary text-white px-14 py-3 mt-20 text-[1.5rem] lg:w-[20rem] hover:bg-primary/85">
              Get a Proposal
            </button>
          </div>
        </div>
        <div className=" lg:w-[40%] flex items-center justify-center">
          <img src={rocket} alt="body" className="animate-fade-in-up" />
        </div>
      </div>
      <Logos />
    </section>
  );
};
export default Home;
