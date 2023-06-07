import React, { useState, useEffect } from "react";
import Layout from "../Component/Layout";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactStars from "react-stars";
import { BsCurrencyRupee } from "react-icons/bs";
import { ProductDetailData } from "../Component/data";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { addToCart, addToWishlist } from "./items";

export default function Laptops() {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Laptop");
  const [filteredData, setFilteredData] = useState([]);

  const handleToggle = () => setShowMore(!showMore);

 
  const handleFilter = (filterCriteria) => {
    const filteredProducts = ProductDetailData.filter(
      (product) => product.category === filterCriteria
    );
    setFilteredData(filteredProducts);
  }

  // useEffect hook example
  useEffect(() => {
    handleFilter(selectedCategory);
  }, []);

  return (
    <>
      <Layout>
        <div className="container-fluid my-3">
          <Row>
            <a
              className="btn btn-primary d-flex d-md-none w-50 ms-4"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              Open filter
            </a>
            <div
              className="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
              <div className="offcanvas-body">
                <div>
                  <Card className="scrollbar scrollbar-primary filter-section">
                    <Card.Body className="force-overflow">
                      <Card.Title>Filter</Card.Title>
                      <Card.Text>
                        <b>Brand</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">Lenovo</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">Asus</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">HP</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">Acer</label>
                          </li>
                        </ul>
                        <b>Price</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">under 30,000</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">under 40,000</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">under 45,000</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">under 50,000</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">under 60,000</label>
                          </li>
                        </ul>
                        <b>Internal Memory</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">256Gb</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">512 Gb</label>
                          </li>
                        </ul>

                        <b>Discount</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">10 to 20</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">20 to 30</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">30 to 40</label>
                          </li>
                        </ul>
                        <b>Rating</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">3 to 4</label>
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <input type="checkbox" id="checkbox1" />
                            <label htmlFor="checkbox1">4 to 4.5</label>
                          </li>
                        </ul>
                      </Card.Text>
                      <Button variant="primary" style={{ boxShadow: "none" }}>
                        Apply
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <Col md={3} className="d-none d-md-flex" style={{ width: "15rem" }}>
              <Card className="scrollbar scrollbar-primary filter-section">
                <Card.Body className="force-overflow">
                  <Card.Title>Filter</Card.Title>
                  <Card.Text>
                    <b>Brand</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Lenovo</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Asus</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">HP</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Acer</label>
                      </li>
                    </ul>
                    <b>Price</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">under 30,000</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">under 40,000</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">under 45,000</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">under 50,000</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">under 60,000</label>
                      </li>
                    </ul>
                    <b>Internal Memory</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">256Gb</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">512 Gb</label>
                      </li>
                    </ul>

                    <b>Discount</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">10 to 20</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">20 to 30</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">30 to 40</label>
                      </li>
                    </ul>
                    <b>Rating</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">3 to 4</label>
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">4 to 4.5</label>
                      </li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" style={{ boxShadow: "none" }}>
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9} sm={12}>
              <CardGroup className="container-fluid my-5">
                <Row xs={1} md={3} className="g-4">
                  
                  {filteredData.map((body) => (
                    <div key={body.id}>
                      <Card>
                        <Card.Img variant="top" src={body.image} />
                        <Card.Body>
                          <Link
                            to={`/AllProducts/${body.id}`}
                            className="brandTitle"
                          >
                            <Card.Title className="fw-normal ">
                              {showMore ? body.MoreTitle : body.LessTitle}
                              <span
                                onClick={() => handleToggle(body.id)}
                                className="fw-bolder"
                              >
                                {showMore ? " ...Read Less" : " ...Read More"}
                              </span>
                            </Card.Title>
                          </Link>
                          <Card.Text>
                            <div
                              className="row row-cols-auto"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <ReactStars
                                count={body.rating}
                                size={24}
                                color2={"#ffd700"}
                                value={body.Rating}
                                style={{ marginRight: "5px" }}
                                className="col"
                              />
                              <p style={{ margin: "0" }} className="ms-2 col">
                                {body.reviews} review
                              </p>
                            </div>

                            <div
                              style={{ display: "flex", alignItems: "center" }}
                              className="row"
                            >
                              <div className="col">
                                <b className="fs-2 d-flex">
                                  <BsCurrencyRupee className="mt-2" />
                                  {body.DisPrice}
                                </b>
                                <p className="fs-6 text-decoration-line-through">
                                  <BsCurrencyRupee />
                                  {body.ActPrice}
                                </p>
                              </div>
                              <div className="col">
                                <p className="mt-3 text-start">
                                  ({body.disPercent}%off)
                                </p>
                              </div>
                            </div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                              className="row row-cols-auto d-flex justify-content-center"
                            >
                              <Button
                                variant="outline-light"
                                style={{
                                  backgroundColor: "#7E90C8",
                                  color: "white",
                                }}
                                className="col"
                                onClick={() => addToCart(body)}
                              >
                                Add To Cart
                              </Button>
                              <Button
                                className="ms-2 col"
                                variant="outline-light"
                                style={{
                                  backgroundColor: "#8B5095",
                                  color: "white",
                                }}
                                onClick={() => addToWishlist(body)}
                              >
                                Add To Wishlist
                              </Button>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Row>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}
