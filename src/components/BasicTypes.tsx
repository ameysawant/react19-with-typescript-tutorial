// Basic Types Level 1
// string
// number
// boolean
// null
// undefined
// any
// unknown
// void
// never

// Basic Types Level 2
// string[]
// number[]
// mixed[]
// union
// tuple
// object
// object[]

// Basic Types Level 3
// type
// &
// interface
// extends
// optional

type MyName = string;
type MyAge = number;

const myName: MyName = "Kishori Tutorials";
const myAge: MyAge = 45;
const isMarried: boolean = true;
const value1: null = null;
const value2: undefined = undefined;
const value3: any = [];
const value4: unknown = "abc";
const value5: () => void = () => {};
const value6: () => never = () => {
  throw new Error("error");
};

type Hobbies = string[];
const hobbies: Hobbies = ["cricket", "hockey", "carrom"];

type Ages = number[];
const ages: Ages = [4, 4, 5, 65, 54, 4, 4];

type States = "maharashtra" | "jaipur" | "bangalore";
const state: States = "jaipur";
const states: States[] = ["maharashtra", "jaipur", "bangalore"];

type Countries = ["india", "usa", "china"];
const countries: Countries = ["india", "usa", "china"];

type ProductCategory = {
  category: string;
};

// type Product = ProductCategory & {
//   title: string;
//   price: number;
//   grams: string;
//   quantity: number;
// };

interface Product extends ProductCategory {
  title: string;
  price: number;
  grams: string;
  quantity?: number;
}

const product: Product = {
  title: "girnar tea",
  price: 400,
  grams: "200gm",
  // quantity: 50,
  category: "drinks",
};

const productsArray: Product[] = [
  {
    title: "girnar tea",
    price: 400,
    grams: "200gm",
    // quantity: 50,
    category: "drinks",
  },
  {
    title: "tata tea",
    price: 200,
    grams: "200gm",
    // quantity: 20,
    category: "rice",
  },
];

const BasicTypes = () => {
  return (
    <>
      <h4>basic types</h4>
      <p>my name is {myName}</p>
      <p>my age is {myAge}</p>
      <p>I am {isMarried ? "marrried" : "unmarried"}</p>
      <p>{value1 === null ? "null" : "not null"}</p>

      {hobbies.map((item, index) => {
        return (
          <p key={index}>
            {index}-{item}
          </p>
        );
      })}
    </>
  );
};

export default BasicTypes;
