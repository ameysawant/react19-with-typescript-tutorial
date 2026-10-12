// useState<number>(0);
// useState<string>("Kishori");
// useState<boolean>(false);
// useState<string[]>(["apple", "banana"]);
// useState<User>({ name: "Kishori", age: 45 });
// useState<Product>({ id: 1, name: "tea", price: 500 });

import { useState } from "react";

type User = {
  name: string;
  age: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

const data: Product[] = [
  {
    id: 1,
    name: "tea",
    price: 500,
  },
  {
    id: 2,
    name: "coffee",
    price: 700,
  },
];

const UseStateExamples = () => {
  const [count, setCount] = useState<number>(0);
  const [myName, setMyName] = useState<string>("kishori");
  const [isVisible, setVisible] = useState<boolean>(false);
  const [fruits, setFruits] = useState<string[]>(["apple", "banana"]);
  const [user, setUser] = useState<User>({
    name: "kishori",
    age: 45,
  });
  const [products, setProducts] = useState<Product[]>(data);

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

  const handleFruits = () => {
    setFruits((prev) => {
      console.log(prev);
      return [...prev, "orange"];
    });
  };

  const handleAge = () => {
    setUser((prev) => {
      console.log(prev);
      return { ...prev, age: prev.age + 1 };
    });
  };

  const handleProducts = () => {
    setProducts((prev) => {
      console.log(prev);
      return prev.map((item) => {
        return { ...item, price: item.price + 5 };
      });
    });
  };

  return (
    <>
      <h2>UseStateExamples</h2>
      <h4>{count}</h4>
      <h4>{myName}</h4>
      <h4>{isVisible ? "user is visible" : "not visible"}</h4>
      <button onClick={handleCount}>add count</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMyName}>change name</button>
      <button onClick={handleToggle}>toggle</button>
      <button onClick={handleFruits}>add fruit</button>
      <button onClick={handleAge}>add age</button>
      <button onClick={handleProducts}>add product price</button>

      {fruits
        ? fruits.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        : "fruits not available"}

      <p>{user ? user.name : "not found"}</p>
      <p>{user ? user.age : "not found"}</p>

      {products
        ? products.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          })
        : "fruits not available"}
    </>
  );
};

export default UseStateExamples;
