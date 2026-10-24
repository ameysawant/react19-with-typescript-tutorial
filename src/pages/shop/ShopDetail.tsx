import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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

const ShopDetail = () => {
  const { id } = useParams();

  const [singleProduct, setsingleProduct] = useState<Product | null>(null);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setsingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAllProducts();
    }
  }, [id]);

  if (!singleProduct) {
    return <h2>loading.........</h2>;
  }

  console.log(singleProduct);
  return (
    <div className="shopdetail">
      <img src={singleProduct?.image} alt="" />
      <p>{singleProduct?.title}</p>
      <p>{singleProduct?.description}</p>
      <p>{singleProduct?.category}</p>
      <p>{singleProduct?.price}</p>
      <p>{singleProduct?.rating?.rate}</p>
      <p>{singleProduct?.rating?.count}</p>
    </div>
  );
};

export default ShopDetail;
