import MainBottom from "../MainBottom/MainBottom";
import MainMiddle from "../MainMiddle/MainMiddle";
import MainTop from "../MainTop/MainTop";
import MainWrapper from "./MainStyles";

const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <MainTop />
      <MainMiddle />
      <MainBottom />
    </MainWrapper>
  );
};

export default Main;
