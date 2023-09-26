import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Logo from "./Electro-logo.png"
import Navbar from "react-bootstrap/Navbar";

import { BsCart3 } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { cartItems, wishItems } from "../Pages/items";


function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" expand="lg" className="sticky-top">
        <Container fluid>
          <div className="d-flex">
            <span className="order-2 order-lg-1">
             
                <div class="imglogo">
                <Link
                  to="/Pages/Body"
                  className="text-decoration-none text-dark "
                >
                  <img src={Logo} alt="logo"/>
                </Link>
                </div>
              
            </span>
            <span className="d-flex align-items-center ms-3 order-1 order-lg-2">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                 
                >
                  <Link
                    to="/Pages/Headphone"
                    className="text-decoration-none text-light me-2"
                  >
                    Headphone
                  </Link>
                  <Link
                    to="/Pages/Laptops"
                    className="text-decoration-none text-light me-2"
                  >
                    Laptops
                  </Link>
                  <Link
                    to="/Pages/Speaker"
                    className="text-decoration-none text-light me-2"
                  >
                    Speakers
                  </Link>
                  <Link
                    to="/Pages/Watch"
                    className="text-decoration-none text-light me-2"
                  >
                    Watches
                  </Link>
                  <Link
                    to="/Pages/Smartphones"
                    className="text-decoration-none text-light me-2"
                  >
                    Smartphones
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </span>
          </div>
          <span className="d-flex d-lg-none">
            <Button className="btn bg-dark border-0" style={{ boxShadow: "none" }}>
              <Link to="/Pages/Wishlist">
                <AiOutlineHeart className="text-light fs-4" />
              </Link>
            </Button>
            <Button className="btn bg-dark border-0" style={{ boxShadow: "none" }}>
              <Link to="/pages/Cart">
                <BsCart3 className="text-light fs-4" />
              </Link>
            </Button>
            <Button
              className="btn bg-dark border-0 fs-5"
              style={{ boxShadow: "none" }}
            >
              <Link to="/pages/SignIn">
                <AiOutlineUser className="text-light fs-4" />
              </Link>
            </Button>
          </span>
          <div className="d-flex d-lg-none justify-content-center align-items-center w-100 gap-3">
            <span className="d-flex order-2 order-sm-1">
              <SearchBar className="increase_on_click" />
            </span>
          </div>
          <div className="d-none d-lg-flex gap-3">
            <span className="d-flex order-2 order-sm-1">
              <SearchBar className="increase_on_click" />
            </span>

            <div className="d-none d-sm-flex justify-content-end order-1 order-sm-2">
              <Button className="btn bg-dark border-0" style={{ boxShadow: "none" }}>
                <Link to="/Pages/Wishlist">
                  <span className="position-relative">
                    <AiOutlineHeart className="text-light fs-4" />
                    {wishItems.length === 0 ? (
                      ""
                    ) : (
                      <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </span>
                </Link>
              </Button>
              <Button className="btn bg-dark border-0" style={{ boxShadow: "none" }}>
                <Link to="/pages/Cart">
                  <span className="position-relative">
                    <BsCart3 className="text-light fs-4" />

                    <span className="">
                      {cartItems.length === 0 ? (
                        ""
                      ) : (
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      )}
                    </span>
                  </span>
                </Link>
              </Button>
              <Button
                className="btn bg-dark border-0 fs-5"
                style={{ boxShadow: "none" }}
              >
                <Link to="/pages/SignIn">
                  <span>
                    <AiOutlineUser className="text-light" />
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
