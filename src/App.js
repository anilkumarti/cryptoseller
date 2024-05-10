import { useState } from "react";

import FooterBoot from "./components/FooterBoot";
import HeaderBoot from "./components/HeaderBoot";

import MainBrandName from "./components/MainBrandName";
import Products from "./components/Products";

import Cart from "./components/Cart";
import Provider from "./components/context/Provider";

function App() {
  const [showCart, setShowCart] = useState(true);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const musicProducts = [
    { title: "Album 1", imageSrc: "./img/Album 1.png", price: "12.99" },
    { title: "Album 2", imageSrc: "./img/Album 2.png", price: "14.99" },
    { title: "Album 3", imageSrc: "./img/Album 3.png", price: "9.99" },
    { title: "Album 4", imageSrc: "./img/Album 4.png", price: "19.99" },
  ];
  const merchProducts = [
    { title: "T-Shirt", imageSrc: "./img/Shirt.png", price: "19.99" },
    { title: "Coffee Cup", imageSrc: "./img/Cofee.png", price: "6.99" },
  ];
  return (
    <Provider>
      <HeaderBoot onShowCart={showCartHandler} />
      {showCart && (
        <Cart  hideCart={hideCartHandler} />
      )}
      <MainBrandName></MainBrandName>
      <Products products={musicProducts} title="Music" />
      <Products products={merchProducts} title="Merchandise" />
      {/* <Items products={musicProducts}/> */}

      <FooterBoot />
    </Provider>
  );
}

export default App;
