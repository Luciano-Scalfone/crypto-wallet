import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import Button from "../Button/Button";
import { TrayMenuWrapper } from "./TrayMenuStyle";

const TrayMenu = (): JSX.Element => {
  const { setShowSignIn, setShowSignUp, setShowTrayMenu } =
    useContext(ModalsContext);

  const handleSignupButtonClick = () => {
    setShowTrayMenu(false);
    setShowSignUp(true);
  };

  const handleSigninClick = () => {
    setShowTrayMenu(false);
    setShowSignIn(true);
  };

  return (
    <TrayMenuWrapper>
      <section className="tray-menu-wrapper__tray-menu">
        <span className="tray-menu-wrapper__links">About us</span>
        <span className="tray-menu-wrapper__links">Top Cryptos</span>
        <span className="tray-menu-wrapper__links" onClick={handleSigninClick}>Sign in</span>
        <Button type="primary" content="Sign up" callback={handleSignupButtonClick} size={{width: '100%'}}/>
      </section>
    </TrayMenuWrapper>
  );
};

export default TrayMenu;
