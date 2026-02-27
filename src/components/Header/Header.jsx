import React, { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const flagSrc =
    language === "en"
      ? "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg";

  const flagAlt = language === "en" ? "US Flag" : "Ethiopian Flag";
const [{basket}, dispatch] = useContext(DataContext);
const totalItems = basket.reduce((sum, item) => sum + (item.amount || 0), 0);
  return (
    <section className={classes.fixed}>
      <div className={classes.sectionContainer}>
        {/* LEFT */}
        <div className={classes.headerLeft}>
          <Link to="/" className={`${classes.logo} ${classes.hover}`}>
            <img src="/gebeyacom.png" alt="Gebeya Logo" />
          </Link>

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
            <img className={classes.flag} src={flagSrc} alt={flagAlt} />

            <select
              className={classes.languageSelect}
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="am">AM</option>
            </select>
          </div>

          <Link to="/auth" className={`${classes.navItem} ${classes.hover}`}>
            <p>Hello, Sign in</p>
            <span>Account & Lists</span>
          </Link>

          <Link to="/Orders" className={`${classes.navItem} ${classes.hover}`}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/Cart" className={`${classes.cart} ${classes.hover}`}>
            <div className={classes.cartIconWrapper}>
              <FiShoppingCart />
              <span className={classes.cartCount}>{totalItems}</span>
            </div>
            <span className={classes.cartText}>Cart</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header;
