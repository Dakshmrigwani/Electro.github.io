import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { bodyList } from "../Component/data";
import Layout from "../Component/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
  "https://m.media-amazon.com/images/I/41ogno7CdvL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/51U8KSa8qsL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/41d6iHtmzAL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/418ugj3ZEBL._SS40_.jpg",
  "https://m.media-amazon.com/images/I/41d6iHtmzAL._SS40_.jpg",
];

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
              <Col md={4}></Col>
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
