import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.categoryCard}>
      <a href="#" className={classes.cardLink}>
        <h2 className={classes.cardTitle}>{data.title}</h2>

        <div className={classes.imageWrapper}>
          <img src={data.imageLink} alt={data.title} />
        </div>

        <p className={classes.shopNow}>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
