import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [number, setNumber] = useState(0);
  const [array, setArray] = useState(["mango", "orange"]);
  const [obj, setObj] = useState({ name: "kishori" });
  const [child, setChild] = useState(0);

  const arrData = useMemo(() => array.map((item) => item), [array]);
  const objData = useMemo(() => {
    return { ...obj };
  }, [obj]);

  const handleClick = useCallback(() => {
    setChild((prev) => prev + 1);
  }, []);

  console.log("parent rendered");
  return (
    <>
      <h2>parent {parent}</h2>

      <h2>child count {child}</h2>

      <Child props={objData} onClick={handleClick} child={child} />

      <button onClick={() => setParent((prev) => prev + 1)}>parent</button>

      <button onClick={() => setArray(["apple", "banana"])}>
        Change Array
      </button>

      <button onClick={() => setObj({ name: "tutorials" })}>
        Change Object
      </button>
    </>
  );
};
export default Parent;
