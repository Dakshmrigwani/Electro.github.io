import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { ProductDetailData } from "./data";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleLinkClick = () => {
    setShowResults(false);
    setQuery("");
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);
    setShowResults(inputValue !== "");
  };

  const filteredProducts = ProductDetailData.filter((product) =>
    product.LessTitle.toLowerCase().includes(query)
  );

  return (
    <>
      <Form className="d-flex mr-auto position-relative ">
        <InputGroup>
          <Form.Control
            placeholder="Search product name"
            aria-describedby="basic-addon1"
            value={query}
            onChange={handleInputChange}
          />
         
        </InputGroup>
      </Form>

      {query && showResults ? (
        <div className="position-absolute top-100">
          <div className="card h-100">
            <div className="card-body" style={{ overflow: "auto" }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id}>
                    <Link
                      to={`/AllProducts/${product.id}`}
                      className="brandTitle"
                      onClick={handleLinkClick}
                    >
                      {product.LessTitle}
                    </Link>
                  </div>
                ))
              ) : (
                <div className="card-text px-5">
                  <p>No Results Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
