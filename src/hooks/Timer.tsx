import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const tick = () => {
    console.log("timer is running......");
    setSeconds((prev) => prev + 1);
  };

  const handleScrollPosition = () => {
    console.log("scroll is running......");
    setHeight((prev) => prev + 1);
  };

  const handleWidthPosition = () => {
    console.log("width is running......");
    setWidth((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    window.addEventListener("scroll", handleScrollPosition);
    window.addEventListener("resize", handleWidthPosition);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScrollPosition);
      window.removeEventListener("resize", handleWidthPosition);
    };
  }, []);

  return (
    <div>
      <h2>timer</h2>
      <h2>seconds: {seconds}</h2>
      <h2>scroll position: {height}</h2>
      <h2>width position: {width}</h2>
    </div>
  );
};

export default Timer;
