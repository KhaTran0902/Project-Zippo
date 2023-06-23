import React, { useContext } from "react";
import { Form, useParams } from "react-router-dom";
import AppConText, { ConText } from "../../context/AppConText";
import "./Details.scss";
import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";
import Realated from "./related/Related";
import Related from "./related/Related";
export default function Details() {
  const { id } = useParams();
  const [products, setProducts] = useContext(ConText);

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(details);
  return (
    <>
      {details.map((product) => (
        <div className="single-product-main-content">
          <div className="layout">
            <div className="single-product-page">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <span className="name">{product.title}</span>
                <span className="price">{product.price}</span>
                <span className="desc">{product.content}</span>

                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                  </div>
                  <button className="add-to-cart-button">
                    <FaCartPlus size={20} />
                    ADD TO CART
                  </button>
                </div>
                <span className="divider" />
                <div className="info-item">
                  <span className="text-bold">
                    Category:
                    <span>{product.title1}</span>
                  </span>
                
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                  </span>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Related/>
    </>
  );
}
