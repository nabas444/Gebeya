// ...existing code...
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
function ProductCard({ item }) {
  const { image, title, id, rating, price } = item;
  return (
    <div className={`${classes.productCard_container}`}>
      <a href="#">
        <img src={image} alt={title} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.5} />
          <small>{rating.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} currency="USD" />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
// ...existing code...
