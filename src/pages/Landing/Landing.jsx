import React from 'react'
import Carousel from "../../components/carousel/CarouselEffect";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import Layout from "../../components/Layout/Layout"
function Landing() {
  return (
    <div>
      <Layout>
     <Carousel />
      <Category />
      <Product />
      </Layout>  
    </div>
  )
}

export default Landing