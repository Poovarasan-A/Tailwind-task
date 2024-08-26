import BarChart from "../components/BarChart";
import DoubleBarChart from "../components/DoubleBarChart";

const Summary = () => {
  const bardata = [
    { label: "Next Js", value: 15, color: "#5EFF81" },
    { label: "React Js", value: 18, color: "#FF4B4B" },
    { label: "Vue Js", value: 10, color: "#FFAA29" },
  ];

  const chartData = [
    {
      values: [5, 10],
      colors: ["#5EFF81", "#FF4B4B"],
      department: ["HR Management"],
    },
    {
      values: [4, 2],
      colors: ["#5EFF81", "#FF4B4B"],
      department: ["CRM"],
    },
    {
      values: [10, 3],
      colors: ["#5EFF81", "#FF4B4B"],
      department: ["Websites"],
    },
  ];

  return (
    <section className="mt-10">
      <div className="py-4 flex justify-center items-center">
        <div className="w-full flex flex-wrap gap-6">
          <div className="lg:w-[calc(50%-12px)]  w-full border-light border-[1px] h-[62vh] bg-light/20 rounded-2xl overflow-hidden">
            <div className="w-full h-[2rem] flex items-center justify-center bg-light">
              <h4 className="text-white text-sm">Frameworks</h4>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="lg:w-[80%] xl:w-[70%] w-[95%] lg:h-[60%] h-[60%] border-b-2 border-light border-l-2 flex items-end justify-center">
                <BarChart data={bardata} />
              </div>
            </div>
          </div>

          <div className="lg:w-[calc(50%-12px)]  w-full border-light border-[1px] h-[62vh] bg-light/20 rounded-2xl overflow-hidden">
            <div className="w-full h-[2rem] flex items-center justify-center bg-light">
              <h4 className="text-white text-sm">Apps & Softwares</h4>
            </div>
            <div className="lg:w-[90%] xl:w-[80%] lg:h-[75%] w-[95%] h-[75%] border-b-2 lg:ml-4 xl:ml-14 ml-2 mt-6 border-light border-l-2 flex items-end justify-center">
              <DoubleBarChart data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Summary;
