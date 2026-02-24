import React from "react";
import classes from "./Category.module.css";
import {Link} from "react-router-dom";
function CategoryCard({ data }) {

  return (
    <div className={classes.categoryCard}>
      <Link to={`/category/${data.name}`} className={classes.cardLink}>
        <h2 className={classes.cardTitle}>{data.title}</h2>

        <div className={classes.imageWrapper}>
          <img src={data.imageLink} alt={data.title} />
        </div>

        <p className={classes.shopNow}>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
