// ...existing code...
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/Action.type";
function ProductCard({ item, product, flex, renderDesc,renderAdd}) {
  const data = item || product || {};
  const { description,image, title, id, rating = { rate: 0, count: 0 }, price } = data;

const [state, dispatch] = useContext(DataContext);
const addToCart = () => {
  dispatch({ type: Type.ADD_TO_BASKET,
     item: data });
}
  return (
    <div className={`${classes.productCard_container} ${flex ? classes.product_flexed : ""}`}>
      <Link to={`/product/${id}`} >
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate || 0} precision={0.5} />
          <small>{rating.count || 0}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} currency="USD" />
        </div>
        {renderAdd &&  <button className={classes.button} onClick={addToCart}>Add to Cart</button>}
       
      </div>
    </div>
  );
}

export default ProductCard;
// ...existing code...
