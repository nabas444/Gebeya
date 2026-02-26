import React from 'react'
import Layout from "../../components/Layout/Layout";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/Loader/Loader';
function ProductDetail() {
   const [product, setProduct] =useState({});
   const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);
  
  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard 
      
      product={product} 
      flex={true}
      renderAdd={true}


      renderDesc={true}
      />}
    </Layout>
  )
}

export default ProductDetail
