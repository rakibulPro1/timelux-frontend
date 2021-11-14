import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";

import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { error, registerUser, isLoading } = useAuth();

  const history = useHistory();

  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password doesn't match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isLoading ? (
        <div className="login-box" style={{ marginTop: "15px" }}>
          {error && <Alert severity="success">{error}</Alert>}

          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>Register</h2>
            <p>Please Register if you have no account</p>
          </div>
          <div className="login-form" style={{ padding: "15px" }}>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "95%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "95%", mb: 3 }}
                id="standard-basic"
                label="Retype Password"
                type="password"
                name="password2"
                onChange={handleOnChange}
                variant="standard"
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <small>
                  <Link to="/">Back to home</Link>
                </small>
                <small>
                  <Link to="/login">Already have account? please Register</Link>
                </small>
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, width: "100%" }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "15px " }}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export default Register;
