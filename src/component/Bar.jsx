import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

export default function Bar() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/SignUpModal");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Link to="/Cart">MyCart</Link>
          <Button variant="primary" onClick={handleSignUpClick}>
            SignUp
          </Button>{" "}
        </Container>
      </Navbar>
    </div>
  );
}
