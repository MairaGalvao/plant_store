import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />

      <Store updateCartCount={updateCartCount} />
    </div>
  );
}

export default App;
