import React, { useContext, useReducer, useEffect, useState } from "react";
import LayOutNone from "../Component/LayOutNone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import ReactStars from "react-stars";
import InputGroup from "react-bootstrap/InputGroup";
import Success from "../Component/Success";
import Failure from "../Component/Failure";
import { cartContext } from "../Pages/Cart";
import { removeFromCart, addToWishlist, clearCart } from "../Pages/items";
import { BsCurrencyRupee } from "react-icons/bs";
function reducer(state, action) {
  switch (action.type) {
    case "increment_quantity": {
      const { productId } = action.payload;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    }
    case "decrement_quantity": {
      const { productId } = action.payload;
      if (state[productId] > 1) {
        return {
          ...state,
          [productId]: state[productId] - 1,
        };
      }
      return state;
    }
    default:
      throw new Error();
  }
}

const initialState = {};

export default function CartContext() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartList(savedCartItems);
    savedCartItems.forEach((product) => {
      dispatch({
        type: "increment_quantity",
        payload: { productId: product.id },
      });
    });
  }, []);

  function handleIncrementQuantity(productId) {
    dispatch({ type: "increment_quantity", payload: { productId } });
  }

  function handleDecrementQuantity(productId) {
    dispatch({ type: "decrement_quantity", payload: { productId } });
  }

  function handleRemoveFromCart(product) {
    removeFromCart(product);
    const updatedCartList = cartList.filter((item) => item.id !== product.id);
    setCartList(updatedCartList);
  }

  const showDeliveryCard = cartList.some(
    (product) =>
      product.DisPrice !== null &&
      product.DisPrice !== undefined &&
      product.DisPrice !== 0
  );

  return (
    <>
      <LayOutNone>
        <div className="container">
          <div className="d-flex justify-content-start mt-2">
            <Button className="outline-primary">
              <Link to="/" className="text-decoration-none text-light">
                Back to Home Page
              </Link>
            </Button>
          </div>
          <div className="d-flex flex-column justify-content-center align-content-center mt-5">
            <div className="row">
              <div className={`col${cartList.length === 0 ? "" : " col-md-8"}`}>
                {cartList.length === 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 display-4 col-0">
                    <BsEmojiSmile />
                    <p>No content found</p>
                    <p className="text-center">
                      Please add the item to the cart
                    </p>
                  </div>
                ) : (
                  <>
                    {cartList.map((product) => (
                      <div key={product.id}>
                        <div className="card mb-3">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                src={product.image}
                                className="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">
                                  {product.LessTitle}
                                </h5>
                                <div className="card-text">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">
                                        <BsCurrencyRupee />
                                        {product.DisPrice}
                                      </b>
                                      <p className="fs-6 text-decoration-line-through">
                                        <BsCurrencyRupee />
                                        {product.ActPrice}
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars
                                        value={product.Rating}
                                        edit={false}
                                      />
                                      <p>{product.reviews}</p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    alignItems: "center",
                                  }}
                                  className="row "
                                >
                                  <div className="col-md-4 col-lg-3 col-4">
                                    <select className="form-select">
                                      <option selected>lg</option>
                                      <option value="1">sm</option>
                                      <option value="2">lg</option>
                                      <option value="3">xl</option>
                                    </select>
                                  </div>
                                  <div className="col-md-4 col-lg-3 col-4">
                                    <div className="d-flex">
                                      <Button
                                        onClick={() =>
                                          handleIncrementQuantity(product.id)
                                        }
                                        size="sm"
                                        variant="primary"
                                        className="mb-1"
                                        style={{ boxShadow: "none" }}
                                      >
                                        +
                                      </Button>
                                      <input
                                        value={state[product.id]}
                                        style={{ width: "2rem" , height: "2rem" }}
                                        readOnly
                                      />
                                      <Button
                                        size="sm"
                                        variant="primary"
                                        onClick={() =>
                                          handleDecrementQuantity(product.id)
                                        }
                                        className="mb-1"
                                        style={{ boxShadow: "none" }}
                                      >
                                        -
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-lg-3 col-4">
                                    <select className="form-select">
                                      <option selected>Blue</option>
                                      <option value="1">Red</option>
                                      <option value="2">Yellow</option>
                                      <option value="3">Green</option>
                                    </select>
                                  </div>
                                  <div className="col-lg-3 col-4">
                                    <div className="d-flex gap-2 mt-2 mt-md-0">
                                      <Button
                                        variant="light"
                                        style={{ boxShadow: "none" }}
                                        onClick={() => addToWishlist(product)}
                                      >
                                        <AiOutlineHeart />
                                      </Button>
                                      <Button
                                        variant="light"
                                        style={{ boxShadow: "none" }}
                                        onClick={() =>
                                          handleRemoveFromCart(product)
                                        }
                                      >
                                        <AiOutlineDelete />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {showDeliveryCard && (
                <div className="col col-md-4">
                  <div className="d-flex justify-content-center mt-3 mt-md-0">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <b>Delivery</b>
                        <div className="row">
                          <div className="col">
                            <p>subTotal:</p>
                            <p>Delivery:</p>
                            <p>Tax: </p>
                            <p>Total:</p>
                          </div>
                          <div className="col">
                            <b>
                              <BsCurrencyRupee />
                              {cartList
                                .reduce(
                                  (total, product) =>
                                    total +
                                    product.DisPrice * state[product.id],
                                  0
                                )
                                .toFixed(2)}
                            </b>
                            <p className="mt-3">
                              <BsCurrencyRupee />
                              50
                            </p>
                            <p>
                              <BsCurrencyRupee />
                              50
                            </p>
                            <b>
                              <BsCurrencyRupee />
                              {(
                                100 +
                                cartList.reduce(
                                  (total, product) =>
                                    total +
                                    product.DisPrice * state[product.id],
                                  0
                                )
                              ).toFixed(2)}
                            </b>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary w-100"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalsuccess"
                          style={{ boxShadow: "none" }}
                        >
                          Buy Now
                        </button>
                        <Success />
                        <button
                          className="btn btn-light w-100"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalunsucess"
                          style={{ boxShadow: "none" }}
                        >
                          Cancel
                        </button>
                        <Failure />
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </LayOutNone>
    </>
  );
}
