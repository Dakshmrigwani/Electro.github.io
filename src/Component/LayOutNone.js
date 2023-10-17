import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BsCart3, BsMoonFill, BsFillSunFill } from "react-icons/bs";

function LayOutNone({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <main>{children}</main>
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

export default LayOutNone;
