import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import { Button, Modal, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import {
  selectedProduct,
  bodyList,
  ProductDetailData,
} from "../Component/data";

export default function Body() {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("bodyList");
  const [filteredData, setFilteredData] = useState([]);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);

  const handleClose = () => setShow(false);

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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Subscribe Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-center fs-4">
              Subscribe our E-mail and get <br />
              <b>more exciting offers</b>
            </p>
            <InputGroup className="mb-3 mt-5">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-danger" id="button-addon2">
                Submit
              </Button>
            </InputGroup>
            <div className="text-end">
              <small className="text-center">
                <p>
                  By providing your email address
                  <br />
                  you agree to our&nbsp;
                  <p
                    className="text-decoration-underline"
                    style={{ display: "inline-block" }}
                  >
                    privacy policy
                  </p>
                  &nbsp;and&nbsp;
                  <p
                    className="text-decoration-underline"
                    style={{ display: "inline-block" }}
                  >
                    Terms and conditions
                  </p>
                </p>
              </small>
            </div>
          </Modal.Body>
        </Modal>
        <Carousel className="container-fluid my-4">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?w=740&t=st=1681996660~exp=1681997260~hmac=4bef7fde7d3c00249db13c96e8e09b23a4c16784cc29ddb90c7e2ae3e0d432d5"
              alt="First slide"
              style={{ height: "50rem" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/laptop-screen-psd-mockup-gray-background_53876-116370.jpg?w=740&t=st=1681996880~exp=1681997480~hmac=376e7ac29c91cbd499e1a199f20afbfe85f26bacaf59b2286039aa9447148ebd"
              alt="Second slide"
              style={{ height: "50rem" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/black-wireless-earbud-with-charging-case_1268-14371.jpg?w=740&t=st=1681996938~exp=1681997538~hmac=26f8d59092f77c638a6599138dbe2e7c2c6e9aefc434af7cb71dea7e73f917ff"
              alt="Third slide"
              style={{ height: "50rem" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=740&t=st=1681997089~exp=1681997689~hmac=48b6008ceca7d08071f43fe93973700e111a0538698b0d2bff6801796e973d95"
              alt="Third slide"
              style={{ height: "50rem" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?w=740&t=st=1681997032~exp=1681997632~hmac=180f382f30a8a5cf47c202fb3471c8c8102f0ca56d09aa1f3e0bb4c3e8083e75"
              alt="Third slide"
              style={{ height: "50rem" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container-fluid p-5">
          <div className="text-center">
            <h2 class="title">
              <span class="title-word title-word-1">Welcome</span>
              <span class="title-word title-word-2">to</span>
              <span class="title-word title-word-3">our</span>
              <span class="title-word title-word-4">website</span>
            </h2>
          </div>
        </div>
        <CardGroup className="container-fluid my-5">
          <Row xs={2} md={4} className="g-4">
            {filteredData.map((body) => (
              <div key={body.id}>
                <Card>
                  <Card.Img variant="top" src={body.image} />
                  <Card.Body>
                    <Link to={`/AllProducts/${body.id}`} className="brandTitle">
                      <Card.Title className="fw-normal">
                        {showMore ? body.MoreTitle : body.LessTitle}
                        <span onClick={handleToggle} className="fw-bolder">
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
                          {body.reviews}
                        </p>
                      </div>

                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="row"
                      >
                        <div className="col">
                          <b className="fs-2">${body.ActPrice}</b>
                          <p className="fs-6 text-decoration-line-through">
                            ${body.DisPrice}
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
        <div className=" container my-5 pb-5" style={{ height: "5vh" }}>
          <div className="text-center padding-the-text">
            <h1 className="text-dark">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Your favourite products are here with Us"],
                }}
              />
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <div style={{ position: "relative" }}>
            <img
              src="https://img.freepik.com/free-photo/headphones-african-american-woman-s-portrait-isolated-dark-studio-background-multicolored-neon-light-beautiful-female-model-concept-human-emotions-facial-expression-sales-ad-fashion_155003-34470.jpg?size=626&ext=jpg&ga=GA1.1.431024627.1681996656&semt=sph"
              alt=""
              style={{ width: "98vw" }}
            />
            <div
              style={{
                position: "absolute",
                top: "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "2.5vw",
                  textAlign: "center",
                }}
              >
                Immerse yourself in sound like never before.
              </p>

              <p
                style={{
                  color: "white",
                  fontSize: "1.5vw",
                  textAlign: "center",
                }}
              >
                Hear the difference with our high-quality headphones.
                <br />
                Elevate your audio experience with our premium headphones.
                <br /> Your music deserves the best, and that's what we offer.
              </p>
              <div className="text-center">
                <Button variant="danger" size="sm">
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
