import assistant from "../assets/assistant-icon-OOSEIFPF.svg";

const Assistant = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="black py-2">Assistant</h2>
        <div>
          <div className="border border-slate-300 rounded-xl bg-white min-h-[12rem] min-w-[12rem] w-[12rem] text-[12px] p-4 flex flex-col gap-2 hover:shadow-xl cursor-pointer">
            <div className="bg-primary/20 rounded-xl h-[5.5rem] w-[5.5rem] overflow-hidden hover:scale-110 duration-300 grid place-content-center">
              <img src={assistant} alt="img" className="w-10" />
            </div>
            <h5 className="semi-bold">New Chat</h5>
            <p>Start a new chat with the LimeWire Asssistant.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assistant;
