import { useState } from "react";
import Button from "../Button/Button";
import MainBottomWrapper from "./MainBottomStyles";
import { DebounceInput } from "react-debounce-input";
import { addNewSubscription } from "../../service/fetchData";

const MainBottom: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = ({ target }: any) => {
    setEmail(target.value);
  };

  const handleSubscribeCLick = () => {
    if (email.length) {
      setIsDisabled(true);
      setTimeout(async () => {
        await addNewSubscription(email);
  
        setEmail("");
        setIsDisabled(false);
      }, 1500);
    }
  };

  return (
    <MainBottomWrapper>
      <span className="main-bottom-wrapper__span">Lorem ipsum</span>
      <h4 className="main-bottom-wrapper__title">Lorem ipsum</h4>
      <p className="main-bottom-wrapper__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <label className="main-bottom-wrapper__input-label">
        Email
        <DebounceInput
          disabled={isDisabled}
          type="email"
          debounceTimeout={1500}
          className="main-bottom-wrapper__input"
          onChange={handleChange}
          value={email}
        />
      </label>
      <Button
        disabled={isDisabled}
        type="primary"
        content="Subscribe"
        callback={handleSubscribeCLick}
        size={{ width: "100%", height: "40px" }}
      />
    </MainBottomWrapper>
  );
};

export default MainBottom;
