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

export default function Wishlist() {
  return (
    <>
      <LayOutNone>
        <div className="container">
          
            <div className="d-flex d-md-none gap-2">
              <div className=" mt-2">
                <Button className="outline-primary">
                  <Link to="/" className="text-decoration-none text-light ">
                    Back to Home Page
                  </Link>
                </Button>
              </div>
              <div className=" mt-2">
                <Button className="outline-primary">
                  <Link
                    to="/Pages/Cart"
                    className="text-decoration-none text-light "
                  >
                    Back to Cart Page
                  </Link>
                </Button>
            </div>
          </div>
          <div className="row d-none d-md-flex">
              <div className="col-6 mt-2">
                <Button className="outline-primary">
                  <Link to="/" className="text-decoration-none text-light ">
                    Back to Home Page
                  </Link>
                </Button>
              </div>
            
              <div className="col-6 mt-2">
                <div className="d-flex justify-content-end">
                <Button className="outline-primary">
                  <Link
                    to="/Pages/Cart"
                    className="text-decoration-none text-light "
                  >
                    Back to Cart Page
                  </Link>
                </Button>
            </div>
          </div>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-5">
            <div className="">
              <div className="">
                <Card>
                  <Card.Header>Wishlist</Card.Header>

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
          </div>
        </div>
      </LayOutNone>
    </>
  );
}
