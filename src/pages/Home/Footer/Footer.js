import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import footerImg1 from "../../../images/watches/watch-2.jpg";
import footerImg2 from "../../../images/watches/watch-3.jpg";
import WatchIcon from "@mui/icons-material/Watch";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2} mt={5} mb={3}>
        <Grid item sm={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <WatchIcon sx={{ fontSize: "38px" }} />{" "}
            <span
              style={{ fontSize: "25px", fontFamily: "'Pacifico', cursive" }}
            >
              TimeLux
            </span>
          </Box>
          <p style={{ fontWeight: "bold", marginBottom: "1px" }}>Address</p>
          <p style={{ fontWeight: "bold", marginBottom: "1px" }}>
            Anowara, chattagram, 27no road
          </p>
          <p style={{ fontWeight: "bold", marginBottom: "1px" }}>Need Help?</p>
          <p style={{ marginBottom: "1px" }}>Email: rakibul102760@gmail.com</p>
          <p style={{ marginBottom: "10px" }}>Call: 01851258931</p>
        </Grid>
        <Grid item sm={12} md={2}>
          <div>
            <h4>About menu</h4>

            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
                marginTop: "20px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Shop Now
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Reviews{" "}
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Offer
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              New Products
            </Link>
          </div>
        </Grid>
        <Grid item sm={12} md={2}>
          <div>
            <h4>Useful Links</h4>

            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
                marginTop: "20px",
              }}
              to="/"
            >
              Privacy Policy
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Shop Now
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Products sell
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Returns policy
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              promotion
            </Link>
            <Link
              style={{
                display: "block",
                textDecoration: "none",
                marginBottom: "5px",
              }}
              to="/"
            >
              Faqs
            </Link>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <h4>Latest Blog</h4>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={footerImg1} width="65px" className="img-fluid" alt="" />
            </div>
            <div>
              <h6 style={{ marginBottom: "5px" }}>
                Best fashion smart watch collection
              </h6>
              <small>by themkepper demo admin</small>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={footerImg2} width="65px" className="img-fluid" alt="" />
            </div>
            <div>
              <h6 style={{ marginBottom: "5px" }}>
                Nice Lather Watch Collection
              </h6>
              <small>by themkepper demo admin</small>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
