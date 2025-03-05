import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0); // Declare cartCount state

  // Function to update cartCount
  const updateCartCount = (quantity) => {
    setCartCount(cartCount + quantity); // Update cartCount with the added quantity
  };

  return (
    <div className="App">
      {/* Pass cartCount to Navbar */}
      <Navbar cartCount={cartCount} />

      {/* Pass updateCartCount to Store */}
      <Store updateCartCount={updateCartCount} />
    </div>
  );
}

export default App;
