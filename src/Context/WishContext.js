import React,{useEffect, useState} from "react";
import LayOutNone from "../Component/LayOutNone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import {BsEmojiSmile, BsCurrencyRupee} from "react-icons/bs"
import ReactStars from "react-stars";
import { removeFromWishlist , wishItems , addToCart} from "../Pages/items"

export default function WishContext() {
    const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const savedWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];
    setWishList(savedWishItems);
  }, []);
  
  

  function handleRemoveFromWishlist(product) {
    removeFromWishlist(product);
    const updatedWishList = wishList.filter((item) => item.id !== product.id);
    setWishList(updatedWishList);
  }
  
  const dataTransfer = (product) => {
    addToCart(product)
    handleRemoveFromWishlist(product)
    
  }
  return (
    <>
        <LayOutNone>
        <div className="container">
          <div className="d-flex d-md-none gap-2">
            <div className="mt-2">
              <Button className="outline-primary">
                <Link to="/" className="text-decoration-none text-light">
                  Back to Home Page
                </Link>
              </Button>
            </div>
            <div className="mt-2">
              <Button className="outline-primary">
                <Link
                  to="/Pages/Cart"
                  className="text-decoration-none text-light"
                >
                  Back to Cart Page
                </Link>
              </Button>
            </div>
          </div>
          <div className="row d-none d-md-flex">
            <div className="col-6 mt-2">
              <Button className="outline-primary">
                <Link to="/" className="text-decoration-none text-light">
                  Back to Home Page
                </Link>
              </Button>
            </div>

            <div className="col-6 mt-2">
              <div className="d-flex justify-content-end">
                <Button className="outline-primary">
                  <Link
                    to="/Pages/Cart"
                    className="text-decoration-none text-light"
                  >
                    Back to Cart Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-content-center mt-5">
            {wishList.length === 0 ? (
              <div className="d-flex flex-column justify-content-center align-items-center h-100 display-4 col-0">
                <BsEmojiSmile />
                <p>No content found</p>
                <p className="text-center">Please add the item to the Wishlist</p>
              </div>
            ) : (
              <>
                      <div className="d-flex flex-column gap-3">
                
                    <Card>
                      <Card.Header>Wishlist</Card.Header>
                      {wishList.map((product) => (
                  <div key={product.id}>
                      <Card.Body >
                        <Card className="">
                          <Row>
                            <Col md={4} lg={3} className="d-inline">
                              <div style={{ width: "10rem" }}>
                                <Card.Img variant="top" src={product.image} />
                              </div>
                            </Col>
                            <Col md={8} lg={9}>
                              <Card.Body>
                                <Card.Title>{product.LessTitle}</Card.Title>
                                <Card.Text>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="row"
                                  >
                                    <div className="col-6">
                                      <b className="fs-2">
                                        <BsCurrencyRupee/>{product.DisPrice}
                                      </b>
                                      <p className="fs-6 text-decoration-line-through">
                                        <BsCurrencyRupee/>{product.ActPrice}
                                      </p>
                                    </div>
                                    <div className="col-6">
                                      <ReactStars value={product.Rating} />
                                      <p>{product.reviews}</p>
                                    </div>

                                    <div className="col">
                                      <p className="text-start">
                                        ({product.disPercent}% OFF)
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                    }}
                                    className="row row-cols-auto d-flex justify-content-start"
                                  >
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      style={{
                                        backgroundColor: "#7E90C8",
                                        color: "white",
                                      }}
                                      className="col-10"
                                      onClick = {() => dataTransfer(product)}
                                      
                                    >
                                      Add to cart
                                    </Button>
                                    <Button
                                      variant="outline-light"
                                      size="lg"
                                      className="col-2 text-dark"
                                      style={{ boxShadow: "none" }}
                                      onClick={()=>handleRemoveFromWishlist(product)}
                                    >
                                      <AiOutlineDelete />
                                    </Button>
                                  </div>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Card.Body>
                      </div>
                      ))}
                    </Card>
                </div>
              </>
            )}
          </div>
        </div>
      </LayOutNone>
    </>
  );
}
