import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

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
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const uniqueCategories = ["all"];
      data.forEach((item: Product) => {
        if (!uniqueCategories.includes(item.category)) {
          uniqueCategories.push(item.category);
        }
      });

      setCategories(uniqueCategories);

      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategories = (categoryItem: string) => {
    if (categoryItem === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryItem });
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  return (
    <>
      <div className="buttons">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <button key={index} onClick={() => handleCategories(category)}>
                {category}
              </button>
            );
          })}
      </div>
      <div className="shoplist">
        {filteredProducts.length > 0 &&
          filteredProducts.map((item) => {
            return (
              <div key={item.id} className="column">
                <Link
                  to={`/shopdetail/${item.id}/${item.title.split(" ").join("-")}`}
                >
                  <img src={item.image} alt="" />
                </Link>
                <p>title: {item.title}</p>
                <br />
                <p>desc: {item.description}</p>
                <br />
                <p>price: {item.price}</p>
                <br />
                <p>category: {item.category}</p>
                <br />
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
