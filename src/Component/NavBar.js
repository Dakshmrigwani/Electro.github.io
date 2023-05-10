import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { BsCart3, BsMoonStarsFill, BsSunFill, BsSearch } from "react-icons/bs";
import ReactSearchBox from "react-search-box";
import {
  AiOutlineHeart,
  AiOutlineUserAdd,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
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
            </Nav>
            <Form className="d-flex mr-auto">
              <InputGroup>
                <ReactSearchBox
                  placeholder="Search product name"
                  className="me-2"
                  data={data}
                  callback={(record) => console.log(record)}
                  autoComplete="off"
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

            {/* <Button 
               className="btn btn-light" 
              style={{ boxShadow: "none" }} 
               onClick={toggleDarkMode} 
            >
              {theme ? <BsSunFill /> : <BsMoonStarsFill />}
            </Button> */}
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
