import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SignIn from "../../components/SignIn/SignIn";
import { ModalsContext } from "../../contexts/ModalsContext";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  const { showSignIn } = useContext(ModalsContext);

  return (
    <HomeWrapper>
      <Header />
      <Main />
      <Footer />
      { showSignIn && <SignIn /> }
    </HomeWrapper>
  );
};

export default Home;
