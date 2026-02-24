import React from 'react'
import Layout from "../../components/Layout/Layout";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from '../../components/product/ProductCard';
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] =useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [productId]);
  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  )
}

export default ProductDetail