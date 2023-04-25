import React from "react";
import LayOutNone from "../Component/LayOutNone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import ReactStars from "react-stars";
import InputGroup from "react-bootstrap/InputGroup";

export default function Cart() {
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
              <Col md={8}>
                <div className="">
                  <div className="">
                    <Card>
                      <Card.Header>Cart</Card.Header>

                      <Card.Body className="d-grid gap-3">
                        <Card className="w-100">
                          <Row>
                            <Col md={4} lg={3} className="d-inline">
                              <div style={{ width: "10rem" }}>
                                <Card.Img
                                  variant="top"
                                  src="https://m.media-amazon.com/images/I/61ljxTBpTCL._SY450_.jpg"
                                />
                              </div>
                            </Col>
                            <Col md={8} lg={9}>
                              <Card.Body>
                                <Card.Title>
                                  boAt Rockerz 550 Bluetooth Wireless Over Ear
                                  Headphones
                                </Card.Title>
                                <Card.Text>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">$100</b>
                                      <p className="fs-6 text-decoration-line-through">
                                        $300
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars value={4} />
                                      <p>6000</p>
                                    </div>

                                    <div className="col">
                                      <p className="text-start">(65% OFF)</p>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                    }}
                                    className="row row-cols-auto d-flex justify-content-start"
                                  >
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      style={{
                                        backgroundColor: "#7E90C8",
                                        color: "white",
                                      }}
                                      className="col-10"
                                    >
                                      Add to cart
                                    </Button>
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      className="col-2 text-dark"
                                      style={{ boxShadow: "none" }}
                                    >
                                      <AiOutlineDelete />
                                    </Button>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                        <Card className="w-100">
                          <Row>
                            <Col md={4} lg={3} className="d-inline">
                              <div style={{ width: "10rem" }}>
                                <Card.Img
                                  variant="top"
                                  src="https://m.media-amazon.com/images/I/61ljxTBpTCL._SY450_.jpg"
                                />
                              </div>
                            </Col>
                            <Col md={8} lg={9}>
                              <Card.Body>
                                <Card.Title>
                                  boAt Rockerz 550 Bluetooth Wireless Over Ear
                                  Headphones
                                </Card.Title>
                                <Card.Text>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">$100</b>
                                      <p className="fs-6 text-decoration-line-through">
                                        $300
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars value={4} />
                                      <p>6000</p>
                                    </div>

                                    <div className="col">
                                      <p className="text-start">(65% OFF)</p>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                    }}
                                    className="row row-cols-auto d-flex justify-content-start"
                                  >
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      style={{
                                        backgroundColor: "#7E90C8",
                                        color: "white",
                                      }}
                                      className="col-10"
                                    >
                                      Add to cart
                                    </Button>
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      className="col-2 text-dark"
                                      style={{ boxShadow: "none" }}
                                    >
                                      <AiOutlineDelete />
                                    </Button>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                        <Card className="w-100">
                          <Row>
                            <Col md={4} lg={3} className="d-inline">
                              <div style={{ width: "10rem" }}>
                                <Card.Img
                                  variant="top"
                                  src="https://m.media-amazon.com/images/I/61ljxTBpTCL._SY450_.jpg"
                                />
                              </div>
                            </Col>
                            <Col md={8} lg={9}>
                              <Card.Body>
                                <Card.Title>
                                  boAt Rockerz 550 Bluetooth Wireless Over Ear
                                  Headphones
                                </Card.Title>
                                <Card.Text>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">$100</b>
                                      <p className="fs-6 text-decoration-line-through">
                                        $300
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars value={4} />
                                      <p>6000</p>
                                    </div>

                                    <div className="col">
                                      <p className="text-start">(65% OFF)</p>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                    }}
                                    className="row row-cols-auto d-flex justify-content-start"
                                  >
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      style={{
                                        backgroundColor: "#7E90C8",
                                        color: "white",
                                      }}
                                      className="col-10"
                                    >
                                      Add to cart
                                    </Button>
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      className="col-2 text-dark"
                                      style={{ boxShadow: "none" }}
                                    >
                                      <AiOutlineDelete />
                                    </Button>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                        <Card className="w-100">
                          <Row>
                            <Col md={4} lg={3} className="d-inline">
                              <div style={{ width: "10rem" }}>
                                <Card.Img
                                  variant="top"
                                  src="https://m.media-amazon.com/images/I/61ljxTBpTCL._SY450_.jpg"
                                />
                              </div>
                            </Col>
                            <Col md={8} lg={9}>
                              <Card.Body>
                                <Card.Title>
                                  boAt Rockerz 550 Bluetooth Wireless Over Ear
                                  Headphones
                                </Card.Title>
                                <Card.Text>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">$100</b>
                                      <p className="fs-6 text-decoration-line-through">
                                        $300
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars value={4} />
                                      <p>6000</p>
                                    </div>

                                    <div className="col">
                                      <p className="text-start">(65% OFF)</p>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                    }}
                                    className="row row-cols-auto d-flex justify-content-start"
                                  >
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      style={{
                                        backgroundColor: "#7E90C8",
                                        color: "white",
                                      }}
                                      className="col-10"
                                    >
                                      Add to cart
                                    </Button>
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      className="col-2 text-dark"
                                      style={{ boxShadow: "none" }}
                                    >
                                      <AiOutlineDelete />
                                    </Button>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex justify-content-center">
                  <div className="">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title className="fs-6 text-secondary">
                          Delievery
                        </Card.Title>

                        <Row>
                          <Col md={4}>
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
                          <Col md={6}>
                            <b>SubTotal</b>
                            <p>Discount</p>
                            <p>Delievery</p>
                            <p>Tax</p>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex justify-content-end">
                              <b>$80.00</b>
                            </div>
                          </Col>
                        </Row>
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
