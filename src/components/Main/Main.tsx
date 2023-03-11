import MainBottom from "../MainBottom/MainBottom";
import MainMiddle from "../MainMiddle/MainMiddle";
import MainTop from "../MainTop/MainTop";
import TopCryptos from "../TopCryptos/TopCryptos";
import MainWrapper from "./MainStyles";

const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <MainTop />
      <MainMiddle />
      <TopCryptos />
      <MainBottom />
    </MainWrapper>
  );
};

export default Main;
