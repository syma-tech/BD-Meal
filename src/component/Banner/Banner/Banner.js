import { Card, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import React from "react";
import NotFound from "../../../images/404.jpg";
import ShowFoods from "../../ShowFoods/ShowFoods/ShowFoods";

const Banner = ({ foodsName }) => {
  const foods = foodsName.meals;
  console.log(foods);
  return (
    <div className="py-4">
      <Container className="py-5">
        <Row xs={1} sm={2} md={3} xl={4} className="g-4">
          {foods?.map((food) => (
            <ShowFoods food={food} key={food.idMeal} />
            // <Col key={idx}>
            //   <Card>
            //     <Card.Img variant="top" src="holder.js/100px160" />
            //     <Card.Body>
            //       <Card.Title> Card title</Card.Title>
            //       <Card.Text>
            //         This is a longer card with supporting text below as a
            //         natural lead-in to additional content. This content is a
            //         little bit longer.
            //       </Card.Text>
            //     </Card.Body>
            //   </Card>{" "}
            // </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
