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
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center flex-wrap">
              <Row>
                <Col>
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal.Dialog size="xl">
                      <Modal.Header>
                        <Modal.Title>Cart</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <Card style={{ width: "100%" }} className="container">
                          <Row>
                            <Col>
                              <Card.Img
                                variant="top"
                                className=""
                                src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?w=740&t=st=1681996660~exp=1681997260~hmac=4bef7fde7d3c00249db13c96e8e09b23a4c16784cc29ddb90c7e2ae3e0d432d5"
                              />
                            </Col>
                            <Col>
                              <Card.Body>
                                <Card.Title>
                                  <div className="w-100">
                                    boAt Stone 620 Bluetooth Speaker with 12W
                                    RMS Stereo Sound
                                  </div>
                                </Card.Title>
                                <Card.Text>
                                  <div className="">
                                    <Row>
                                      <Col>
                                        <Form.Control
                                          aria-describedby="basic-addon1"
                                          type="number"
                                          placeholder="1"
                                          size="sm"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          aria-describedby="basic-addon1"
                                          type="number"
                                          placeholder="XL"
                                          size="sm"
                                        />
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          aria-describedby="basic-addon1"
                                          type="text"
                                          placeholder="blue"
                                          size="sm"
                                        />
                                      </Col>
                                      <Col>
                                        <Row>
                                          <AiOutlineHeart />
                                          <p>Wishlist</p>
                                        </Row>
                                      </Col>
                                      <Col>
                                        <Row>
                                          <AiOutlineDelete />
                                          <p>Delete</p>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Modal.Body>
                    </Modal.Dialog>
                  </div>
                </Col>
                <Col>
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal.Dialog size="sm">
                      <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p>Modal body text goes here.</p>
                      </Modal.Body>
                    </Modal.Dialog>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </LayOutNone>
    </>
  );
}
