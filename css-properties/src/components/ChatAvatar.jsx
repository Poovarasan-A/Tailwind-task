import avatar from "../assets/Elon.webp";

const ChatAvatar = () => {
  return (
    <div className="w-12 h-12 rounded-full border-[1px] border-line flex items-center justify-center bg-light/40 mb-1 overflow-hidden z-50">
      <img src={avatar} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
export default ChatAvatar;
