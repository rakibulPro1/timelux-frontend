import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../images/banner/slide-3-2.jpg";

const banner = {
  background: `url(${bg})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "0px 20px",
};

const Banner = () => {
  return (
    <Box
      style={banner}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <h2 style={{ fontSize: "50px", letterSpacing: "3px", color: "white" }}>
          The Watch Everyone Desires
        </h2>
        <p
          style={{
            fontSize: "17px",
            opacity: "0.8",
            color: "white",
            marginTop: "20px",
          }}
        >
          The best in class elegent watches from the luxery brand <br /> Swiss
          Eagle high quality watches into which a lot of care has gone in
        </p>
        <Link to="/explore">
          <button
            style={{
              backgroundColor: "rgba(255, 81, 0, 0.973)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </Box>
  );
};

export default Banner;
