// Load cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// Remove item from cart
const removeFromCart = (value) => {
  const itemIndex = cartItems.findIndex((item) => item.id === value.id);

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    console.log(cartItems, "Removed from cart");
    saveCartItemsToLocalStorage(); // Save updated cart items to localStorage
  }
};

// Add item to car
const addToCart = (value) => {
  const itemExists = cartItems.some((item) => item.id === value.id);

  if (!itemExists) {
    cartItems.push(value);
    console.log(cartItems, "Added to cart");

    saveCartItemsToLocalStorage(); // Save updated cart items to localStorage
  }
};

const clearCart = () => {
  cartItems.length = 0;
  saveCartItemsToLocalStorage(); // Save the updated cart items to localStorage

  const clearCartEvent = new CustomEvent("cartCleared");
  document.dispatchEvent(clearCartEvent); // Trigger the custom event
};

const wishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

// Remove item from wishlist
const removeFromWishlist = (value) => {
  const itemIndexWishlist = wishItems.findIndex((item) => item.id === value.id);

  if (itemIndexWishlist !== -1) {
    wishItems.splice(itemIndexWishlist, 1);
    console.log(wishItems, "Removed from Wishlist");
    saveWishlistItemsToLocalStorage(); // Save updated wishlist items to localStorage
  }
};

// Add item to wishlist
const addToWishlist = (value) => {
  const itemExistsWishlist = wishItems.some((item) => item.id === value.id);

  if (!itemExistsWishlist) {
    wishItems.push(value);
    console.log(wishItems, "Added to wishlist");
    saveWishlistItemsToLocalStorage(); // Save updated wishlist items to localStorage
  }
};

const getCartItems = () => {
  return cartItems;
};

// Save cart items to localStorage
const saveCartItemsToLocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// Save wishlist items to localStorage
const saveWishlistItemsToLocalStorage = () => {
  localStorage.setItem("wishItems", JSON.stringify(wishItems));
};

export {
  cartItems,
  wishItems,
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  getCartItems,
  clearCart
};
