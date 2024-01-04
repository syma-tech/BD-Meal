import { Card, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [meals, setMeals] = useState({});
  //   const urlByName = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  console.log("hello");
  useEffect(() => {
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=a`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("bye");
      });
  }, []);
  return (
    <div>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title> Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
