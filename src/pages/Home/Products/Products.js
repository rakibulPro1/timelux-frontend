import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Product from "../Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://timlux-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
