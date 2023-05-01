import React, { useState } from "react";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactStars from "react-stars";

export default function Smartphones() {
  return (
    <>
      <Layout>
        <div className="container-fluid my-3">
          <Row>
            <Col md={3} style={{ width: "15rem" }}>
              <Card>
                <Card.Body>
                  <Card.Title>Filter</Card.Title>
                  <Card.Text>
                    <b>Brand</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Samsung</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Realme</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">OnePlus</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Redmi</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Apple</label>
                      </li>
                    </ul>
                    <b>Price</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">$200 or less</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">$300 or $500</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">$500 or $800</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">$800 or $1000</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">$1000 or more</label>
                      </li>
                    </ul>
                    <b>Internal Memory</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">less than 32 GB</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">32 GB</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">64 GB</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">128 GB</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">256 GB</label>
                      </li>
                    </ul>
                    <b>Battery Capacity</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">less than 999mah</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">1000 - 1999 mah</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">2000 - 2999 mah</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">3000 - 3999 mah</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">4000 - 4999 mah</label>
                      </li>
                    </ul>
                    <b>Discount</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">10%off or less</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">20%off or less</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">30%off or less</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">40%off or less</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">50%off or less</label>
                      </li>
                    </ul>
                    <b>RAM</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">2 to 3.9 Gb</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">4 to 7.9 Gb</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">8 to 15.9 Gb</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">16 to 31.9 Gb</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">32 to 63.9 Gb</label>
                      </li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" style={{ boxShadow: "none" }}>
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9}></Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}
