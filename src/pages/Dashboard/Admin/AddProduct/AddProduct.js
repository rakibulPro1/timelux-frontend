import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://timlux-server.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product Added successfully");
          reset();
        }
      });
  };

  return (
    <Container>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
          color="info.main"
        >
          Add a Product
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "70%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
          }}
        >
          <input
            placeholder="Product Name"
            {...register("name", { required: true })}
            style={{
              width: "80%",
              borderRadius: "3px",
              border: "1px solid gray",
              padding: "7px 10px",
              margin: "8px 0",
            }}
          />
          <input
            placeholder="Product Image URL"
            {...register("img", { required: true })}
            style={{
              width: "80%",
              borderRadius: "3px",
              border: "1px solid gray",
              padding: "7px 10px",
              margin: "10px 0",
            }}
          />

          <input
            placeholder="Product Description"
            {...register("description", { required: true })}
            style={{
              width: "80%",
              borderRadius: "3px",
              border: "1px solid gray",
              padding: "7px 10px",
              margin: "10px 0",
            }}
          />
          <input
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
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
            value="Add Product"
            style={{
              width: "80%",
              borderRadius: "3px",
              border: "1px solid gray",
              padding: "9px 10px",
              margin: "10px 0",
              backgroundColor: "rgba(255, 81, 0, 0.973)",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          />
        </form>
      </Box>
    </Container>
  );
};

export default AddProduct;
