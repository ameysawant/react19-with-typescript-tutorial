/*
What is useEffect ?
useEffect is a hook which allows you to perform side effects like below mention.

React controls 3 things -
1. state
2. props
3. jsx (ui)

So whatever react does not control we put them in useEffect, like api calls, localstorage, sessionstorage, cookies, DOM, eventlisteners, timers

How useEffect work ?
- it runs on every render without dependency array
- it runs only once on first render when dependency array is blank
- it runs only when dependency array value changes
- you can add multiple useEffect

Why use Cleanup Function ?
- to avoid memory leak + ghost behavior + race condition 
- cleanup function runs on component unmount
- cleanup function runs before dependency array value changes

CLEANUP CHEAT SHEET:
--------------------
setInterval        → clearInterval(id)
setTimeout         → clearTimeout(id)
addEventListener   → removeEventListener
fetch              → controller.abort()
WebSocket          → socket.close()
IntersectionObserver → observer.disconnect()
Redux subscribe    → unsubscribe()

Rules -
- cannot call conditionally, in loops and functions same as useState hook
*/

import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  console.log("component render");
  const [age, setAge] = useState<number>(0);
  const [text, setText] = useState<string>("is valid");

  const checkAge = (currentAge: number) => {
    if (currentAge >= 5) {
      setText("is valid");
    } else {
      setText("is not valid");
    }
  };

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };
  const decreaseAge = () => {
    setAge((prev) => prev - 1);
  };
  const resetAge = () => {
    setAge(0);
  };

  useEffect(() => {
    console.log("useeffect ran");
    checkAge(age);
  }, [age]);

  useEffect(() => {
    console.log("useeffect ran");
    checkAge(age);
  }, [age]);

  return (
    <div>
      <h2>useEffect</h2>
      <h2>{age}</h2>
      <h2>User {text}</h2>
      <button onClick={increaseAge}>increase</button>
      <button onClick={decreaseAge}>decrease</button>
      <button onClick={resetAge}>reset age</button>
    </div>
  );
};

export default UseEffectBasics;
