import React from "react";
import Banner from "../Banner/Banner";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <ClientReviews></ClientReviews>
      <Offer></Offer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
