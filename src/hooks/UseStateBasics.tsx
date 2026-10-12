// 1. useState syntax
// 2. useState rules
// 3. useState 2 ways - direct & functional
// 4. useState type
// 5. useState examples

import { useState } from "react";

type MyAge = number;

const UseStateBasics = () => {
  const [age, setAge] = useState<MyAge>(0);

  const increaseMyAge = () => {
    setAge(age + 1);
  };

  const increaseMyAgeBy3 = () => {
    console.log("first", age);
    setAge(age + 1); // 0 + 1
    console.log("second", age);
    setAge(age + 1); // 1 + 1
    console.log("third", age);
    setAge(age + 1); // 2 + 1
    console.log("fourth", age);
  };

  const increaseMyAgeBy3Functional = () => {
    console.log("first", age);
    setAge((prev) => {
      console.log(prev);
      return prev + 1;
    });
    console.log("second", age);
    setAge((prev) => {
      console.log(prev);
      return prev + 1;
    });
    console.log("third", age);
    setAge((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  console.log("component render");

  return (
    <>
      <h2>useState Basics</h2>
      <h2>{age}</h2>
      <button onClick={increaseMyAge}>increaseMyAge</button>
      <button onClick={increaseMyAgeBy3}>increaseMyAgeBy3</button>
      <button onClick={increaseMyAgeBy3Functional}>
        increaseMyAgeBy3Functional
      </button>
    </>
  );
};

export default UseStateBasics;
