import React from "react";
import LayOutNone from "../Component/LayOutNone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
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
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
                size="lg"
              >
                <Modal.Dialog>
                  <Modal.Header>
                    <Modal.Title>Cart</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Card style={{ width: "100%" }}>
                      <Row>
                        <Col>
                          <Card.Img
                            variant="top"
                            src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?w=740&t=st=1681996660~exp=1681997260~hmac=4bef7fde7d3c00249db13c96e8e09b23a4c16784cc29ddb90c7e2ae3e0d432d5"
                          />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Title>
                              <div className="w-100">
                                boAt Stone 620 Bluetooth Speaker with 12W RMS
                                Stereo Sound
                              </div>
                            </Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Modal.Body>
                </Modal.Dialog>
              </div>
            </div>
          </div>
        </div>
      </LayOutNone>
    </>
  );
}
