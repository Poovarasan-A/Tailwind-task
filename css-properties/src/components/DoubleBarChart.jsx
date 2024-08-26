const DoubleBarChart = ({ data }) => {
  const maxValue = Math.max(...data.flatMap((item) => item.values));

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row lg:gap-4 gap-2 items-end">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex gap-2 relative bg-light pt-4 px-2">
              {/* First Bar */}
              <div className="lg:w-8 xl:w-12 md:w-16 w-6 lg:h-[100px] h-[100px] md:h-[180px] flex flex-col justify-end">
                <div
                  style={{
                    height: `${(item.values[0] / maxValue) * 100}%`,
                    backgroundColor: item.colors[0],
                  }}
                />
              </div>
              {/* Second Bar */}
              <div className="lg:w-8 xl:w-12 w-6 md:w-16 h-[100px] lg:h-[100px] md:h-[180px] flex flex-col justify-end ">
                <div
                  style={{
                    height: `${(item.values[1] / maxValue) * 100}%`,
                    backgroundColor: item.colors[1],
                  }}
                />
              </div>
              {/* Label */}
              <span className="absolute top-0 -mt-6 w-full text-center text-[9px] lg:text-xs font-medium text-white flex items-center justify-center">
                <p>{item.department}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoubleBarChart;
