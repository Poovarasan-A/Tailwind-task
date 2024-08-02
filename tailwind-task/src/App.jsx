import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden lg:px-[12%] px-5">
        <Header />
        <Home />
        <About />
        <Expertise />
        <Footer />
      </div>
    </>
  );
}

export default App;
