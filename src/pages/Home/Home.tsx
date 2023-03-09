import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Main />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
