import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="gebeya-footer">
      {/* Back to top */}
      <div className="gebeya-footer__back-to-top"><a href="/">Back to top</a> </div>

      {/* First row: 4 columns */}
      <div className="gebeya-footer__top">
        <div className="gebeya-footer__column">
          <h3>Get to Know Us</h3>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About gebeya</a>
          <a href="#">Investor Relations</a>
          <a href="#">gebeya Devices</a>
          <a href="#">gebeya Science</a>
        </div>

        <div className="gebeya-footer__column">
          <h3>Make Money with Us</h3>
          <a href="#">Sell products on gebeya</a>
          <a href="#">Sell on gebeya Business</a>
          <a href="#">Sell apps on gebeya</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Self-Publish with Us</a>
          <a href="#">Host an gebeya Hub</a>
        </div>

        <div className="gebeya-footer__column">
          <h3>gebeya Payment Products</h3>
          <a href="#">gebeya Business Card</a>
          <a href="#">Shop with Points</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">gebeya Currency Converter</a>
        </div>

        <div className="gebeya-footer__column">
          <h3>Let Us Help You</h3>
          <a href="#">gebeya and COVID-19</a>
          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Shipping Rates &amp; Policies</a>
          <a href="#">Returns &amp; Replacements</a>
          <a href="#">Manage Your Content and Devices</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* Logo + language + country row */}
      <div className="gebeya-footer__middle">
        <div className="gebeya-footer__logo"><a href="/">gebeya.com</a></div>
        <div className="gebeya-footer__selectors">
         <button className="gebeya-footer__selector gebeya-footer__language">
  <span className="gebeya-footer__globe">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="14"
    height="14"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.18a15.7 15.7 0 00-1.38-5.01A8.03 8.03 0 0119.93 11zM12 4c.9 1.3 1.6 3.03 1.9 5H10.1c.3-1.97 1-3.7 1.9-5zM4.07 13h3.18c.23 1.8.8 3.46 1.62 4.82A8.03 8.03 0 014.07 13zm3.18-2H4.07a8.03 8.03 0 014.8-4.82A15.7 15.7 0 007.25 11zM12 20c-.9-1.3-1.6-3.03-1.9-5h3.8c-.3 1.97-1 3.7-1.9 5zm2.75-7h-5.5a13.8 13.8 0 010-2h5.5a13.8 13.8 0 010 2zm.18 4.82A15.7 15.7 0 0016.75 13h3.18a8.03 8.03 0 01-4.8 4.82z"/>
  </svg>
</span>
  <span>English</span>
  <span className="gebeya-footer__dropdown-icon">▾</span>
</button>
          <button className="gebeya-footer__selector gebeya-footer__country">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
    alt="Ethiopia Flag"
    className="gebeya-footer__flag"
  />
  <span>Ethiopia</span>
</button>
        </div>
      </div>

      {/* Services grid (bottom middle) */}
      <div className="gebeya-footer__services">
        <div className="gebeya-footer__service-column">
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Music</span>
            <span className="gebeya-footer__service-desc">
              Stream millions of songs
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Business</span>
            <span className="gebeya-footer__service-desc">
              Everything For Your Business
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">Goodreads</span>
            <span className="gebeya-footer__service-desc">
              Book reviews &amp; recommendations
            </span>
          </a>
        </div>

        <div className="gebeya-footer__service-column">
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Ads</span>
            <span className="gebeya-footer__service-desc">
              Reach customers wherever they spend their time
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Fresh</span>
            <span className="gebeya-footer__service-desc">
              Groceries &amp; More Right To Your Door
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">
              gebeya Warehouse
            </span>
            <span className="gebeya-footer__service-desc">
              Great deals on quality used products
            </span>
          </a>
        </div>

        <div className="gebeya-footer__service-column">
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Web Services</span>
            <span className="gebeya-footer__service-desc">
              Scalable Cloud Computing Services
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">Audible</span>
            <span className="gebeya-footer__service-desc">
              Listen to Books &amp; Original Audio Performances
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">
              Prime Video Direct
            </span>
            <span className="gebeya-footer__service-desc">
              Video Distribution Made Easy
            </span>
          </a>
        </div>

        <div className="gebeya-footer__service-column">
          <a href="#">
            <span className="gebeya-footer__service-title">gebeya Prime</span>
            <span className="gebeya-footer__service-desc">
              Fast, free delivery &amp; more
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">Ring</span>
            <span className="gebeya-footer__service-desc">
              Smart Home Security Systems
            </span>
          </a>
          <a href="#">
            <span className="gebeya-footer__service-title">
              gebeya Renewed
            </span>
            <span className="gebeya-footer__service-desc">
              Like-new products you can trust
            </span>
          </a>
        </div>
      </div>

      {/* Bottom legal row */}
      <div className="gebeya-footer__bottom">
        <div className="gebeya-footer__bottom-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <span className="gebeya-footer__copy">
          © 1996–2026, gebeya.com, Inc. or its affiliates
        </span>
      </div>
    </footer>
  );
};

export default Footer;