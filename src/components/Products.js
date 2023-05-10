import React, { useEffect } from "react";
import { products } from "../product/products";
import { Link, useLocation, useSearchParams } from "react-router-dom";
export default function Products() {
  const [searchParam, setSearchParam] = useSearchParams();
  const path = useLocation();
  let id = searchParam.get("id");
  let name = searchParam.get("name");
  console.log("====================================");
  console.log(id + "       " + name);
  console.log("====================================");
  useEffect(() => {
    window && window.scrollTo(0, 0);
  }, [path]);
  return (
    <div>
      <h1>Products</h1>
      {products.map((pro) => (
        <Link to={"/products/" + pro.id} key={pro.id}>
          <p>{pro.id}</p>
          <span>{pro.name}</span>
        </Link>
      ))}
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
}
