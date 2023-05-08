import React, { useReducer } from "react";
import LayOutNone from "../Component/LayOutNone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import ReactStars from "react-stars";
import InputGroup from "react-bootstrap/InputGroup";
import { CartList } from "../Component/data";

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
export default function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleDecrementAge() {
    dispatch({ type: "decremented_age" });
  }

  return (
    <>
      <LayOutNone>
        <div className="container">
          <div className="d-flex justify-content-start mt-2">
            <Button className="outline-primary">
              <Link to="/" className="text-decoration-none text-light ">
                Back to Home Page
              </Link>
            </Button>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-5 ">
            <Row>
              <Col lg={8}>
                <div className="">
                  <div className="">
                    <Card>
                      <Card.Header>Cart</Card.Header>
                      <Card.Body className="d-grid gap-3">
                        {CartList.map((product) => (
                          <div key={product.id}>
                            <Card className="w-100">
                              <Row>
                                <Col md={4} lg={3} className="d-inline">
                                  <div style={{ width: "10rem" }}>
                                    <Card.Img
                                      variant="top"
                                      src={product.image}
                                    />
                                  </div>
                                </Col>
                                <Col md={8} lg={9}>
                                  <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        className="row"
                                      >
                                        <div className="col-6">
                                          <b className="fs-2">
                                            ${product.disPrice}
                                          </b>
                                          <p className="fs-6 text-decoration-line-through">
                                            ${product.price}
                                          </p>
                                        </div>
                                        <div className="col-6">
                                          <ReactStars value={product.stars} />
                                          <p>{product.reviewCount}</p>
                                        </div>

                                        <div className="col">
                                          <p className="text-start">
                                            ({product.discount}%off)
                                          </p>
                                        </div>
                                      </div>
                                    </Card.Text>
                                    <Row
                                      style={{
                                        alignItems: "center",
                                      }}
                                      className="row row-cols-auto d-flex justify-content-start"
                                    >
                                      <Col md={3} sm={6}>
                                        <select className="form-select">
                                          <option selected>lg</option>
                                          <option value="1">sm</option>
                                          <option value="2">lg</option>
                                          <option value="3">xl</option>
                                        </select>
                                      </Col>
                                      <Col md={4} sm={12}>
                                        <div className="d-flex  mb-3 mb-md-0">
                                          <Button
                                            onClick={handleButtonClick}
                                            size="sm"
                                            className="mb-1"
                                            style={{ boxShadow: "none" }}
                                          >
                                            +
                                          </Button>

                                          <input
                                            value={state.age}
                                            style={{ width: "1.8rem" }}
                                          />

                                          <Button
                                            size="sm"
                                            onClick={handleDecrementAge}
                                            className="mb-1"
                                            style={{ boxShadow: "none" }}
                                          >
                                            -
                                          </Button>
                                        </div>
                                      </Col>
                                      <Col md={3} sm={6}>
                                        <select className="form-select">
                                          <option selected>Blue</option>
                                          <option value="1">Red</option>
                                          <option value="2">Yellow</option>
                                          <option value="3">Green</option>
                                        </select>
                                      </Col>

                                      <Col md={2}>
                                        <div className="d-flex justify-content-center">
                                          <Button
                                            variant="light"
                                            style={{ boxShadow: "none" }}
                                          >
                                            <AiOutlineHeart />
                                          </Button>
                                          <Button
                                            variant="light"
                                            style={{ boxShadow: "none" }}
                                          >
                                            <AiOutlineDelete />
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Card.Body>
                                </Col>
                              </Row>
                            </Card>
                          </div>
                        ))}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                  <div className="">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title className="fs-6 text-secondary">
                          Delievery
                        </Card.Title>

                        <Row>
                          <Col lg={4}>
                            <Button
                              variant="light"
                              className="text-dark"
                              style={{ boxShadow: "none" }}
                            >
                              Free
                            </Button>
                          </Col>
                          <Col md={8}>
                            <div className="d-flex align-items-center">
                              <p className="text-start">Express $10.00</p>
                            </div>
                          </Col>
                        </Row>
                        <p
                          className="text-secondary"
                          style={{ fontSize: "0.7rem" }}
                        >
                          delievery Date: 01 Dec 2023
                        </p>
                        <InputGroup>
                          <Form.Control
                            placeholder="PromoCode"
                            aria-describedby="basic-addon2"
                          />
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            <b>Apply</b>
                          </Button>
                        </InputGroup>
                        <p
                          className="text-secondary"
                          style={{ fontSize: "0.7rem" }}
                        >
                          discount upto 20%
                        </p>
                        <div className="my-4">
                          <hr />
                        </div>
                        <Row>
                          <Col md={4}>
                            <b>SubTotal</b>
                            <p>Discount</p>
                            <p>Delievery</p>
                            <p>Tax</p>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>$80.00</b>
                            <p>(20% off) $16.39</p>
                            <p>$0.00</p>
                            <p>$-14.00</p>
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
                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <Button style={{ boxShadow: "none" }}>
                              Proceed to checkout
                            </Button>
                          </Row>
                          <Row>
                            <Button
                              variant="light"
                              style={{ boxShadow: "none" }}
                            >
                              Continue Shopping
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
        </div>
      </LayOutNone>
    </>
  );
}
