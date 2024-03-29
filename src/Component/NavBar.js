import Button from "react-bootstrap/Button";
import Logo from "./Electro-logo.png";
import { BsCart3, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { cartItems, wishItems } from "../Pages/items";
import { ThemeContext } from "../Context/ThemeContext";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
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
                    className="text-decoration-none navtext me-2"
                  >
                    Headphone
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    to="/Pages/Laptops"
                    className="text-decoration-none navtext me-2"
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
                    className="text-decoration-none navtext me-2"
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
                    className="text-decoration-none navtext me-2"
                  >
                    Watches
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link
                    to="/Pages/Smartphones"
                    className="text-decoration-none navtext me-2"
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
                  className="btn border-0 navbg"
                  style={{ boxShadow: "none" }}
                >
                  <Link to="/Pages/Wishlist" className="">
                    <span className="position-relative navbg">
                      <AiOutlineHeart className="navicons fs-4" />
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
                  className="btn  border-0 navbg"
                  style={{ boxShadow: "none" }}
                >
                  <Link to="/pages/Cart" className="">
                    <span className="position-relative navbg">
                      <BsCart3 className="navicons fs-4" />

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
                  className="btn  border-0 fs-5 navbg"
                  style={{ boxShadow: "none" }}
                >
                  <Link to="/pages/SignIn" className="">
                    <span className="navbg">
                      <AiOutlineUser className="navicons" />
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
