import React, { createContext } from "react";
import { CartList } from "../Component/data";
import CartContext from "./CartContext"


export const cartContext = createContext()
export default function Cart() {

  return (
    <>
     <cartContext.Provider value={CartList}>
        <CartContext />
      </cartContext.Provider>
    </>
  );
}
