import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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

const ShopList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div className="shoplist">
        {products.length > 0 &&
          products.map((item) => {
            return (
              <div key={item.id} className="column">
                <Link
                  to={`/shopdetail/${item.id}/${item.title.split(" ").join("-")}`}
                >
                  <img src={item.image} alt="" />
                </Link>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p>{item.rating.rate}</p>
                <p>{item.rating.count}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShopList;
