import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import {
  ProductContext,
  useProductContext,
} from "@/context/ProductContextProvider";

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

type ProductCardProps = Product & {};

const ProductCard = ({
  id,
  title,
  description,
  category,
  price,
  image,
  rating: { rate, count },
}: ProductCardProps) => {
  const location = useLocation();
  const { handleRemoveItem } = useProductContext();

  return (
    <>
      <div className="column">
        <Link
          to={`/shopdetail/${id}/${title.split(" ").join("-")}${location.search}`}
        >
          <img src={image} alt="" />
        </Link>
        <p>title: {title}</p>
        <br />
        <p>desc: {description}</p>
        <br />
        <p>price: {price}</p>
        <br />
        <p>category: {category}</p>
        <br />
        <p>{rate}</p>
        <p>{count}</p>
        <button onClick={() => handleRemoveItem(id)}>remove this item</button>
      </div>
    </>
  );
};

export default ProductCard;
