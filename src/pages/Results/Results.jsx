import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/product/ProductCard";
import classes from "./Results.module.css";
import Loader from "../../components/Loader/Loader";
function Results() {
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)

      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setIsLoading(false));
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: 30 }}>Results for : {categoryName}</h1>
        <p style={{ padding: 30 }}>Category/{categoryName}</p>
        <hr />
{isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
