import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Explore";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden regular">
        <Header />
        <Aside onTabChange={handleTabChange} activeTab={activeTab} />
        {activeTab === "home" && <Homepage />}
        {activeTab === "explore" && <Explore />}
      </div>
    </>
  );
}

export default App;
