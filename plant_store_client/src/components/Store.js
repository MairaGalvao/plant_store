import React, { useState } from "react";
import "../style/Store.css";

// Define the images
const plantImages = [
  "https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1585598117791-876ce25c1884?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669688397378-7631f068fa96?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Store({ updateCartCount }) {
  const [quantity, setQuantity] = useState(0);
  const [currentImage, setCurrentImage] = useState(plantImages[0]);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      updateCartCount(quantity);
      setQuantity(0);
    }
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <section className="store-container">
      <div className="image-gallery">
        <img src={currentImage} alt="Plant" className="large-image" />
        <div className="small-images">
          {plantImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Plant Close-up ${index + 1}`}
              className="small-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
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
