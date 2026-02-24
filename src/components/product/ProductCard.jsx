// ...existing code...
import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ item, product }) {
  const data = item || product || {};
  const { image, title, id, rating = { rate: 0, count: 0 }, price } = data;
  return (
    <div className={`${classes.productCard_container}`}>
      <Link to={`/product/${id}`} >
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate || 0} precision={0.5} />
          <small>{rating.count || 0}</small>
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
