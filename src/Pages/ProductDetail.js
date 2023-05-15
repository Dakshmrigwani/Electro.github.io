import React, { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailData } from "../Component/data";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AliceCarousel from "react-alice-carousel";
import { CiLocationOn } from "react-icons/ci";
import { BsPencil } from "react-icons/bs";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactStars from "react-stars";

// const items = [
//   <div className="item" data-value="1">
//     <img
//       src="https://m.media-amazon.com/images/I/61ljxTBpTCL._SY450_.jpg"
//       alt=""
//     />
//   </div>,
//   <div className="item" data-value="2">
//     <img
//       src="https://m.media-amazon.com/images/I/613W14SQzDL._SY450_.jpg"
//       alt=""
//     />
//   </div>,
//   <div className="item" data-value="3">
//     <img
//       src="https://m.media-amazon.com/images/I/61MzIrP7rFL._SY450_.jpg"
//       alt=""
//     />
//   </div>,
//   <div className="item" data-value="4">
//     <img
//       src="https://m.media-amazon.com/images/I/71UbF6PnUBL._SY450_.jpg"
//       alt=""
//     />
//   </div>,
//   <div className="item" data-value="5">
//     <img
//       src="https://m.media-amazon.com/images/I/61DzhtpDOLL._SY450_.jpgy"
//       alt=""
//     />
//   </div>,
// ];

// const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
//   return items.map((item, i) => (
//     <div
//       className="thumb"
//       onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
//     >
//       {item}
//     </div>
//   ));
// };
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        age: state.age + 1,
      };
    }
    case "decremented_age": {
      return {
        age: state.age - 1,
      };
    }
  }
  throw new Error();
}

const initialState = { age: 1 };

function ProductDetail() {
  const { productId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  // const [thumbs] = useState(
  //   thumbItems(items, [setThumbIndex, setThumbAnimation])
  // );

  // const slideNext = () => {
  //   if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
  //     setThumbAnimation(true);
  //     setThumbIndex(thumbIndex + 1);
  //   }
  // };

  // const slidePrev = () => {
  //   if (!thumbAnimation && thumbIndex > 0) {
  //     setThumbAnimation(true);
  //     setThumbIndex(thumbIndex - 1);
  //   }
  // };

  // const syncMainBeforeChange = (e) => {
  //   setMainAnimation(true);
  // };

  // const syncMainAfterChange = (e) => {
  //   setMainAnimation(false);

  //   if (e.type === "action") {
  //     setThumbIndex(e.item);
  //     setThumbAnimation(false);
  //   } else {
  //     setMainIndex(thumbIndex);
  //   }
  // };

  // const syncThumbs = (e) => {
  //   setThumbIndex(e.item);
  //   setThumbAnimation(false);

  //   if (!mainAnimation) {
  //     setMainIndex(e.item);
  //   }
  // };

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleDecrementAge() {
    dispatch({ type: "decremented_age" });
  }

  const selectedProduct = ProductDetailData.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <>
      <Layout>
        {selectedProduct && (
          <div className="container-fluid my-5">
            <Row>
              <Col md={4}>
                {/* <AliceCarousel
                  activeIndex={mainIndex}
                  animationType="fadeout"
                  animationDuration={800}
                  disableDotsControls
                  disableButtonsControls
                  items={items}
                  mouseTracking={!thumbAnimation}
                  onSlideChange={syncMainBeforeChange}
                  onSlideChanged={syncMainAfterChange}
                  touchTracking={!thumbAnimation}
                  autoWidth
                />
                <div className="thumbs">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="btn-prev" onClick={slidePrev}>
                        &lang;
                      </div>
                    </div>
                    <div className="col-md-8">
                      <AliceCarousel
                        activeIndex={thumbIndex}
                        autoWidth
                        disableDotsControls
                        disableButtonsControls
                        items={thumbs}
                        mouseTracking={false}
                        onSlideChanged={syncThumbs}
                        touchTracking={!mainAnimation}
                        
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="btn-next" onClick={slideNext}>
                        &rang;
                      </div>
                    </div>
                  </div>
                </div>*/}
              </Col>
              <Col md={5}>
                <h2>{selectedProduct.MoreTitle}</h2>
                <p>Price: ${selectedProduct.ActPrice}</p>
                <p>Discount: {selectedProduct.disPercent}%</p>
                <ReactStars value={selectedProduct.Rating} />
                <p>
                  Rating: {selectedProduct.Rating} ({selectedProduct.reviews}{" "}
                  reviews)
                </p>
                <b>Here are some details</b>
                <ul className="mt-4">
                  <li>{selectedProduct.description1}</li>
                  <li>{selectedProduct.description2}</li>
                  <li>{selectedProduct.description3}</li>
                  <li>{selectedProduct.description4}</li>
                  <li>{selectedProduct.description5}</li>
                </ul>
              </Col>
              <Col md={3}>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                  <div className="">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title className="fs-6 text-secondary">
                          Order Summary
                        </Card.Title>

                        <div className="my-2">
                          <hr />
                        </div>
                        <Row>
                          <Col md={6}>
                            <div className="d-grid">
                              <b>Sent To</b>
                              <div class="d-inline-flex">
                                <span class="me-1">
                                  <CiLocationOn />
                                </span>
                                <span
                                  className="d-inline-block text-truncate"
                                  style={{ maxWidth: "150px" }}
                                >
                                  Praeterea iter est quasdam res quas ex
                                  communi.
                                </span>
                                <span className="d-flex justify-content-end">
                                  <BsPencil />
                                </span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="mt-3">
                          <Col md={4}>
                            <b>Quantity</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <Button
                              onClick={handleButtonClick}
                              size="sm"
                              variant="light"
                              className="mb-1"
                              style={{ boxShadow: "none" }}
                            >
                              +
                            </Button>

                            <input
                              value={state.age}
                              style={{ width: "2rem" }}
                            />

                            <Button
                              size="sm"
                              variant="light"
                              onClick={handleDecrementAge}
                              className="mb-1"
                              style={{ boxShadow: "none" }}
                            >
                              -
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={4}>
                            <b>Weight</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>500 g</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <b>Total</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>$78.76</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={4}>
                            <b>Color</b>
                          </Col>
                          <Col md={8} className="text-end">
                            <b>Red</b>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={5}>
                            <b>Delievery</b>
                          </Col>
                          <Col md={7} className="text-end">
                            <b>$78.76</b>
                          </Col>
                        </Row>
                        <div className="d-flex flex-column gap-2 mt-3">
                          <Row>
                            <Button style={{ boxShadow: "none" }}>
                              Add to Cart
                            </Button>
                          </Row>
                          <Row>
                            <Button
                              variant="light"
                              style={{ boxShadow: "none" }}
                            >
                              Buy Now
                            </Button>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Layout>
    </>
  );
}

export default ProductDetail;
