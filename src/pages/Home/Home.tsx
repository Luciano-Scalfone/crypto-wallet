import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Main />
    </HomeWrapper>
  );
};

export default Home;
