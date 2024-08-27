const Card = ({ image, title, details }) => {
  return (
    <div className="border border-slate-300 rounded-xl bg-white min-h-[12rem] min-w-[12rem] w-[12rem] text-[12px] p-4 flex flex-col gap-2 hover:shadow-xl cursor-pointer">
      <div className="bg-primary/20 rounded-xl h-[5.5rem] w-[5.5rem] overflow-hidden hover:scale-110 duration-300">
        <img src={image} alt="img" className="w-full h-full object-cover" />
      </div>
      <h5 className="semi-bold">{title}</h5>
      <p>{details}</p>
    </div>
  );
};
export default Card;
