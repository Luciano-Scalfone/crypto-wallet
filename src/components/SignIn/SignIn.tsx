import React, { useContext, useState } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import { loginUser } from "../../service/fetchData";
import Button from "../Button/Button";
import CrossIcon from "../icons/CrossIcon/CrossIcon";
import Envelope from "../icons/Envelope/Envelope";
import Eye from "../icons/Eye/Eye";
import EyeSlash from "../icons/EyeSlash/EyeSlash";
import Lock from "../icons/Lock/Lock";
import LogoName from "../icons/LogoName/LogoName";
import Input from "../Input/Input";
import WithModal from "../Modal/Modal";
import {
  SignInBottomWrapper,
  SignInButtonWrapper,
  SignInForgotPasswordWrapper,
  SignInHeaderWrapper,
} from "./SignInStyles";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const { setShowSignIn, setShowSignUp } = useContext(ModalsContext);
  const { setIsLogged } = useContext(UserContext);
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    return alert("A new link to change your password was sent to your email!");
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSigninClick = async () => {
    const loggedUser = await loginUser(user);

    if (loggedUser) {
      setIsLogged(true);
      setShowSignIn(false);
      navigate('/dashboard');
      return;
    }

    setShowSignIn(false);
  };

  return (
    <>
      <SignInHeaderWrapper>
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
      </SignInHeaderWrapper>
      <Input
        type="email"
        placeholder="Email"
        callback={(value: string) => setUser({ ...user, email: value })}
        icons={{ left: <Envelope width="16px" /> }}
      />
      <Input
        type={seePassword ? "text" : "password"}
        placeholder="Password"
        callback={(value: string) => setUser({ ...user, password: value })}
        icons={{
          left: <Lock width="16px" />,
          right: (
            <div onClick={() => setSeePassword(!seePassword)}>
              {seePassword ? <EyeSlash width="16px" /> : <Eye width="16px" />}
            </div>
          ),
        }}
      />
      <SignInForgotPasswordWrapper onClick={handleForgotPassword}>
        Forgot password?
      </SignInForgotPasswordWrapper>
      <SignInButtonWrapper>
        <Button
          type="primary"
          content="Sign in"
          callback={handleSigninClick}
          size={{ width: "100%", height: "48px" }}
          disabled={!!(!user.email.length || !user.password.length)}
        />
      </SignInButtonWrapper>
      <SignInBottomWrapper onClick={handleSignUpClick}>
        <span className="sign-in-bottom-wrapper__modal-sign-up-link">
          Sign up to
        </span>
        <LogoName width="auto" height="16px" />
      </SignInBottomWrapper>
    </>
  );
};

export default WithModal(SignIn);
