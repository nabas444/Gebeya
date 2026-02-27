import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./Cart.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link, useLocation } from "react-router-dom";
import { Type } from "../../utility/Action.type";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const location = useLocation();

  // Where user came from (fallback to home)
  const from = location.state?.from || "/";

  // Total price
  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);
  // Total items
  const totalItems = basket.reduce((sum, item) => sum + item.amount, 0);
  const handleIncrement = (id) => {
    dispatch({ type: Type.INCREMENT_ITEM, id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: Type.DECREMENT_ITEM, id });
  };

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
              {basket.map((item) => (
                <div key={item.id} className={classes.cartItemRow}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    renderAdd={true} // show Add to Cart button
                    flex={true}
                  />
                  <div className={classes.qtyControls}>
                    <button
                      className={classes.qtyButton}
                      onClick={() => handleDecrement(item.id)}
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      -
                    </button>
                    <span className={classes.qtyValue}>{item.amount}</span>
                    <button
                      className={classes.qtyButton}
                      onClick={() => handleIncrement(item.id)}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT SIDE (Subtotal) */}
        {basket?.length > 0 && (
          <div className={classes.subtotalCard}>
            <div>
              <p>Subtotal ({totalItems} items)</p>
              <CurrencyFormat amount={total} currency="USD" />
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
