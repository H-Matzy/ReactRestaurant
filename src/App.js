import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const displayCartHandler = () => {
    setDisplayCart(true);
  };
  const hideCartHandler = () => {
    setDisplayCart(false);
  };
  return (
    <CartProvider>
      {displayCart && <Cart onClick={hideCartHandler} />}
      <Header setDisplayCart={displayCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
