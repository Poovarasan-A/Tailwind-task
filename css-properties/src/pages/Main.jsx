import { useState } from "react";
import Summary from "./Summary";
import Chat from "./Chat";
import Navbar from "../components/Navbar";
import "./Main.css";

const Main = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <main className="w-full lg:h-[85vh] bg-primary  border-2 border-line rounded-xl lg:px-[2rem] xl:px-[4rem] px-[1rem] mt-14">
      <Navbar onTabChange={handleTabChange} activeTab={activeTab} />
      {activeTab === "summary" && <Summary />}
      {activeTab === "AI GPT" && <Chat />}
    </main>
  );
};
export default Main;
