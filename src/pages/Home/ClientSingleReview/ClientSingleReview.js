import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ClientSingleReview = (props) => {
  const { name, img, comment, rating } = props.clientSingleReview;
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="120"
          image={img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {comment}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ClientSingleReview;
