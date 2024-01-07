import { Button, Card, Col, ListGroup } from "react-bootstrap";
import "./ShowFoods.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ShowFoods = ({ food }) => {
  const {
    strTags,
    strSource,
    strYoutube,
    strMealThumb,
    strInstructions,
    strMeal,
    strCategory,
    strArea,
    idMeal,
  } = food;

  const element = <FontAwesomeIcon icon={faEnvelope} />;
  const youtube = (
    <FontAwesomeIcon className="text-danger fs-5" icon={faYoutube} />
  );
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title> {strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{strCategory}</ListGroup.Item>
          <ListGroup.Item>{strArea}</ListGroup.Item>
          <ListGroup.Item>
            {strTags ? (
              strTags
            ) : (
              <span className="text-warning bg-dark">Unknown</span>
            )}
          </ListGroup.Item>
        </ListGroup>
        <Button
          className="text-warning"
          href={strYoutube}
          target="_blank"
          variant="dark"
        >
          Watch Recipe {youtube}
        </Button>
      </Card>{" "}
    </Col>
  );
};

export default ShowFoods;
