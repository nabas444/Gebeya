import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./Cart.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link, useLocation } from "react-router-dom";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const location = useLocation();

  // Where user came from (fallback to home)
  const from = location.state?.from || "/";

  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  return (
    <Layout>
      <section className={classes.cartSection}>
        {/* LEFT SIDE */}
        <div className={classes.cartItems}>
          <h2>Shopping Cart</h2>
          <hr />

          {basket?.length === 0 ? (
            <div className={classes.emptyCart}>
              <h3>Your Cart is Empty</h3>
              <p>
                You have no items in your cart. <br />
                Browse our products and find something you love.
              </p>

              <Link to="/" className={classes.backToShopBtn}>
                ← Back to Shop
              </Link>
            </div>
          ) : (
            <>
              {/* Continue Shopping Button */}
              <div className={classes.continueShoppingWrapper}>
                <Link to={from} className={classes.continueShoppingBtn}>
                  ← Continue Shopping
                </Link>
              </div>

              {/* Cart Items */}
              {basket.map((item, i) => (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              ))}
            </>
          )}
        </div>

        {/* RIGHT SIDE (Subtotal) */}
        {basket?.length > 0 && (
          <div className={classes.subtotalCard}>
            <div>
              <p>
                Subtotal ({basket.length} items)
              </p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments" className={classes.checkoutBtn}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;