import { useContext, useEffect, useState } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
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
  SignUpBottomWrapper,
  SignupButtonWrapper,
  SignupConfirmPasswordWrapper,
  SignUpHeaderWrapper,
} from "./SignUpStyles";

const SignUp = (): JSX.Element => {
  const { setShowSignUp, setShowSignIn } = useContext(ModalsContext);
  const [seePassword, setSeePassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignInClick = (): void => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const isButtonDisabled = (): void => {
    const { name, email, password, confirmPassword } = user;

    const isDisabledButton = !!(
      name.length &&
      email.length &&
      password.length &&
      confirmPassword.length &&
      confirmPassword === password
    );

    setIsDisabled(!isDisabledButton);
  };

  useEffect(() => {
    isButtonDisabled();
  }, [user]);

  return (
    <>
      <SignUpHeaderWrapper>
        <div
          className="sign-up-wrapper__icon-wrapper"
          onClick={() => setShowSignUp(false)}
        >
          <CrossIcon width="15px" />
        </div>
        <div className="sign-up-wrapper__title-wrapper">
          <h4 className="sign-up-wrapper__modal-title">Sign up to</h4>
          <LogoName width="auto" height="16px" />
        </div>
      </SignUpHeaderWrapper>

      <Input
        type="text"
        placeholder="Name"
        callback={(value: string) => setUser({ ...user, name: value })}
        icons={{ left: <Envelope width="16px" /> }}
      />
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
      <SignupConfirmPasswordWrapper
        isSamePassword={user.confirmPassword === user.password}
      >
        <Input
          type={seePassword ? "text" : "password"}
          placeholder="Confirm password"
          callback={(value: string) =>
            setUser({ ...user, confirmPassword: value })
          }
          icons={{
            left: <Lock width="16px" />,
            right: (
              <div onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? <EyeSlash width="16px" /> : <Eye width="16px" />}
              </div>
            ),
          }}
        />
      </SignupConfirmPasswordWrapper>

      <SignupButtonWrapper>
        <Button
          type="primary"
          content="Sign Up"
          callback={() => console.log("signed in")}
          size={{ width: "100%", height: "48px" }}
          disabled={isDisabled}
        />
      </SignupButtonWrapper>

      <SignUpBottomWrapper onClick={handleSignInClick}>
        <span className="sign-up-bottom-wrapper__modal-sign-in-link">
          Sign in to
        </span>
        <LogoName width="auto" height="16px" />
      </SignUpBottomWrapper>
    </>
  );
};

export default WithModal(SignUp);
