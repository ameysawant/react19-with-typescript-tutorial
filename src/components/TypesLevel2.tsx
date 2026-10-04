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

// Level 2 - Collections:
// string[]
// number[]
// mixed[]
// union
// tuple
// object
// object[]

type Cities = "mumbai" | "rajasthan" | "jaipur";
const cities: Cities[] = ["mumbai", "rajasthan", "jaipur"];
const city: Cities = "mumbai";

type Countries = ["india", "australia", "china"];
const countries: Countries = ["india", "australia", "china"];

type Product = {
  title: string;
  price: number;
  grams: string;
};

const product: Product = {
  title: "Girnar tea",
  price: 500,
  grams: "250 grams",
};

const myarray: Product[] = [
  {
    title: "Girnar tea",
    price: 500,
    grams: "250 grams",
  },
];

const TypesLevel2 = () => {
  return (
    <>
      <h2>Types Level2 -</h2>
    </>
  );
};

export default TypesLevel2;
