import MainMiddle from "../MainMiddle/MainMiddle";
import MainTop from "../MainTop/MainTop";
import MainWrapper from "./MainStyles";

const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <MainTop />
      <MainMiddle />
    </MainWrapper>
  );
};

export default Main;
