import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <a href="/shop">Shop</a>
          <a href="/orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </>
  );
}
