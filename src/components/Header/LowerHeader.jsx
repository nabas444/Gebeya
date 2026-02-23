import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lowerHeader}>
      <ul>
        <li className={classes.hover}>
          <GiHamburgerMenu />
          <span>All</span>
        </li>
        <li className={classes.hover}>Today's Deals</li>
        <li className={classes.hover}>Customer Service</li>
        <li className={classes.hover}>Registry</li>
        <li className={classes.hover}>Gift Cards</li>
        <li className={classes.hover}>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
