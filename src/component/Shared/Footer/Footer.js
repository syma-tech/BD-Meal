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
        <Row className="py-5 ">
          <h1 className="text-center text-warning border-bottom border-warning pb-5 mb-5">
            <FontAwesomeIcon className=" fs-1 me-5" icon={faBellConcierge} />
            BD-Meal
          </h1>
          <Col className="mt-5" md={5}>
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
          <Col md={{ span: 5, offset: 1 }}>
            <Container>
              <h4 className="fw-semibold ps-5 pt-5 text-success">
                Social Media Link Here
              </h4>
              <Row className="grid gap-3 bg-dark py-5 my-4">
                <Col>
                  <div className="p-2 pt-0 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faFacebookF}
                      />{" "}
                      0 Fans
                    </p>
                  </div>
                  <div className="p-2 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon className="text-info" icon={faTwitter} />{" "}
                      0 Followers
                    </p>
                  </div>
                  <div className="p-2 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon
                        className="text-danger"
                        icon={faPinterestP}
                      />{" "}
                      0 Followers
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="p-2 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon
                        className="text-warning-emphasis"
                        icon={faDribbble}
                      />{" "}
                      0 Followers
                    </p>
                  </div>
                  <div className="p-2 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faInstagram}
                      />{" "}
                      0 Followers
                    </p>
                  </div>
                  <div className="p-2 g-col-6">
                    <p className="mx-5 fs-6">
                      <FontAwesomeIcon
                        className="text-danger"
                        icon={faYoutube}
                      />{" "}
                      0 Subscriber
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="social-media pt-5 text-center text-warning border-top border-warning ">
          <p className="text-center my-4">
            © 2024 syma-tech. All Rights Reserved.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
