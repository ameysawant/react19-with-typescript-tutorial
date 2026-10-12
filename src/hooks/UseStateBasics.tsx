// useState<number>(0);
// useState<string>("Kishori");
// useState<boolean>(false);
// useState<string[]>(["apple", "banana"]);
// useState<User>({ name: "Kishori", age: 45 });

import { useState } from "react";

type MyCount = number;
type Product = string;
type Product2 = {
  id: number;
  name: string;
  price: number;
};
type User = {
  name: string;
  age: number;
};

const products: Product[] = ["apple", "banana"];
const products2: Product2[] = [
  {
    id: 1,
    name: "tea",
    price: 500,
  },
  {
    id: 2,
    name: "coffee",
    price: 300,
  },
];

const UseStateBasics = () => {
  const [count, setCount] = useState<MyCount>(0);
  const [myName, setMyName] = useState("kishori");
  const [isVisible, setVisible] = useState(false);
  const [fruits, setFruits] = useState<Product[]>(products);
  const [user, setUser] = useState<User>({
    name: "kishori",
    age: 45,
  });
  const [allProducts, setAllProducts] = useState<Product2[]>(products2);

  const handleCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleMyName = () => {
    setMyName("tutorials");
  };

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  const addFruit = () => {
    setFruits((prev) => {
      console.log(prev);
      return [...prev, "orange"];
    });
  };

  const addUserAge = () => {
    setUser((prev) => {
      console.log(prev);
      return { ...prev, age: prev.age + 1 };
    });
  };

  const addPrice = () => {
    setAllProducts((prev) => {
      console.log(prev);
      return prev.map((item) => ({
        ...item,
        price: item.price + 5,
      }));
    });
  };

  console.log("component render");
  return (
    <>
      <h2>useState Basics</h2>
      <h4>{count}</h4>
      <h4>{myName}</h4>
      <h4>{isVisible ? "is visible" : "is not visible"}</h4>
      <h4>
        {user.name} is {user.age} years old
      </h4>
      <button onClick={handleCount}>add count</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMyName}>handleMyName</button>
      <button onClick={handleToggle}>handleToggle</button>
      <button onClick={addFruit}>addFruit</button>
      <button onClick={addUserAge}>addUserAge</button>
      <button onClick={addPrice}>addPrice</button>

      {fruits
        ? fruits.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        : "products not found"}

      {allProducts
        ? allProducts.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          })
        : "products not found"}
    </>
  );
};

export default UseStateBasics;
