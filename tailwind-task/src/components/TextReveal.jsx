import { useEffect, useState } from "react";

const TextReveal = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    {
      id: 1,
      content: (
        <p>
          Let&apos;s seamlessly take <br /> your app idea to the global market
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p>
          Let&apos;s digitally transform <br /> your organization to the next
          level
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p>
          Let&apos;s confidently scale <br /> your business process worldwide
        </p>
      ),
    },
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="relative h-10 w-full">
      {texts.map((text, index) => (
        <div
          key={text.id}
          className={`absolute w-full inset-0 transition-opacity duration-1000 z-10 ${
            index === currentText ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="animate-reveal font-extrabold tracking-tight lg:text-[2.5rem] text-[1.5rem]">
            {text.content}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
