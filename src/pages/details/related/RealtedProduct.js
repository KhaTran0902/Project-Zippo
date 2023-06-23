import React from "react";
import { Data1 } from "../../../components/fetchdata/Data";
import { Link } from "react-router-dom";
import "./RealtedProduct.scss"
export default function RealtedProducts () {
    return (
        <>
              {Data1.map((item) => (
        <div className="products-card" key={item.id}>
          <div className="thumbnails_img">
            <Link to={`/products/${item.id}`}>
            <img src={item.img} />
            </Link>
          </div>
          <div className="prod-details">
            <span className="name">{item.title}</span>
            <span className="price">$ {item.price}</span>
          </div>
        </div>
      ))}
        </>
    )
}