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

export default function Smartphones() {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Smartphone");
  const [filteredData, setFilteredData] = useState([]);

  const handleToggle = () => setShowMore(!showMore);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const handleFilter = (filterCriteria) => {
    const filteredProducts = ProductDetailData.filter(
      (product) => product.category === filterCriteria
    );
    setFilteredData(filteredProducts);
  };

  // Event handler example
  const handleCategoryFilter = () => {
    handleFilter(selectedCategory);
  };

  // useEffect hook example
  useEffect(() => {
    handleFilter(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Layout>
        <div className="container-fluid my-3">
          <Row>
            <a className="btn btn-primary d-flex d-md-none w-50 ms-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Open filter</a>
              <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  <div className="offcanvas-body">
                    <div>
                      <Card className="scrollbar scrollbar-primary filter-section">
                <Card.Body className="force-overflow">
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
            {/* </div> */}
            <Col md={9}>
              <CardGroup className="container-fluid my-5 ">
                <Row xs={1} md={3} className="g-4">
                  {/* <button
                    className="btn btn-primary d-flex d-md-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  > 
                    Filter
                  </button> */}
                  {filteredData.map((body) => (
                    <div key={body.id}>
                      
                      <Card className="row">
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
                                onChange={ratingChanged}
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
