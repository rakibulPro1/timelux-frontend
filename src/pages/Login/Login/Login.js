import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { useLocation, useHistory, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, error, loginUser, isLoading } = useAuth();
  const location = useLocation();
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
    loginUser(loginData.email, loginData.password, location, history);
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
          {error && <Alert severity="error">{error}</Alert>}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>Login</h2>
            <p>Please login using account detail bellow.</p>
          </div>
          <div className="login-form" style={{ padding: "15px" }}>
            <form onSubmit={handleLoginSubmit}>
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
                sx={{ width: "95%", mb: 3 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <small>
                  <Link to="/">Back to home</Link>
                </small>
                <small>
                  <Link to="/register">New user? Please Register</Link>
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
        <CircularProgress />
      )}
    </Container>
  );
};

export default Login;
