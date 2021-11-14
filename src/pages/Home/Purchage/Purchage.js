import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";

const Purchage = () => {
  const { id } = useParams();
  const [purchageProduct, setPurchageProduct] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { name, description, img, price } = purchageProduct;
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://timlux-server.herokuapp.com/purchage/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchageProduct(data));
  }, []);

  const onSubmit = (data) => {
    data.purchageProduct = purchageProduct;
    console.log(data);
    axios
      .post("https://timlux-server.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Order successfully");
          reset();
        }
      });
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={img} alt="" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <h1
              style={{ marginBottom: "10px", color: "rgba(255, 81, 0, 0.973)" }}
            >
              {name}
            </h1>
            <Typography variant="body1" sx={{ fontSize: "17px" }}>
              {description}
            </Typography>
            <h4>
              <span
                style={{ fontSize: "23px", color: "rgba(255, 81, 0, 0.973)" }}
              >
                $
              </span>
              <span
                style={{ color: "rgba(255, 81, 0, 0.973)", fontSize: "30px" }}
              >
                {price}
              </span>
            </h4>
          </Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Your Name"
                value={user?.displayName}
                {...register("name", { required: true, maxLength: 20 })}
                style={{
                  width: "80%",
                  borderRadius: "3px",
                  border: "1px solid gray",
                  padding: "7px 10px",
                  margin: "8px 0",
                }}
              />
              <input
                placeholder="Your Email"
                value={user?.email}
                type="email"
                {...register("email", { required: true })}
                style={{
                  width: "80%",
                  borderRadius: "3px",
                  border: "1px solid gray",
                  padding: "7px 10px",
                  margin: "10px 0",
                }}
              />

              <input
                placeholder="Your Phone Number"
                type="number"
                {...register("phone", { required: true })}
                style={{
                  width: "80%",
                  borderRadius: "3px",
                  border: "1px solid gray",
                  padding: "7px 10px",
                  margin: "10px 0",
                }}
              />
              <input
                placeholder="Your Adress"
                {...register("address", { required: true })}
                style={{
                  width: "80%",
                  borderRadius: "3px",
                  border: "1px solid gray",
                  padding: "7px 10px",
                  margin: "10px 0",
                }}
              />
              <input
                type="submit"
                value="Purchage Now"
                style={{
                  width: "84%",
                  borderRadius: "3px",
                  border: "1px solid gray",
                  padding: "9px 10px",
                  margin: "10px 0",
                  backgroundColor: "rgba(255, 81, 0, 0.973)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "none",
                }}
              />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Purchage;
