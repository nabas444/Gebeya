// ...existing code...
import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className={classes.product_container}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default Product;
// ...existing code...
