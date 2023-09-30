import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Logo from "./Electro-logo.png";
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
      {/* <Navbar bg="dark" expand="lg" className="sticky-top">
        <Container fluid>
          <div className="d-flex">
            <span className="order-2 order-lg-1">
              
            </span>
            <span className="d-flex align-items-center ms-3 order-1 order-lg-2">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0">
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
            
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              
          
            <Button
              className="btn bg-dark border-0"
              style={{ boxShadow: "none" }}
            >
              <Link to="/Pages/Wishlist">
                <AiOutlineHeart className="text-light fs-4" />
              </Link>
            </Button>
            <Button
              className="btn bg-dark border-0"
              style={{ boxShadow: "none" }}
            >
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
            <span className="d-flex form-switch ">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </span>
            </div>
          <div className="d-none d-lg-flex gap-3">
            <span className="d-flex order-2 order-sm-1">
              <SearchBar className="increase_on_click" />
            </span>

            <div className="d-none d-sm-flex justify-content-end order-1 order-sm-2">
              <Button
                className="btn bg-dark border-0"
                style={{ boxShadow: "none" }}
              >
                <Link to="/Pages/Wishlist">
                  <span className="position-relative">
                    <AiOutlineHeart className="text-light fs-4" />
                    {wishItems.length === 0 ? (
                      ""
                    ) : (
                      <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </span>
                </Link>
              </Button>
              <Button
                className="btn bg-dark border-0"
                style={{ boxShadow: "none" }}
              >
                <Link to="/pages/Cart">
                  <span className="position-relative">
                    <BsCart3 className="text-light fs-4" />

                    <span className="">
                      {cartItems.length === 0 ? (
                        ""
                      ) : (
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                          <span className="visually-hidden">unread messages</span>
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
      </Navbar> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div className="imglogo">
              <Link
                to="/Pages/Body"
                className="text-decoration-none text-dark "
              >
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page">
                  {" "}
                  <Link
                    to="/Pages/Headphone"
                    className="text-decoration-none text-light me-2"
                  >
                    Headphone
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    to="/Pages/Laptops"
                    className="text-decoration-none text-light me-2"
                  >
                    Laptops
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {" "}
                  <Link
                    to="/Pages/Speaker"
                    className="text-decoration-none text-light me-2"
                  >
                    Speakers
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {" "}
                  <Link
                    to="/Pages/Watch"
                    className="text-decoration-none text-light me-2"
                  >
                    Watches
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    to="/Pages/Smartphones"
                    className="text-decoration-none text-light me-2"
                  >
                    Smartphones
                  </Link>
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <SearchBar className="increase_on_click" />
              <div className="d-flex gap-2 ms-2">
                <Button
                  className="btn bg-dark border-0"
                  style={{ boxShadow: "none" }}
                >
                  <Link to="/Pages/Wishlist">
                    <span className="position-relative">
                      <AiOutlineHeart className="text-light fs-4" />
                      {wishItems.length === 0 ? (
                        ""
                      ) : (
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      )}
                    </span>
                  </Link>
                </Button>
                <Button
                  className="btn bg-dark border-0"
                  style={{ boxShadow: "none" }}
                >
                  <Link to="/pages/Cart">
                    <span className="position-relative">
                      <BsCart3 className="text-light fs-4" />

                      <span className="">
                        {cartItems.length === 0 ? (
                          ""
                        ) : (
                          <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                            <span className="visually-hidden">
                              unread messages
                            </span>
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
