import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Login() {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);
  const [products, setProducts] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("data"));

    if (
      LoginData.email === storedData.email &&
      LoginData.password === storedData.password
    ) {
      setLoginSuccess(true);

      setShowLogin(false);
      setProducts(true);
      setTimeout(() => {
        navigate("/Products");
      }, 1000);
    } else {
      setLoginFailed(true);
      setShowLogin(true);
      setProducts(false);
    }
  };

  const goBack = () => {
    navigate("/SignUpModal");
  };

  return (
    <>
      {loginFailed && (
        <Alert
          variant="danger"
          onClose={() => setLoginFailed(false)}
          dismissible
        >
          <Alert.Heading>Login Failed!</Alert.Heading>
          <p>Oops! No user found. Please try again.</p>
        </Alert>
      )}
      {showLogin && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  onChange={(e) => handleChange(e)}
                  name="email"
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => handleChange(e)}
                  name="password"
                />
              </Modal.Body>

              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Button variant="primary" onClick={goBack}>
                  Close
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </div>
      )}

      {loginSuccess && (
        <Alert
          variant="success"
          onClose={() => setLoginSuccess(false)}
          dismissible
        >
          <Alert.Heading>Login Successful!</Alert.Heading>
          <p>You have successfully logged in.</p>
        </Alert>
      )}
    </>
  );
}

export default Login;
