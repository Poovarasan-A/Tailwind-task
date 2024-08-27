import sendIcon from "../assets/send-message-icon-RR467DHW.svg";

const Search = ({ placeholder }) => {
  return (
    <div
      className="flex items-center gap-2 border border-slate-300 bg-white focus-within:outline-primary/10 focus-within:outline
        focus-within:outline-4 focus-within:border-primary/40 text-sm rounded-full px-6 h-[3.6rem] w-[90%] lg:w-[70%] transition-shadow duration-300"
      tabIndex="0"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full text-slate-900 placeholder:text-slate-400 outline-none text-[16px] bg-transparent medium"
      />
      <img src={sendIcon} alt="" />
    </div>
  );
};
export default Search;
