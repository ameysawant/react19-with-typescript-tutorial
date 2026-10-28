import React from "react";
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

type ProductCardProps = Product & {
  handleRemoveItem: (id: number) => void;
};

const ProductCard = ({
  id,
  title,
  description,
  category,
  price,
  image,
  rating: { rate, count },
  handleRemoveItem,
}: ProductCardProps) => {
  return (
    <>
      <div key={id} className="column">
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
