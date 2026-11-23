// primitive types - immutable
/*
string
number
boolean
null
undefined
symbol
bigint
*/

import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

// reference types - mutable
/*
array
object
function
*/

/*
REACT MEMO -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
React.memo ek Higher-Order Component (HOC) hai jo ek component ko wrap karta hai. Agar component ke props change nahi hue hain, toh woh component ko dobara render hone se rokta hai aur pichla (cached) output hi use karta hai.

const checkProps = (prevProps, nextProps) => {
  prevProps.props === nextProps.props
};

IMPORTANT -
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
React.memo reference types (array, object, function) ke saath reference check karta hai, aur primitive types (number, string, boolean) ke saath value check karta hai. 

Kyunki React.memo har prop pe prevProps.prop === nextProps.prop chalata hai, isliye woh primitives ki value dekhta hai aur references ka address dekhta hai.


Primitives ke saath ===: Value compare karta hai
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
5 === 5 true
"hello" === "hello" true
true === true true

References ke saath ===: Memory address (reference) compare karta hai.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
[1,2] === [1,2] false (dono ke address alag hain)
{a:1} === {a:1} false (dono ke address alag hain)
function(){} === function(){} false

useCallback ek React Hook hai jo ek function ka reference (address) cache (yaad) rakhta hai. Jab tak uski dependency array ki values change nahi hoti, React naya function nahi banata — purana wala hi return karta hai.
*/

type Obj = {
  name: string;
};

const Parent = () => {
  const [parent, setParent] = useState<number>(0);
  const [myNumber, setMyNumber] = useState<number>(0);
  const [myCount, setMyCount] = useState<number>(0);
  const [myName, setMyName] = useState<string>("kishori");
  const [myArray, setMyArray] = useState<string[]>(["mango", "orange"]);
  const [myObj, setMyObj] = useState<Obj>({ name: "kishori" });

  // const myArrayData = myArray.map((item) => item);
  const myArrayData = useMemo(() => {
    return myArray.map((item) => item);
  }, [myArray]);

  // const myObjData = {
  //   ...myObj,
  // };
  const myObjData = useMemo(() => {
    return { ...myObj };
  }, [myObj]);

  const myModifiedName = `${myName}-tutorials`;

  const handleClick = useCallback(() => {
    setMyCount((prev) => prev + 1);
  }, [myCount]);

  console.log("parent rendered");
  return (
    <>
      <h2>parent {parent}</h2>
      <h2>parent mycount = {myCount}</h2>

      <Child
        myNumber={myNumber}
        myName={myModifiedName}
        myArray={myArrayData}
        myObj={myObjData}
        handleClick={handleClick}
      />

      <button onClick={() => setParent((prev) => prev + 1)}>add parent</button>
      <button onClick={() => setMyNumber((prev) => prev + 1)}>
        change MyNO
      </button>
      <button onClick={() => setMyName("tutorials")}>change MyName</button>
      <button onClick={() => setMyArray(["apple", "banana"])}>
        change myArray
      </button>
      <button onClick={() => setMyObj({ name: "tutorials" })}>
        change myObj
      </button>
    </>
  );
};
export default Parent;
