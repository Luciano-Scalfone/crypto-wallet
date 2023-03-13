import { useContext, useState } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import Button from "../Button/Button";
import CrossIcon from "../icons/CrossIcon/CrossIcon";
import Envelope from "../icons/Envelope/Envelope";
import Eye from "../icons/Eye/Eye";
import EyeSlash from "../icons/EyeSlash/EyeSlash";
import Lock from "../icons/Lock/Lock";
import LogoName from "../icons/LogoName/LogoName";
import Input from "../Input/Input";
import { SignInWrapper } from "./SignInStyles";
import EmailInput from "../Input/Input";

const SignIn = (): JSX.Element => {
  const { setShowSignIn } = useContext(ModalsContext);
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

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
        <Input
          type="email"
          placeholder="Email"
          callback={() => console.log(true)}
          icons={{ left: <Envelope width="16px" /> }}
        />
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Password"
          callback={() => console.log(true)}
          icons={{
            left: <Lock width="16px" />,
            right: (
              <div onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? <EyeSlash width="16px" /> : <Eye width="16px" />}
              </div>
            ),
          }}
        />
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
