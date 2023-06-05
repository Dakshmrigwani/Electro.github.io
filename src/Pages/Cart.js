import React, { createContext } from "react";
import CartContext from "../Context/CartContext";
import {cartItems} from "./items"

export const cartContext = createContext();

export default function Cart() {
  console.log(cartItems , "total")

  return (
    <cartContext.Provider value={cartItems}>
      <CartContext />
    </cartContext.Provider>
  );
}
