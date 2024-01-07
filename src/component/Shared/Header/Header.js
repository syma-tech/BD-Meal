import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import React, { useState } from "react";

const Header = ({ getSearchFood }) => {
  // const [searchFood, getSearchFood] = useState("");
  // console.log(searchFood);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary opacity-75 "
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">BD-MEAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Recipes</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#deets">Category</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Order
              </Nav.Link>
            </Nav>
            {/* <Nav></Nav> */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => getSearchFood(e.target.value)}
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
