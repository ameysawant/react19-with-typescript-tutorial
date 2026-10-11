import { useState } from "react";

const UseStateBasics = () => {
  const [myName, setMyName] = useState("kishori");

  //   let myName = "kishori";

  const changeMyName = () => {
    // myName = "tutorials";
    // console.log(myName);
    setMyName("tutorials");
  };

  console.log("component render");

  return (
    <>
      <h2>useState Basics</h2>
      <h2>{myName}</h2>
      <button onClick={changeMyName}>change my name</button>
    </>
  );
};

export default UseStateBasics;
