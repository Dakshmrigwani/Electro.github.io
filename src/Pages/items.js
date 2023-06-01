// Load cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const removeFromCart = (value) => {
  const itemIndex = cartItems.findIndex((item) => item.id === value.id);

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    console.log(cartItems, "Removed from cart");
    saveCartItemsToLocalStorage(); // Save updated cart items to localStorage
  }
};

const addToCart = (value) => {
  const itemExists = cartItems.some((item) => item.id === value.id);

  if (!itemExists) {
    cartItems.push(value);
    console.log(cartItems, "Added to cart");
    saveCartItemsToLocalStorage(); // Save updated cart items to localStorage
  }
};

const items = () => {
  return cartItems;
};

// Save cart items to localStorage
const saveCartItemsToLocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export { cartItems, addToCart, removeFromCart };
export default items;
