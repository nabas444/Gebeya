import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes.headerContainer}>
        {/* LEFT */}
        <div className={classes.headerLeft}>
          <a href="/" className={`${classes.logo} ${classes.hover}`}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon Logo"
            />
          </a>

          <div className={`${classes.delivery} ${classes.hover}`}>
            <CiLocationOn className={classes.locationIcon} />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className={classes.headerCenter}>
          <div className={classes.search}>
            <select className={classes.searchSelect}>
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search Amazon"
              className={classes.searchInput}
            />

            <button className={classes.searchButton}>
              <IoSearchSharp />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={classes.headerRight}>
          <div className={`${classes.locale} ${classes.hover}`}>
            <img
              className={classes.flag}
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
            />

            <select className={classes.languageSelect}>
              <option value="en">EN</option>
              <option value="am">AM</option>
            </select>
          </div>

          <a href="/signin" className={`${classes.navItem} ${classes.hover}`}>
            <p>Hello, Sign in</p>
            <span>Account & Lists</span>
          </a>

          <a href="/orders" className={`${classes.navItem} ${classes.hover}`}>
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          <a href="/cart" className={`${classes.cart} ${classes.hover}`}>
            <div className={classes.cartIconWrapper}>
              <FiShoppingCart />
              <span className={classes.cartCount}>0</span>
            </div>
            <span className={classes.cartText}>Cart</span>
          </a>
        </div>
      </div>

      <LowerHeader />
    </header>
  );
}

export default Header;
