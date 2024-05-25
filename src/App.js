import { useState } from "react";
import Home from "./components/pages/Home";
import FooterBoot from "./components/FooterBoot";
import HeaderBoot from "./components/HeaderBoot";
import ContactUs from "./components/pages/ContactUs";
import MainBrandName from "./components/MainBrandName";
import Products from "./components/Products";
import About from "./components/pages/About";
import Cart from "./components/Cart";
import Provider from "./components/context/Provider";
import { BrowserRouter as Router , Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


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
        <Router>
        <HeaderBoot onShowCart={showCartHandler} />
        {showCart && <Cart hideCart={hideCartHandler} />}
   <MainBrandName/>

<Switch>
  
  <Route path='/store/merch' > <Products products={merchProducts} title="Merchanidise" /> </Route>
  <Route path='/store/music' > {<Products products={musicProducts} title="Music" />}</Route>
  <Route path="/contact" component={ContactUs} /> 
   <Route path='/about' component={About}  />
   <Route path="/" component={Home}/>
  
</Switch>
        
        {/* <Products products={merchProducts} title="Merchandise" /> */}
        {/* <Items products={musicProducts}/> */}

        <FooterBoot />

        </Router>
      </Provider>
 
  );
}

export default App;
