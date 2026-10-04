// Level 2 - Collections:
// string[]
// number[]
// mixed[]
// object[]
// literal
// union
// tuple
// object

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

const TypesLevel2 = () => {
  return (
    <>
      <h2>Types Level2 -</h2>
      {myName}
      {myAge}
      {isMarried ? "married" : "not marreid"}
      {null === null ? "null" : "not null"}
    </>
  );
};

export default TypesLevel2;
