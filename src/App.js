import HeadPhone from "./Pages/Headphone";
import Body from "./Pages/Body";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Speaker from "./Pages/Speaker";
import Watches from "./Pages/Watches";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Laptops from "./Pages/Laptops";
import Smartphones from "./Pages/Smartphones";
import WishList from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import "./styles.css";


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/pages/Body" element={<Body />} />
            <Route path="/Pages/Headphone" element={<HeadPhone />} />
            <Route path="/Pages/About" element={<About />} />
            <Route path="/Pages/Services" element={<Services />} />
            <Route path="/Pages/Speaker" element={<Speaker />} />
            <Route path="/Pages/Watches" element={<Watches />} />
            <Route path="/Pages/Smartphones" element={<Smartphones />} />
            <Route path="/Pages/Laptops" element={<Laptops />} />
            <Route path="/pages/WishList" element={<WishList />} />
            <Route path="/pages/Cart" element={<Cart />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
