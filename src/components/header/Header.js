import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main-header ${scrolled ? "sticky-header" : " "} `}>
      <div className="header-content">
        <ul className="left">
          <Link to="/">
          <li>Home</li>
          </Link>
          <li>About</li>
          <Link to="/products">
          <li>Categories</li>
          </Link>
        </ul>
        <div className="center">Logo</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <Link to='/cart' className="link_cart">
            <CgShoppingCart />
            <span>5</span>
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}
