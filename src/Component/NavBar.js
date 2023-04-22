import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart3, BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/Pages/Body" className="text-decoration-none text-dark">
              Electro.
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/Pages/Headphone"
                className="text-decoration-none text-dark me-2"
              >
                Headphone
              </Link>
              <Link
                to="/Pages/Laptops"
                className="text-decoration-none text-dark me-2"
              >
                Laptops
              </Link>
              <Link
                to="/Pages/Speaker"
                className="text-decoration-none text-dark me-2"
              >
                Speakers
              </Link>
              <Link
                to="/Pages/Watches"
                className="text-decoration-none text-dark me-2"
              >
                Watches
              </Link>
              <Link
                to="/Pages/Smartphones"
                className="text-decoration-none text-dark me-2"
              >
                Smartphones
              </Link>
              <Link
                to="/Pages/About"
                className="text-decoration-none text-dark me-2"
              >
                AboutUs
              </Link>
              <Link
                to="/Pages/Services"
                className="text-decoration-none text-dark"
              >
                Services
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button
              className="btn btn-light mb-1"
              style={{ boxShadow: "none" }}
            >
              <BsSunFill /> : <BsMoonStarsFill />
            </Button>
            <Button className="btn btn-light" style={{ boxShadow: "none" }}>
              <Link to="/Pages/Wishlist">
                <AiOutlineHeart className="text-dark fs-4" />
              </Link>
            </Button>
            <Button className="btn btn-light" style={{ boxShadow: "none" }}>
              <Link to="/pages/Cart">
                <BsCart3 className="text-dark fs-4" />
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
