import { memo } from "react";

type Obj = {
  name: string;
};

type ChildProps = {
  // props: number | string | boolean | string[];
  props: Obj;
  onClick: () => void;
  child: number;
};

const Child = ({ props, onClick, child }: ChildProps) => {
  console.log("child rendered");
  return (
    <>
      {/* <h2>child {props}</h2> */}
      <h2>child {props.name}</h2>
      <h2>child count inside child{child}</h2>
      <button onClick={onClick}>child click</button>
    </>
  );
};

export default memo(Child);
