import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { _id, name, description, img, price } = props.product;

  return (
    <Grid item xs={12} md={4} sx={{ my: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="290px"
          image={img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 600 }}
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <div>
            <h4
              style={{
                color: "rgba(255, 81, 0, 0.973)",
                fontSize: "22px",
              }}
            >
              <span>$</span>
              <span>{price}</span>
            </h4>
          </div>
          <div>
            <Link to={`/purchage/${_id}`}>
              <button
                type=""
                style={{
                  backgroundColor: "rgba(255, 81, 0, 0.973)",
                  padding: "5px 12px",
                  color: "white",
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "3px",
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
