import { memo } from "react";

type Obj = {
  name: string;
};

type ChildProps = {
  number: number;
  name: string;
  array: string[];
  obj: Obj;
};

const Child = ({ number, name, array, obj }: ChildProps) => {
  console.log("child rendered");
  return (
    <>
      <h2>child number - {number}</h2>
      <h2>child name - {name}</h2>
      <h2>child array - {array}</h2>
      <h2>child obj - {obj.name}</h2>
    </>
  );
};

const checkProps = (prevProps: ChildProps, nextProps: ChildProps) => {
  const isNumberSame = prevProps.number === nextProps.number;
  const isNameSame = prevProps.name === nextProps.name;
  const isArraySame = prevProps.array === nextProps.array;
  const isObjSame = prevProps.obj === nextProps.obj;
  console.log("prevProps= ", prevProps);
  console.log("nextProps= ", nextProps);
  console.log("number= ", isNumberSame ? "SAME" : "DIFFERENCE");
  console.log("name= ", isNameSame ? "SAME" : "DIFFERENCE");
  console.log("array= ", isArraySame ? "SAME" : "DIFFERENCE");
  console.log("obj= ", isObjSame ? "SAME" : "DIFFERENCE");

  return isNumberSame && isNameSame && isArraySame && isObjSame;
};

export default memo(Child, checkProps);
