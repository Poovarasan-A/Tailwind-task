const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 items-end">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <div
                className="lg:w-12 xl:w-20 w-12 md:w-24"
                style={{
                  height: `${(item.value / maxValue) * 100}px`,
                  backgroundColor: item.color,
                }}
              />
              <span className="absolute bottom-full mb-1 w-full text-center text-xs font-medium text-white ">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
