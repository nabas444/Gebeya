import React from 'react'
import Layout from "../../components/Layout/Layout";
import classes from "./Cart.module.css";  
import { DataContext } from "../../components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductCard from '../../components/product/ProductCard';
function Cart() {
  return (
    <Layout>
      <section className={classes.cartSection}>
        <div className={classes.cartItems}>
          <h2>Shopping Cart</h2>

          <h3>Your Cart is Empty</h3>
          <hr />
          {
            basket?.length==0 ? (<p>You have no items in your cart. <br /> To buy one or more items, click "Add to Cart" next to the item.</p>) : (
              basket?.map((item,i) => {
              return <ProductCard
              key={i}
               product={item} 
               renderDesc={true} 
               renderAdd={false}
               flex={true}
               />
              }
            )
          )} 
        
        </div>
        <div className={classes.cartSummary}></div>
      </section>
    </Layout>
  )
}

export default Cart