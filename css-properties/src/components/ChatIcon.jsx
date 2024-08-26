import cyber from "../assets/cyber.png";

const ChatIcon = () => {
  return (
    <div className="w-12 h-12 rounded-full border-[1px] border-line flex items-center justify-center bg-light/40 mb-1 z-50">
      <img src={cyber} alt="" className="w-8 h-8 mt-0.5" />
    </div>
  );
};
export default ChatIcon;
