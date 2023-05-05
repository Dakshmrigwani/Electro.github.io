import React, { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { bodyList } from "../Component/data";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AliceCarousel from "react-alice-carousel";
import { CiLocationOn } from "react-icons/ci";
import { BsPencil } from "react-icons/bs";
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
  "https://m.media-amazon.com/images/I/41ogno7CdvL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/51U8KSa8qsL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/41d6iHtmzAL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/418ugj3ZEBL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/41d6iHtmzAL._SS40_.jpg",
];

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

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleDecrementAge() {
    dispatch({ type: "decremented_age" });
  }

  // Find the selected product from the bodyList array
  const selectedProduct = bodyList.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <>
      <Layout>
        {selectedProduct && (
          <div className="container-fluid my-5">
            <Row>
              <Col md={4}></Col>
              <Col md={5}>
                <h2>{selectedProduct.MoreTitle}</h2>
                <p>Price: ${selectedProduct.ActPrice}</p>
                <p>Discount: {selectedProduct.disPercent}%</p>
                <p>
                  Rating: {selectedProduct.Rating} ({selectedProduct.reviews}{" "}
                  reviews)
                </p>
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                  <div className="position-fixed ">
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
                              <b>Sent To</b>
                              <div class="d-inline-flex">
                                <span class="me-1">
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
                        <Row className="mt-3">
                          <Col md={4}>
                            <b>Quantity</b>
                          </Col>
                          <Col md={8} className="text-end">
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
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={4}>
                            <b>Weight</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>500 g</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <b>Total</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>$78.76</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <b>Color</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>Red</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <b>Delievery</b>
                          </Col>
                          <Col md={7} className="text-end">
                            <b>$78.76</b>
                          </Col>
                        </Row>
                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <Button style={{ boxShadow: "none" }}>
                              Add to Cart
                            </Button>
                          </Row>
                          <Row>
                            <Button
                              variant="light"
                              style={{ boxShadow: "none" }}
                            >
                              Buy Now
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
