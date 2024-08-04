import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Results = ({ results }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Results</h2>
          <p>Winner: {results.winner}</p>
          <p>Average: {results.average}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
