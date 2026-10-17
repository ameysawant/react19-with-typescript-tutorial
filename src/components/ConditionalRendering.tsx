import { useEffect, useState } from "react";
import IsLoading from "./IsLoading";
import IsError from "./IsError";

const API = "https://fakestoreapi.com/products";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<null | string>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchMyProducts = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(`API ERROR : ${response.status}`);
      }
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error: unknown) {
      console.log(error);
      setIsError("Api Error..456. ");
      // if (error instanceof Error) {
      //   setIsError("Network Api Error... ");
      // } else {
      //   setIsError("Page not load issue... ");
      // }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProducts();
  }, []);

  // console.log(products);

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError isError={isError} />;
  }

  return (
    <>
      <h2>Conditional rendering</h2>
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="" width={50} />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.rating.rate}</p>
              <p>{item.rating.count}</p>
            </div>
          );
        })
      ) : (
        <h2>product not found</h2>
      )}
    </>
  );
};

export default ConditionalRendering;
