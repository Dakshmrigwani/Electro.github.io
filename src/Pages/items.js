const cartItems = [];

const addToCart = (value) => {
  const itemExists = cartItems.some((item) => item.id === value.id);

  if (!itemExists) {
    cartItems.push(value);
    console.log(cartItems, "cart");
  }
  
};


const items = () => {
  // Your code for the 'items' function
};

export { cartItems, addToCart };
export default items;
