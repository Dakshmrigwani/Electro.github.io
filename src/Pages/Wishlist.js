import React, { createContext } from "react";
import CartContext from "../Context/WishContext";
import {wishItems} from "./items"

export const cartContext = createContext();

export default function Wishlist() {
  console.log(wishItems , "8")

  return (
    <cartContext.Provider value={wishItems}>
      <CartContext />
    </cartContext.Provider>
  );
}
