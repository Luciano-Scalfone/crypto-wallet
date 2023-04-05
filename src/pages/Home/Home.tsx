import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { ModalsContext } from "../../contexts/ModalsContext";
import { HomeWrapper } from "./HomeStyles";

const Home: React.FC = () => {
  const { showSignIn, showSignUp } = useContext(ModalsContext);

  return (
    <HomeWrapper>
      <Header />
      <Main />
      <Footer />
      { showSignIn && <SignIn /> }
      { showSignUp && <SignUp /> }
    </HomeWrapper>
  );
};

export default Home;
