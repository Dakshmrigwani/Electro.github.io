import React from "react";
import { useParams } from "react-router-dom";
import { bodyList } from "../Component/data";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function ProductDetail() {
  const { productId } = useParams();

  // Find the selected product from the bodyList array
  const selectedProduct = bodyList.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <>
      <Layout>
        {selectedProduct && (
          <div className="container-fluid my-5">
            <Row>
              <Col md={4}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.MoreTitle}
                  style={{ width: "20rem" }}
                />
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=373940"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={5}>
                <h2>{selectedProduct.MoreTitle}</h2>
                <p>Price: ${selectedProduct.ActPrice}</p>
                <p>Discount: {selectedProduct.disPercent}%</p>
                <p>
                  Rating: {selectedProduct.Rating} ({selectedProduct.reviews}{" "}
                  reviews)
                </p>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        )}
      </Layout>
    </>
  );
}

export default ProductDetail;
