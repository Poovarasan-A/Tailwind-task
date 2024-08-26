import { useState } from "react";
import ChatAvatar from "../components/ChatAvatar";
import ChatIcon from "../components/ChatIcon";
import { BsPlusSquareFill } from "react-icons/bs";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you with your needs today?",
      type: "received",
    },
    {
      id: 2,
      text: "Hi there, can you help me understand our current web development technologies?",
      type: "sent",
    },
    {
      id: 3,
      text: "Of course! I have a comprehensive overview of frontend frameworks. Would you like a summary or details on a specific area?",
      type: "received",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Handle sending messages
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newId = messages.length + 1;
      const newMsg = {
        id: newId,
        text: newMessage,
        type: "sent",
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <section>
      <div className="overflow-y-auto w-full h-[65vh] hide-scroll">
        <div className="flex flex-col py-[1rem] gap-4 text-sm">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "sent" ? "self-end" : "self-start"
              } gap-2 relative`}
            >
              {message.type === "received" && (
                <>
                  <div className="flex items-end">
                    <ChatIcon />
                  </div>
                  <div className="absolute w-8 h-5 bg-light bottom-0 left-10"></div>
                  <div className="absolute bg-primary w-12 h-12 rounded-full bottom-[0px] left-[8px]"></div>
                </>
              )}
              <div className="max-w-max inline-block bg-light lg:py-4 py-2 px-4 lg:px-10 rounded-xl">
                <p className="text-white">{message.text}</p>
              </div>
              {message.type === "received" ? (
                ""
              ) : (
                <>
                  <div className="absolute w-8 h-5 bg-light bottom-0 right-10"></div>
                  <div className="absolute bg-primary w-12 h-12 rounded-full bottom-[0px] right-[8px]"></div>
                  <div className="flex items-end">
                    <ChatAvatar />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[3rem] bg-light flex gap-2 items-center rounded-md justify-between my-2">
        <div className="flex items-center gap-4 pl-4 w-full">
          <BsPlusSquareFill className="text-white text-2xl cursor-pointer" />
          <input
            type="text"
            className="h-full w-full bg-transparent placeholder:text-button-border text-sm outline-none text-white tracking-wide"
            placeholder="Type Something..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </div>
        <button
          className="font-bold h-full w-[10rem] bg-green-300 rounded-md self-end"
          onClick={handleSendMessage}
        >
          send
        </button>
      </div>
    </section>
  );
};

export default Chat;
