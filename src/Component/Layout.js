import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <NavBar className="z-1" />
      <main className="z-2">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
