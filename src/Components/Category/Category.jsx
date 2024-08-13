import React from "react";
import { categoryInfo } from "./CategoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos, cmap) => (
        <CategoryCard data={infos} key={cmap} />
      ))}
    </section>
  );
}

export default Category;
