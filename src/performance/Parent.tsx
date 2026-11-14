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

// reference types - mutable
/*
array
object
function
*/

/*
  const [parent, setParent] = useState(0);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("kishori");
  const [array, setArray] = useState(["mango", "orange"]);
  const [obj, setObj] = useState({ name: "kishori" });

  React.memo ek Higher-Order Component (HOC) hai jo component ko wrap karta hai. Agar component ke props same hain (shallow compare), to woh component re-render nahi hota — purana rendered output hi use hota hai. Aur agar same nahi hai to re-render hota hai.

  useMemo ek React hook hai jo expensive calculation ka result cache karta hai. Jab tak dependency array ke values na badlein, woh purana result (same reference) return karta hai — calculation dobara nahi karta.

  useCallback ek React hook hai jo function ko cache karta hai. Jab tak dependency array ke values na badlein, woh same function reference return karta hai — naya function nahi banata.
*/

import { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("kishori");
  const [array, setArray] = useState(["mango", "orange"]);
  const [obj, setObj] = useState({ name: "kishori" });

  const arrData = useMemo(() => array.map((item) => item), [array]);

  const objData = useMemo(() => {
    return { ...obj };
  }, [obj]);

  console.log("parent rendered");

  return (
    <>
      <h2>Parent {parent}</h2>
      <Child number={number} name={name} array={arrData} obj={objData} />
      <button onClick={() => setParent((prev) => prev + 1)}>parent</button>
      <button onClick={() => setArray(["apple", "banana"])}>
        array change
      </button>
    </>
  );
};
export default Parent;
