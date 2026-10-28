import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import ProductGrid from "./ProductGrid";

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
  const selectedSortBy = searchParams.get("sortBy") || "default";
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  // console.log(location);

  const fetchAllProducts = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategories = (categoryItem: string) => {
    let newParams = new URLSearchParams(searchParams);
    if (categoryItem === "all") {
      // setSearchParams({});
      newParams.delete("category");
    } else {
      // setSearchParams({ category: categoryItem });
      newParams.set("category", categoryItem);
    }
    setSearchParams(newParams);
  };

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newParams = new URLSearchParams(searchParams);
    if (e.target.value === "default") {
      // setSearchParams({});
      newParams.delete("sortBy");
    } else {
      // setSearchParams({ sortBy: e.target.value });
      newParams.set("sortBy", e.target.value);
    }
    setSearchParams(newParams);
  };

  const showFilteredProducts = () => {
    let filteredProducts = selectedCategory
      ? products.filter((item) => item.category === selectedCategory)
      : products;

    if (selectedSortBy === "low") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price,
      );
    } else if (selectedSortBy === "high") {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price,
      );
    }

    return filteredProducts;
  };

  const handleRemoveItem = (id: number) => {
    setProducts((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const displayProducts = showFilteredProducts();

  if (isLoading) {
    return <h2>loading....</h2>;
  }

  return (
    <>
      <div className="selectmenu">
        <select value={selectedSortBy} onChange={handleSortBy}>
          <option value="default">default</option>
          <option value="low">low</option>
          <option value="high">high</option>
        </select>
      </div>

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
        {/* {displayProducts.length > 0 &&
          displayProducts.map((item) => {
            return (
              <div key={item.id} className="column">
                <Link
                  to={`/shopdetail/${item.id}/${item.title.split(" ").join("-")}${location.search}`}
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
          })} */}
        <ProductGrid
          displayProducts={displayProducts}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
    </>
  );
};

export default ShopList;
