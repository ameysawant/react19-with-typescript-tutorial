import React from "react";
import ProductCard from "./ProductCard";

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

type ProductGridProps = {
  displayProducts: Product[];
};

const ProductGrid = ({ displayProducts }: ProductGridProps) => {
  return (
    <>
      {displayProducts.length > 0 &&
        displayProducts.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
    </>
  );
};

export default ProductGrid;
