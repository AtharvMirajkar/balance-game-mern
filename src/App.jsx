import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <h2 className="text-center mt-5">Balance game</h2>
      <Register />
    </>
  );
}

export default App;
