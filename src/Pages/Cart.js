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

export default function Cart() {
  return (
    <>
      <LayOutNone>
        <div className="container-fluid">
          <div className="d-flex justify-content-start mt-2">
            <Button className="outline-primary">
              <Link to="/" className="text-decoration-none text-light ">
                Back to Home Page
              </Link>
            </Button>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-5">
            <Row>
              <Col md={8}>
                <div className="">
                  <div className="">
                    <Card>
                      <Card.Header>Cart</Card.Header>

                      <Card.Body>
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
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
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
                <div className="">
                  <div className="">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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
