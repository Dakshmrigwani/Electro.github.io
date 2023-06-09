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
import Offcanvas from "react-bootstrap/Offcanvas";
import { addToCart, addToWishlist } from "./items";

export default function Headphone() {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("headphones");
  const [filteredData, setFilteredData] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [discountFilters, setDiscountFilters] = useState([]);
  const [ratingFilters, setRatingFilters] = useState([]);

  const handleToggle = () => setShowMore(!showMore);

  const handleFilter = () => {
    let filteredProducts = ProductDetailData.filter(
      (product) => product.category === selectedCategory
    );

    if (brandFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brandFilters.includes(product.brand)
      );
    }

    if (priceFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        priceFilters.includes(product.RangePrice)
      );
    }

    if (discountFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        discountFilters.includes(product.disPercentFilter)
      );
    }

    if (ratingFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        ratingFilters.includes(product.ratingFilter)
      );
    }

    setFilteredData(filteredProducts);
  };

  useEffect(() => {
    handleFilter();
  }, [
    selectedCategory,
    brandFilters,
    priceFilters,
    discountFilters,
    ratingFilters,
  ]);

  return (
    <>
      <Layout>
        <div className="container-fluid my-3">
          <Row>
            <div
              className="d-flex d-lg-none"
              style={{ maxWidth: "10rem", height: "fit-content" }}
            >
              <a
                className="btn btn-primary  ms-4"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Open filter
              </a>
            </div>
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
                            <Form.Check
                              type="checkbox"
                              id="checkbox1"
                              label="JBL"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "JBL"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "JBL"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox1"
                              label="boAt"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "boAt"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "boAt"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox1"
                              label="Logitech"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([
                                    ...brandFilters,
                                    "Logitech",
                                  ]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Logitech"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox1"
                              label="Bose"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "Bose"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Bose"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox1"
                              label="Zebronics"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([
                                    ...brandFilters,
                                    "Zebronics",
                                  ]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Zebronics"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>
                        <b>Price</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="500 - 1000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "500 - 1000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "500 - 1000"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="1000 - 2000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "1000 - 2000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "1000 - 2000"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="2000 - 3000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "2000 - 3000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "2000 - 3000"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="4000 - 5000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "4000 - 5000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "4000 - 5000"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="2500 - 3000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "2500 - 3000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "2500 - 3000"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>

                        <b>Discount</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="30% - 40%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "30 - 40",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "30 - 40"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="0% - 10%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "0 - 10",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "0 - 10"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="20% - 30%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "20 - 30",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "20 - 30"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="50% - 60%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "50 - 60",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "50 - 60"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="60% - 70%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "60 - 70",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "60 - 70"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>
                        <b>Rating</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="3.5 - 4"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRatingFilters([
                                    ...ratingFilters,
                                    "3.5 - 4",
                                  ]);
                                } else {
                                  setRatingFilters(
                                    ratingFilters.filter(
                                      (rating) => rating !== "3.5 - 4"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="4 - 4.5"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRatingFilters([
                                    ...ratingFilters,
                                    "4 - 4.5",
                                  ]);
                                } else {
                                  setRatingFilters(
                                    ratingFilters.filter(
                                      (rating) => rating !== "4 - 4.5"
                                    )
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <Col md={3} className="d-none d-lg-flex" style={{ width: "15rem" }}>
              <Card className="scrollbar scrollbar-primary filter-section">
                <Card.Body className="force-overflow">
                  <Card.Title>Filter</Card.Title>
                  <Card.Text>
                    <b>Brand</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="JBL"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "JBL"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter((brand) => brand !== "JBL")
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="boAt"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "boAt"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter((brand) => brand !== "boAt")
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Logitech"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Logitech"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Logitech"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Bose"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Bose"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter((brand) => brand !== "Bose")
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Zebronics"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Zebronics"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Zebronics"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>
                    <b>Price</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="500 - 1000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "500 - 1000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "500 - 1000"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="1000 - 2000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "1000 - 2000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "1000 - 2000"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="2000 - 3000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "2000 - 3000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "2000 - 3000"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="4000 - 5000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "4000 - 5000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "4000 - 5000"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="2500 - 3000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "2500 - 3000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "2500 - 3000"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>

                    <b>Discount</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="30% - 40%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "30 - 40",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "30 - 40"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="0% - 10%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "0 - 10",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "0 - 10"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="20% - 30%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "20 - 30",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "20 - 30"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="50% - 60%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "50 - 60",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "50 - 60"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="60% - 70%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "60 - 70",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "60 - 70"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>
                    <b>Rating</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="3.5 - 4"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRatingFilters([...ratingFilters, "3.5 - 4"]);
                            } else {
                              setRatingFilters(
                                ratingFilters.filter(
                                  (rating) => rating !== "3.5 - 4"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="4 - 4.5"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRatingFilters([...ratingFilters, "4 - 4.5"]);
                            } else {
                              setRatingFilters(
                                ratingFilters.filter(
                                  (rating) => rating !== "4 - 4.5"
                                )
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9} sm={12}>
              <CardGroup className="container-fluid my-5">
                <Row xs={1} sm={1} md={3} className="g-4">
                  {filteredData.map((body) => (
                    <div key={body.id}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={body.image}
                          style={{ height: "18rem" }}
                        />
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
                                edit={false}
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
                                onClick={() => addToCart(body)}
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
