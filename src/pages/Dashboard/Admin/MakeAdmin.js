import { Button, TextField, Alert, Container } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://timlux-server.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        {success && (
          <Alert severity="success" sx={{ width: "60%" }}>
            Made Admin successfully!
          </Alert>
        )}
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "60%", mb: 3 }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Button sx={{ width: "60%" }} type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default MakeAdmin;
