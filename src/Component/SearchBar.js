import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { ProductDetailData } from "./data";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Form
        className="d-flex mr-auto position-relative"
        onChange={(e) => setQuery(e.target.value)}
      >
        <InputGroup>
          <Form.Control
            placeholder="Search product name"
            aria-describedby="basic-addon1"
          />
          <Button
            variant="outline-secondary"
            id="basic-addon1"
            style={{ boxShadow: "none" }}
          >
            <BsSearch />
          </Button>
        </InputGroup>
      </Form>
      {query ? (
        <div className="position-absolute end-0 top-100">
          <div className="card">
            <div className="card-body" style={{ width: "500px", overflow: "auto" }}>
              {ProductDetailData.filter((product) =>
                product.LessTitle.toLowerCase().includes(query)
              ).map((product) => (
                <div key={product.id}>
                  <div className="">{product.LessTitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
