import React, { useState } from "react";
import "../style/Store.css";
const plantImage =
  "https://images.unsplash.com/photo-1604866830513-d54766457f45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Store({ updateCartCount }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      // Call the updateCartCount function from props and add the quantity to the cart
      updateCartCount(quantity);
      setQuantity(0); // Reset the quantity after adding to cart
    }
  };

  return (
    <section className="store-container">
      <div className="image-gallery">
        <img src={plantImage} alt="Plant" className="large-image" />
        <div className="small-images">
          <img
            src={`${plantImage}&crop=top`}
            alt="Plant Close-up 1"
            className="small-image"
          />
          <img
            src={`${plantImage}&crop=center`}
            alt="Plant Close-up 2"
            className="small-image"
          />
          <img
            src={`${plantImage}&crop=bottom`}
            alt="Plant Close-up 3"
            className="small-image"
          />
        </div>
      </div>

      <div className="product-info">
        <h2>Monstera Plant</h2>
        <p className="price">
          <span className="discounted-price">$67</span>{" "}
          <span className="save">Save 5%</span>
        </p>
        <p className="description">
          Monstera is a genus of 59 species of flowering plants in the arum
          family, Araceae, native to tropical regions of Central and South
          America.
        </p>

        <div className="quantity">
          <button onClick={handleDecrement} className="quantity-btn">
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={handleIncrement} className="quantity-btn">
            +
          </button>
        </div>

        <button className="buy-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Store;
