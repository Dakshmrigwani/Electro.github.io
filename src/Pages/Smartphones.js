import React, { useState, useEffect } from "react";
import Layout from "../Component/Layout";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactStars from "react-stars";
import { BsCurrencyRupee } from "react-icons/bs";
import { ProductDetailData } from "../Component/data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { addToCart, addToWishlist } from "./items";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";

export default function Smartphones() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Smartphone");
  const [filteredData, setFilteredData] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);
  const [ramFilters, setRamFilters] = useState([]);
  const [memoryFilters, setMemoryFilters] = useState([]);
  const [discountFilters, setDiscountFilters] = useState([]);
  const [ratingFilters, setRatingFilters] = useState([]);

  const handleToggle = () => setShowMore(!showMore);

  const itemsPerPage = 6;

  const handleFilter = () => {
    let filteredProducts = ProductDetailData.filter(
      (product) => product.category === selectedCategory,
    );

    if (brandFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brandFilters.includes(product.brand),
      );
    }

    if (priceFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        priceFilters.includes(product.RangePrice),
      );
    }

    if (memoryFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        memoryFilters.includes(product.memory),
      );
    }

    if (discountFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        discountFilters.includes(product.disPercentFilter),
      );
    }

    if (ramFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        ramFilters.includes(product.Ram),
      );
    }

    if (ratingFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        ratingFilters.includes(product.ratingFilter),
      );
    }

    setFilteredData(filteredProducts);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    handleFilter();
  }, [
    selectedCategory,
    brandFilters,
    priceFilters,
    memoryFilters,
    discountFilters,
    ratingFilters,
    ramFilters,
  ]);

  useEffect(() => {
    const total = filteredData.length;
    setTotalPages(Math.ceil(total / itemsPerPage));
  }, [filteredData]);

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
                              label="Samsung"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "Samsung"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Samsung",
                                    ),
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
                              label="Realme"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "Realme"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Realme",
                                    ),
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
                              label="Redmi"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "Redmi"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Redmi",
                                    ),
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
                              label="OnePlus"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "OnePlus"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "OnePlus",
                                    ),
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
                              label="Nokia"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setBrandFilters([...brandFilters, "Nokia"]);
                                } else {
                                  setBrandFilters(
                                    brandFilters.filter(
                                      (brand) => brand !== "Nokia",
                                    ),
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
                              label="15000 - 16000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "15000 - 16000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "15000 - 16000",
                                    ),
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
                              label="5000 - 6000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "5000 - 6000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "5000 - 6000",
                                    ),
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
                              label="17000 - 18000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "17000 - 18000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "17000 - 18000",
                                    ),
                                  );
                                }
                              }}
                            />
                          </li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          ></li>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="8000 - 9000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "8000 - 9000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "8000 - 9000",
                                    ),
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
                              label="10000 - 11000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "10000 - 11000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "10000 - 11000",
                                    ),
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
                              label="11000 - 12000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "11000 - 12000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "11000 - 12000",
                                    ),
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
                              label="13000 - 14000"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPriceFilters([
                                    ...priceFilters,
                                    "13000 - 14000",
                                  ]);
                                } else {
                                  setPriceFilters(
                                    priceFilters.filter(
                                      (price) => price !== "13000 - 14000",
                                    ),
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>
                        <b>Internal Memory</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox5"
                              label="64GB"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setMemoryFilters([...memoryFilters, "64GB"]);
                                } else {
                                  setMemoryFilters(
                                    memoryFilters.filter(
                                      (price) => price !== "64GB",
                                    ),
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
                              label="64GB"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setMemoryFilters([...memoryFilters, "64GB"]);
                                } else {
                                  setMemoryFilters(
                                    memoryFilters.filter(
                                      (price) => price !== "64GB",
                                    ),
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
                              id="checkbox5"
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
                                      (price) => price !== "4 - 4.5",
                                    ),
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
                              label="3 - 3.5"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRatingFilters([
                                    ...ratingFilters,
                                    "3 - 3.5",
                                  ]);
                                } else {
                                  setRatingFilters(
                                    ratingFilters.filter(
                                      (price) => price !== "3 - 3.5",
                                    ),
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
                                      (price) => price !== "3.5 - 4",
                                    ),
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
                                      (discount) => discount !== "30 - 40",
                                    ),
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
                                      (discount) => discount !== "20 - 30",
                                    ),
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
                              label="10% - 20%"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDiscountFilters([
                                    ...discountFilters,
                                    "10 - 20",
                                  ]);
                                } else {
                                  setDiscountFilters(
                                    discountFilters.filter(
                                      (discount) => discount !== "10 - 20",
                                    ),
                                  );
                                }
                              }}
                            />
                          </li>
                        </ul>
                        <b>RAM</b>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li
                            style={{ display: "block", alignItems: "center" }}
                          >
                            <Form.Check
                              type="checkbox"
                              id="checkbox13"
                              label="4GB"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRamFilters([...ramFilters, "4GB"]);
                                } else {
                                  setRamFilters(
                                    ramFilters.filter(
                                      (discount) => discount !== "4GB",
                                    ),
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
                              label="6GB"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRamFilters([...ramFilters, "6GB"]);
                                } else {
                                  setRamFilters(
                                    ramFilters.filter(
                                      (discount) => discount !== "6GB",
                                    ),
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
                              label="8GB"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setRamFilters([...ramFilters, "8GB"]);
                                } else {
                                  setRamFilters(
                                    ramFilters.filter(
                                      (discount) => discount !== "8GB",
                                    ),
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
            <Col md={2} className="d-none d-md-flex">
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
                          label="Samsung"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Samsung"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Samsung",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Realme"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Realme"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Realme",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Redmi"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Redmi"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Redmi",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="OnePlus"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "OnePlus"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "OnePlus",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox1"
                          label="Nokia"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBrandFilters([...brandFilters, "Nokia"]);
                            } else {
                              setBrandFilters(
                                brandFilters.filter(
                                  (brand) => brand !== "Nokia",
                                ),
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
                          label="15000 - 16000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([
                                ...priceFilters,
                                "15000 - 16000",
                              ]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "15000 - 16000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="5000 - 6000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "5000 - 6000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "5000 - 6000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="17000 - 18000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([
                                ...priceFilters,
                                "17000 - 18000",
                              ]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "17000 - 18000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li
                        style={{ display: "block", alignItems: "center" }}
                      ></li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="8000 - 9000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([...priceFilters, "8000 - 9000"]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "8000 - 9000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="10000 - 11000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([
                                ...priceFilters,
                                "10000 - 11000",
                              ]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "10000 - 11000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="11000 - 12000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([
                                ...priceFilters,
                                "11000 - 12000",
                              ]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "11000 - 12000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="13000 - 14000"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setPriceFilters([
                                ...priceFilters,
                                "13000 - 14000",
                              ]);
                            } else {
                              setPriceFilters(
                                priceFilters.filter(
                                  (price) => price !== "13000 - 14000",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>
                    <b>Internal Memory</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="64GB"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setMemoryFilters([...memoryFilters, "64GB"]);
                            } else {
                              setMemoryFilters(
                                memoryFilters.filter(
                                  (price) => price !== "64GB",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label=" 128GB"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setMemoryFilters([...memoryFilters, "128GB"]);
                            } else {
                              setMemoryFilters(
                                memoryFilters.filter(
                                  (price) => price !== "128GB",
                                ),
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
                                  (discount) => discount !== "30 - 40",
                                ),
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
                                  (discount) => discount !== "20 - 30",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="10% - 20%"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDiscountFilters([
                                ...discountFilters,
                                "10 - 20",
                              ]);
                            } else {
                              setDiscountFilters(
                                discountFilters.filter(
                                  (discount) => discount !== "10 - 20",
                                ),
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
                          id="checkbox5"
                          label="4 - 4.5"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRatingFilters([...ratingFilters, "4 - 4.5"]);
                            } else {
                              setRatingFilters(
                                ratingFilters.filter(
                                  (price) => price !== "4 - 4.5",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="3 - 3.5"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRatingFilters([...ratingFilters, "3 - 3.5"]);
                            } else {
                              setRatingFilters(
                                ratingFilters.filter(
                                  (price) => price !== "3 - 3.5",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox5"
                          label="3.5 - 4"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRatingFilters([...ratingFilters, "3.5 - 4"]);
                            } else {
                              setRatingFilters(
                                ratingFilters.filter(
                                  (price) => price !== "3.5 - 4",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                    </ul>
                    <b>RAM</b>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="4GB"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRamFilters([...ramFilters, "4GB"]);
                            } else {
                              setRamFilters(
                                ramFilters.filter(
                                  (discount) => discount !== "4GB",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="6GB"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRamFilters([...ramFilters, "6GB"]);
                            } else {
                              setRamFilters(
                                ramFilters.filter(
                                  (discount) => discount !== "6GB",
                                ),
                              );
                            }
                          }}
                        />
                      </li>
                      <li style={{ display: "block", alignItems: "center" }}>
                        <Form.Check
                          type="checkbox"
                          id="checkbox13"
                          label="8GB"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRamFilters([...ramFilters, "8GB"]);
                            } else {
                              setRamFilters(
                                ramFilters.filter(
                                  (discount) => discount !== "8GB",
                                ),
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

            <Col md={10}>
              <div className="my-4 ">
                <Row className="g-4">
                  {filteredData
                    .slice(
                      currentPage * itemsPerPage,
                      (currentPage + 1) * itemsPerPage,
                    )
                    .map((body) => (
                      <Col md={4}>
                        <div key={body.id}>
                          <Card className="">
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
                                    {showMore
                                      ? " ...Read Less"
                                      : " ...Read More"}
                                  </span>
                                </Card.Title>
                              </Link>
                              <Card.Text>
                                <div
                                  className="row row-cols-auto"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
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
                                  <p
                                    style={{ margin: "0" }}
                                    className="ms-2 col"
                                  >
                                    {body.reviews} review
                                  </p>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
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
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
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
                                    onClick={() => addToWishlist(body)}
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
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-3">
            <ReactPaginate
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageLabelBuilder={() => ""} // Return an empty string for page labels
              previousLabel={"Previous"} // Customize the "Previous" label
              nextLabel={"Next"} // Customize the "Next" label
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
