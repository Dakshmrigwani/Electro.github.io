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

  return (
    <>
      <Form
        className="d-flex mr-auto position-relative"
        onChange={(e) => {
          setQuery(e.target.value);
          setShowResults(true);
        }}
      >
        <InputGroup>
          <Form.Control
            placeholder="Search product name"
            aria-describedby="basic-addon1"
            value={query}
          />
          <Button
            variant="outline-secondary"
            id="basic-addon1"
            style={{ boxShadow: "none" }}
          >
            <BsSearch />
          </Button>
        </InputGroup>

        {query && showResults ? (
          <div className="position-absolute  top-100 end-0 translate-middle-x">
            <div className="card">
              <div className="card-body" style={{ overflow: "auto" }}>
                {ProductDetailData.filter((product) =>
                  product.LessTitle.toLowerCase().includes(query)
                ).map((product) => (
                  <div key={product.id}>
                    <Link
                      to={`/AllProducts/${product.id}`}
                      className="brandTitle"
                      onClick={handleLinkClick}
                    >
                      {product.LessTitle}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Form>
    </>
  );
}
