import { useContext, useState } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import Button from "../Button/Button";
import CrossIcon from "../icons/CrossIcon/CrossIcon";
import Envelope from "../icons/Envelope/Envelope";
import Eye from "../icons/Eye/Eye";
import EyeSlash from "../icons/EyeSlash/EyeSlash";
import Lock from "../icons/Lock/Lock";
import LogoName from "../icons/LogoName/LogoName";
import { SignInWrapper } from "./SignInStyles";

const SignIn = (): JSX.Element => {
  const { setShowSignIn } = useContext(ModalsContext);
  const [seePassword, setSeePassword] = useState(false);

  return (
    <SignInWrapper>
      <section className="sign-in-wrapper__modal">
        <div className="sign-in-wrapper__icon-and-title-wrapper">
          <div
            className="sign-in-wrapper__icon-wrapper"
            onClick={() => setShowSignIn(false)}
          >
            <CrossIcon width="15px" />
          </div>
          <div className="sign-in-wrapper__title-wrapper">
            <h4 className="sign-in-wrapper__modal-title">Sign in to</h4>
            <LogoName width="auto" height="16px" />
          </div>
        </div>
        <section className="sign-in-wrapper__modal-email-input">
          <Envelope width="16px" />
          <input
            type="email"
            placeholder="Email"
            className="sign-in-wrapper__modal-input-area"
          />
        </section>
        <section className="sign-in-wrapper__modal-password-input">
          <Lock width="16px" />
          <input
            type={seePassword ? "text" : "password"}
            placeholder="Password"
            className="sign-in-wrapper__modal-input-area"
          />
          <div onClick={() => setSeePassword(!seePassword)}>
            {seePassword ? <EyeSlash width="16px" /> : <Eye width="16px" />}
          </div>
        </section>
        <span className="sign-in-wrapper__modal-forgot-password">
          Forgot password?
        </span>
        <Button
          type="primary"
          content="Sign in"
          callback={() => console.log("signed in")}
          size={{ width: "100%", height: "48px" }}
        />
        <div className="sign-in-wrapper__sign-up-wrapper">
          <span className="sign-in-wrapper__modal-sign-up-link">
            Sign up to
          </span>
          <LogoName width="auto" height="16px" />
        </div>
      </section>
    </SignInWrapper>
  );
};

export default SignIn;
