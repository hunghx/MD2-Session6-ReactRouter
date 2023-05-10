import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../product/products";

export default function ProductDetail() {
  const id = useParams().productId;

  return (
    <div>
      {products.map((pro) =>
        pro.id == id ? (
          <div key={pro.id}>
            <p>{pro.id}</p>
            <span>{pro.name}</span>
            <div>{pro.price}</div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
