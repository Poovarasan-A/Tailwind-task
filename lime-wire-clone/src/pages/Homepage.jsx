import { useState } from "react";
import logo from "../assets/limewireLogo-BOKNEEHS.svg";
import assistant from "../assets/assistant-icon-OOSEIFPF.svg";
import audio from "../assets/audio-icon-ZH2TC7CY.svg";
import image from "../assets/image-icon-DNLA5GBA.svg";
import Search from "../components/Search";
import Card from "../components/Card";
import createImg from "../assets/images/createImage-Y2363FH6.jpg";
import editImg from "../assets/images/editImage-GBW25LIB.jpg";
import removeBg from "../assets/images/imageRemoveBackground-KWYTI33M.jpg";
import outpaintImg from "../assets/images/outpaintImage-T5OGB7S2.jpg";
import upscaleImg from "../assets/images/upscaleImage-L3EREWU3.jpg";
import inpaintImg from "../assets/images/inpaintImage-TLEYEYSU.jpg";
import createAud from "../assets/images/createAudio-EMPDLB4M.jpg";
import img2aud from "../assets/images/image2audio-G4GKA4HW.jpg";
import Assistant from "./Assistant";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("assistant");

  const onTabChange = (tab) => {
    setActiveTab(tab);
  };

  const imageDetails = [
    {
      image: createImg,
      title: "Create Image",
      details:
        "Our text-to-image feature turns your words into beautiful AI visulas",
    },
    {
      image: editImg,
      title: "Edit Image",
      details: "Make changes to any image using the power of AI",
    },
    {
      image: removeBg,
      title: "Remove Background",
      details: "Remove a background from any image using AI.",
    },
    {
      image: outpaintImg,
      title: "Outpaint Image",
      details: "Outpaint & expand images using AI",
    },
    {
      image: inpaintImg,
      title: "Inpaint Image",
      details: "Manipulate & replace parts of an image using AI",
    },
    {
      image: upscaleImg,
      title: "Upscale Image",
      details:
        "Enhance quality & details of existing images using AI Upscaling",
    },
  ];

  const audioDetails = [
    {
      image: createAud,
      title: "Create Music",
      details: "Our text-to-music feature turns your words into music",
    },
    {
      image: img2aud,
      title: "Image to Music",
      details: "Create music that captures the mood of an uploaded image",
    },
  ];

  return (
    <section className="w-full min-h-full flex flex-col items-center justify-start lg:ml-[2.5rem] lg:mb-10 mb-[6rem]">
      <div className="lg:w-[70%] lg:h-[70vh] h-[75vh] flex flex-col items-center justify-center gap-6 ">
        <img src={logo} alt="" className="lg:mb-6" />
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className={`px-4 h-10 ${
              activeTab === "assistant"
                ? "bg-primary hover:bg-primary/90"
                : "bg-white border hover:border-slate-300 text-black/90 hover:bg-primary/5"
            } rounded-full text-white flex items-center gap-x-2 shadow-sm`}
            onClick={() => onTabChange("assistant")}
          >
            <img src={assistant} alt="" className="w-6 text-primary" />
            Assistant
          </button>
          <button
            className={`px-4 h-10 ${
              activeTab === "image"
                ? "bg-primary hover:bg-primary/90"
                : "bg-white border hover:border-slate-300 text-black/90 hover:bg-primary/5"
            } rounded-full text-white flex items-center gap-x-2 shadow-sm`}
            onClick={() => onTabChange("image")}
          >
            <img src={image} alt="" className="w-6" />
            Image
          </button>
          <button
            className={`px-4 h-10 ${
              activeTab === "audio"
                ? "bg-primary hover:bg-primary/90"
                : "bg-white border hover:border-slate-300 text-black/90 hover:bg-primary/5"
            } rounded-full text-white flex items-center gap-x-2 shadow-sm`}
            onClick={() => onTabChange("audio")}
          >
            <img src={audio} alt="" className="w-6" />
            Audio
          </button>
        </div>
        {activeTab === "assistant" && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Search placeholder={"Start a New Chat..."} />
            <div className="w-[90%] justify-center flex flex-wrap gap-4 items-center">
              <p className="black text-sm">Need inspiration?</p>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                What is LimeWire?
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                Create an abstract image
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                What is the largest know prime Number?
              </button>
            </div>
          </div>
        )}
        {activeTab === "image" && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Search
              placeholder={"Describe the image you want to generate..."}
            />
            <div className="w-[90%] justify-center flex flex-wrap gap-4 items-center">
              <p className="black text-sm">Need inspiration?</p>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                A motorcycle in the city of ruins
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                A beautiful women in leather jacket
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                Superhero in epic fantasy
              </button>
            </div>
          </div>
        )}
        {activeTab === "audio" && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Search
              placeholder={"Describe the music you want to generate..."}
            />
            <div className="w-[90%] justify-center flex flex-wrap gap-4 items-center">
              <p className="black text-sm">Need inspiration?</p>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                A fast RNB track for a movie scene in a club
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                Ambient music for a spa
              </button>
              <button className="text-slate-500 text-xs bg-neutral-100 py-1.5 w-[9rem] truncate px-2 rounded-lg">
                Slow rhythmic beats
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="lg:w-[60%] md:w-[75%] w-[90%] ">
        <Assistant />
        <div className="my-5">
          <h2 className="black py-2">Image</h2>
          <div className="flex overflow-x-scroll scrollbar-custom space-x-4 pb-2">
            {imageDetails.map((detail, index) => (
              <Card
                image={detail.image}
                title={detail.title}
                details={detail.details}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="my-5">
          <h2 className="black py-2">Audio</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-2">
            {audioDetails.map((detail, index) => (
              <Card
                image={detail.image}
                title={detail.title}
                details={detail.details}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
