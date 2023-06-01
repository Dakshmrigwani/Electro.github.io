const cartItems = [];

const addToCart = (value) => {
  const itemExists = cartItems.some((item) => item.id === value.id);

  if (!itemExists) {
    cartItems.push(value);
    console.log(cartItems, "Added to cart");
  }
};

const removeFromCart = (value) => {
  const itemIndex = cartItems.findIndex((item) => item.id === value.id);

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    console.log(cartItems, "Removed from cart");
  }
};

const items = () => {
  // Your code for the 'items' function
};

export { cartItems, addToCart, removeFromCart };
export default items;
