import React from "react";
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
import "../style/Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="store-name">
          My Plant store
        </a>
      </div>

      <ul className="navbar-menu">
        <li>Sales</li>
        <li>Vases</li>
        <li>House plants</li>
        <li>Flowers ▼</li>
      </ul>

      <div className="navbar-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <div className="cart-container">
          <FaShoppingBag className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        <div className="profile-icon">
          <FaUser />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
