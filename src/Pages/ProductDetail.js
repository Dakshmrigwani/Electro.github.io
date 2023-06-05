import React, { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailData } from "../Component/data";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { CiLocationOn } from "react-icons/ci";
import { BsPencil, BsCurrencyRupee } from "react-icons/bs";
import ReactStars from "react-stars";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addToCart, addToWishlist } from "./items";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        age: state.age + 1,
      };
    }
    case "decremented_age": {
      return {
        age: state.age - 1,
      };
    }
  }
  throw new Error();
}

const initialState = { age: 1 };

function ProductDetail() {
  const { productId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const tax = 50.0;
  const deliveryCharge = 50.0;

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleDecrementAge() {
    if (state.age > 1) {
      dispatch({ type: "decremented_age" });
    }
  }

  const selectedProduct = ProductDetailData.find(
    (product) => product.id === parseInt(productId)
  );

  const total = (
    selectedProduct.DisPrice * state.age +
    tax +
    deliveryCharge
  ).toFixed(2);

  const price = (selectedProduct.DisPrice * state.age).toFixed(2);

  return (
    <>
      <Layout>
        {selectedProduct && (
          <div className="container my-5">
            <Row>
              <Col md={4}>
                <Carousel
                  selectedItem={mainIndex}
                  onChange={(index) => setMainIndex(index)}
                  emulateTouch={true}
                  infiniteLoop={true}
                  showThumbs={true}
                  thumbWidth={80}
                  dynamicHeight={false}
                  className=""
                >
                  <div>
                    <img src={selectedProduct.image} alt="" />
                  </div>
                  <div>
                    <img src={selectedProduct.image1} alt="" />
                  </div>
                  <div>
                    <img src={selectedProduct.image2} alt="" />
                  </div>
                  <div>
                    <img src={selectedProduct.image3} alt="" />
                  </div>
                  <div>
                    <img src={selectedProduct.image4} alt="" />
                  </div>
                  <div>
                    <img src={selectedProduct.image5} alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col md={5}>
                <h2>{selectedProduct.MoreTitle}</h2>
                <p className="d-inline">
                  <p className="fs-3 text-decoration-line-through d-inline">
                    <BsCurrencyRupee />
                    {selectedProduct.ActPrice}
                  </p>
                </p>
                <p className="">
                  <p className="fs-6 d-inline">
                    <BsCurrencyRupee />
                    {selectedProduct.DisPrice}
                  </p>
                </p>
                <p>{selectedProduct.disPercent}% Off</p>
                <ReactStars value={selectedProduct.Rating} />
                <p>
                  Rating: {selectedProduct.Rating} ({selectedProduct.reviews}{" "}
                  reviews)
                </p>
                <b>Here are some details</b>
                <ul className="mt-4">
                  <li>{selectedProduct.description1}</li>
                  <li>{selectedProduct.description2}</li>
                  <li>{selectedProduct.description3}</li>
                  <li>{selectedProduct.description4}</li>
                  <li>{selectedProduct.description5}</li>
                </ul>
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                  <div className="">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title className="fs-6 text-secondary">
                          Order Summary
                        </Card.Title>

                        <div className="my-2">
                          <hr />
                        </div>
                        <Row>
                          <Col md={6}>
                            <div className="d-grid">
                              <Row>
                                <Col md={8}>
                                  <b>Delievery Date</b>
                                </Col>
                                <Col md={4}>
                                  <b>3days</b>
                                </Col>
                              </Row>

                              <b>Sent To</b>
                              <div className="d-inline-flex">
                                <span className="me-1">
                                  <CiLocationOn />
                                </span>
                                <span
                                  className="d-inline-block text-truncate"
                                  style={{ maxWidth: "150px" }}
                                >
                                  Praeterea iter est quasdam res quas ex
                                  communi.
                                </span>
                                <span className="d-flex justify-content-end">
                                  <BsPencil />
                                </span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <div className="mt-3 row">
                          <span className="col-4">
                            <b>Quantity</b>
                          </span>
                          <span className="col-8 text-end">
                            <Button
                              onClick={handleButtonClick}
                              size="sm"
                              variant="light"
                              className="mb-1"
                              style={{ boxShadow: "none" }}
                            >
                              +
                            </Button>

                            <input
                              value={state.age}
                              style={{ width: "2rem" }}
                            />

                            <Button
                              size="sm"
                              variant="light"
                              onClick={handleDecrementAge}
                              className="mb-1"
                              style={{ boxShadow: "none" }}
                            >
                              -
                            </Button>
                          </span>
                        </div>
                        <div className="mt-3 row">
                          <span className="col-5">
                            <b>Price</b>
                          </span>
                          <span className="col-7 text-end">
                            <b>
                              <BsCurrencyRupee />
                              {price}
                            </b>
                          </span>
                        </div>
                        <div className="row">
                          <span className="col-5">
                            <b>Tax</b>
                          </span>
                          <span className="col-7 text-end">
                            <b>
                              <BsCurrencyRupee />
                              50.00
                            </b>
                          </span>
                        </div>
                        <div className="row">
                          <span className="col-8">
                            <b>Delievery charge</b>
                          </span>
                          <span className="text-end col-4">
                            <b>
                              <BsCurrencyRupee />
                              50.00
                            </b>
                          </span>
                        </div>
                        <hr />
                        <div className="row">
                          <span className="col-6">
                            <b>Total</b>
                          </span>
                          <span className="text-end col-6">
                            <b>
                              <BsCurrencyRupee />
                              {total}
                            </b>
                          </span>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <Button
                              style={{ boxShadow: "none" }}
                              onClick={() => addToCart(selectedProduct)}
                            >
                              Add to Cart
                            </Button>
                          </Row>
                          <Row>
                            <Button
                              variant="light"
                              style={{ boxShadow: "none" }}
                              onClick={() => addToWishlist(selectedProduct)}
                            >
                              Add to Wishlist
                            </Button>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Layout>
    </>
  );
}

export default ProductDetail;
