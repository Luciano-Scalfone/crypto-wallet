import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import MainBottom from "../MainBottom/MainBottom";
import MainMiddle from "../MainMiddle/MainMiddle";
import MainTop from "../MainTop/MainTop";
import TopCryptos from "../TopCryptos/TopCryptos";
import TrayMenu from "../TrayMenu/TrayMenu";
import MainWrapper from "./MainStyles";

const Main: React.FC = () => {
  const { showTrayMenu } = useContext(ModalsContext);

  return (
    <MainWrapper>
      <MainTop />
      <MainMiddle />
      <TopCryptos />
      <MainBottom />
      { showTrayMenu && <TrayMenu /> }
    </MainWrapper>
  );
};

export default Main;
