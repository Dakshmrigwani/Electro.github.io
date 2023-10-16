import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import the ThemeProvider
import "./Style/styles.css"; // Import any common styles you have

// Import your page components
import HeadPhone from "./Pages/Headphone";
import Body from "./Pages/Body";
import Speaker from "./Pages/Speaker";
import Watch from "./Pages/Watches";
import Laptops from "./Pages/Laptops";
import Smartphones from "./Pages/Smartphones";
import WishList from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import Error from "./Pages/Error";
import ProductDetail from "./Pages/ProductDetail";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`App ${theme}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/pages/Body" element={<Body />} />
            <Route path="/Pages/Headphone" element={<HeadPhone />} />
            <Route path="/Pages/Speaker" element={<Speaker />} />
            <Route path="/Pages/Watch" element={<Watch />} />
            <Route path="/Pages/Smartphones" element={<Smartphones />} />
            <Route path="/Pages/Laptops" element={<Laptops />} />
            <Route path="/pages/WishList" element={<WishList />} />
            <Route path="/pages/Cart" element={<Cart />} />
            <Route path="/pages/SignIn" element={<SignIn />} />
            <Route path="*" element={<Error />} />
            <Route path="/AllProducts/:productId" element={<ProductDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
