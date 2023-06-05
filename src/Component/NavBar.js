import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCart3 } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import React , {useEffect} from "react";
import { cartItems } from "../Pages/items";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <div className="d-flex">
            <span className="order-2 order-lg-1">
              <Navbar.Brand>
                <Link
                  to="/Pages/Body"
                  className="text-decoration-none text-dark"
                >
                  Electro.
                </Link>
              </Navbar.Brand>
            </span>
            <span className="order-1 order-lg-2">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "120px" }}
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
                    to="/Pages/Watch"
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
                </Nav>
              </Navbar.Collapse>
            </span>
          </div>
          <span className="d-flex d-sm-none">
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
            <Button
              className="btn btn-light fs-5"
              style={{ boxShadow: "none" }}
            >
              <Link to="/pages/SignIn">
                <AiOutlineUser />
              </Link>
            </Button>
          </span>
          <div className="d-flex gap-3">
            <span className="d-flex justify-content-center order-2 order-sm-1">
              <SearchBar className="increase_on_click" />
            </span>
            <div className="d-none d-sm-flex justify-content-end order-1 order-sm-2">
              <Button className="btn btn-light" style={{ boxShadow: "none" }}>
                <Link to="/Pages/Wishlist">
                  <span className="position-relative">
                    <AiOutlineHeart className="text-dark fs-4" />
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                      <span className="">1</span>
                    </span> */}
                  </span>
                </Link>
              </Button>
              <Button className="btn btn-light" style={{ boxShadow: "none" }}>
                <Link to="/pages/Cart">
                  <span className="position-relative">
                    <BsCart3 className="text-dark fs-4" />
                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                      <span className="">{cartItems.length}</span>
                    </span>
                  </span>
                </Link>
              </Button>
              <Button
                className="btn btn-light fs-5"
                style={{ boxShadow: "none" }}
              >
                <Link to="/pages/SignIn">
                  <span>
                    <AiOutlineUser />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
