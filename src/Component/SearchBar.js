import React,{useState} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";


export default function SearchBar(){
    return(
        <>
          <Form className="d-flex mr-auto">
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
        </>
    )
}