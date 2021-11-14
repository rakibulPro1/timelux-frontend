import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClientSingleReview from "../ClientSingleReview/ClientSingleReview";

const ClientReviews = () => {
  const [clientReviews, setClientReviews] = useState([]);

  useEffect(() => {
    fetch("https://timlux-server.herokuapp.com/client-reviews")
      .then((res) => res.json())
      .then((data) => setClientReviews(data));
  }, []);

  return (
    <Container sx={{ mb: 5 }}>
      <Typography
        variant="h4"
        color="info.main"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 4, mb: 5 }}
      >
        Client Reviews
      </Typography>
      <Grid container spacing={2}>
        {clientReviews.map((clientSingleReview) => (
          <ClientSingleReview
            clientSingleReview={clientSingleReview}
          ></ClientSingleReview>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientReviews;
