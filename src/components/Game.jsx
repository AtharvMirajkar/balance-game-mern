import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/game.css"; // Ensure this path is correct

const Game = ({ user, gameId }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [timeLeft, setTimeleft] = useState(120); // 2 minutes

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeleft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Notify server time is up
    }
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleNumberSelect = async (num) => {
    setSelectedNumber(num);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        <Col xs="auto" className="text-center">
          <h2 className="game-title mt-2">Balance Game</h2>
          <p className="time-left">Time left: {formatTime(timeLeft)}</p>
          <p className="selected-number card shadow mx-2">{selectedNumber}</p>
          <Row className="number-grid mx-1">
            {[...Array(101).keys()].map((num) => (
              <Col key={num} xs={2} sm={2} md={1} lg={1} className="p-1">
                <Button
                  onClick={() => handleNumberSelect(num)}
                  className={`number-button ${
                    num === selectedNumber ? "selected" : ""
                  }`}
                >
                  {num}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
