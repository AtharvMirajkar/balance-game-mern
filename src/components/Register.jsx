import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
      });
      onRegister(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2 className="text-center my-5">Register</h2>

          <Form>
            <Form.Group controlId="formName" className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" onClick={handleRegister}>
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
