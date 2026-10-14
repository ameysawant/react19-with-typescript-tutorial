// Why use Cleanup Function ?
// - to avoid memory leak + ghost behavior + race condition
// - cleanup function runs on component unmount
// - cleanup function runs before dependency array value changes

import { useEffect, useState } from "react";
import Timer from "./Timer";

const CleanupFunction = () => {
  const [show, setShow] = useState<boolean>(true);

  const showMyTimer = () => {
    setShow((prev) => !prev);
  };

  //   useEffect(() => {
  //     console.log("useffect ran");

  //     return () => {
  //       console.log("cleanup function ran");
  //     };
  //   }, [show]);

  return (
    <>
      <h2>CleanupFunction</h2>
      {show && <Timer />}
      <button onClick={showMyTimer}>show</button>
    </>
  );
};

export default CleanupFunction;
