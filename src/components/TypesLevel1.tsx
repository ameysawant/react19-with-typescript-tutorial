// Level 1 - Basic Types:
// string
// number
// boolean
// null
// undefined
// any
// unknown
// void
// never

type MyName = string;
type MyAge = number;

const myName: MyName = "Kishori";
const myAge: MyAge = 45;
const isMarried: boolean = false;
const value1: null = null;
const value2: undefined = undefined;
const value3: any = 456;
const value4: unknown = "abc";
const value5: () => void = () => {};
const value6: () => never = () => {
  throw new Error("error");
};

const TypesLevel1 = () => {
  return (
    <>
      <h2>Types Level1 -</h2>
      {myName}
      {myAge}
      {isMarried ? "married" : "not marreid"}
      {null === null ? "null" : "not null"}
    </>
  );
};

export default TypesLevel1;
