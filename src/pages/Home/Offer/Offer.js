import { Box } from "@mui/system";
import React from "react";
import offerImg from "../../../images/offer/offer.jpg";
import "./Offer.css";

const offer = {
  background: `url(${offerImg})`,
  height: "70vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Offer = () => {
  return (
    <Box
      style={offer}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <div style={{ textAlign: "center", color: "white", px: 2 }}>
        <h2 style={{ fontSize: "30px" }}>
          Clearance Sales Up to 70% Off <br />
          All Sales are Final!
        </h2>

        <button type="" className="offer-btn mt-4">
          Shiping and Returns
        </button>
      </div>
    </Box>
  );
};

export default Offer;
