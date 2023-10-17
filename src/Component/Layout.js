import React, { useContext } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BsCart3, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";

function Layout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="header-toggle-buttons">
        <span className="padicon" onClick={toggleTheme}>
          {" "}
          {theme === "dark-theme" ? <BsFillSunFill /> : <BsMoonFill />}
        </span>
      </div>
    </>
  );
}

export default Layout;
