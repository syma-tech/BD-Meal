import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import {
  faDribbble,
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-5">
      <Container className="message">
        <Row className="py-5 border-bottom border-warning">
          <Col md={5}>
            <Form>
              <Form.Group>
                <Form.Label>Send Us a Message</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control className="pb-5" placeholder="Message" />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>2 </Col>
        </Row>
        <Row className="social-media my-5">
          <h1 className="text-center text-warning">
            <FontAwesomeIcon className=" fs-1 me-5" icon={faBellConcierge} />
            BD-Meal
          </h1>
          <p className="my-5  text-center">
            <span className="mx-5">
              <FontAwesomeIcon className="text-primary" icon={faFacebookF} /> 0
              Fans
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-info" icon={faTwitter} /> 0
              Followers
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-danger" icon={faPinterestP} /> 0
              Followers
            </span>
            <span className="mx-5">
              <FontAwesomeIcon
                className="text-warning-emphasis"
                icon={faDribbble}
              />{" "}
              0 Followers
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-primary" icon={faInstagram} /> 0
              Followers
            </span>
            <span className="mx-5">
              <FontAwesomeIcon className="text-danger" icon={faYoutube} /> 0
              Subscriber
            </span>
          </p>
          <p className="text-center">© 2024 syma-tech. All Rights Reserved.</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
