import React from "react";
import { categoryFullInfos as categoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.categoryContainer}>
      {categoryInfos.map((category, index) => (
        <CategoryCard key={index} data={category} />
      ))}
    </section>
  );
}

export default Category;
