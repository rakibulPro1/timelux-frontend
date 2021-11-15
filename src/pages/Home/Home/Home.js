import React from "react";
import Banner from "../Banner/Banner";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";

import Menubar from "../Menubar/Menubar";
import Offer from "../Offer/Offer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Banner></Banner>
      <Products></Products>
      <ClientReviews></ClientReviews>
      <Offer></Offer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
