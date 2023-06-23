import React from "react";
import { useContext } from "react";
import { ConText } from "../../context/AppConText";
import "./Products.scss";
import { Link } from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useContext(ConText);

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
        <div className="products-container">
          <div className="sec-heading">Popular products</div>
          <div className="products">
            {products.map((product) => (
              <div className="products-card" key={product._id}>
                <div className="thumbnail">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.img} />
                  </Link>
                </div>

                <div className="prod-details">
                  <span className="name">{product.title}</span>
                  <span className="price">$ {product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
