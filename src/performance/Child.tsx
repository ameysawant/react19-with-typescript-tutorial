import { memo, useMemo } from "react";

type Obj = {
  name: string;
};

type ChildProps = {
  myNumber: number;
  myName: string;
  myArray: string[];
  myObj: Obj;
  handleClick: () => void;
};

const Child = ({
  myNumber,
  myName,
  myArray,
  myObj,
  handleClick,
}: ChildProps) => {
  // useMemo(()=>{},[])

  const calculatedValue = useMemo(() => {
    console.log("heavy calculation function ran");
    let sum = 0;
    for (let i = 0; i < 300000000; i++) {
      sum += myNumber * 10;
    }
    return sum;
  }, [myNumber]);

  console.log("child rendered");
  return (
    <>
      <h2>child myNumber = {myNumber}</h2>
      <h2>child myName = {myName}</h2>
      <h2>child myArray = {myArray}</h2>
      <h2>child myObj = {myObj.name}</h2>
      <h2>child total = {calculatedValue}</h2>
      <button onClick={handleClick}>change My Count</button>
    </>
  );
};

const checkProps = (prevProps: ChildProps, nextProps: ChildProps) => {
  const isMyArraySame = prevProps.myArray === nextProps.myArray;
  const isMyNumberSame = prevProps.myNumber === nextProps.myNumber;
  const isMyNameSame = prevProps.myName === nextProps.myName;
  const isMyObjSame = prevProps.myObj === nextProps.myObj;
  const isMyFunction = prevProps.handleClick === nextProps.handleClick;
  console.log("prevProps = ", prevProps);
  console.log("nextProps = ", nextProps);
  console.log("myArray = ", isMyArraySame ? "SAME" : "DIFFERENCE");
  console.log("myNumber = ", isMyNumberSame ? "SAME" : "DIFFERENCE");
  console.log("myName = ", isMyNameSame ? "SAME" : "DIFFERENCE");
  console.log("myObj = ", isMyObjSame ? "SAME" : "DIFFERENCE");
  console.log("myFunc = ", isMyFunction ? "SAME" : "DIFFERENCE");
  return (
    isMyArraySame &&
    isMyNameSame &&
    isMyNumberSame &&
    isMyObjSame &&
    isMyFunction
  );
};

export default memo(Child, checkProps);
// export default Child;
