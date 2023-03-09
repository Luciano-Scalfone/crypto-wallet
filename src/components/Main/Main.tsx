import Button from "../Button/Button";
import Waves from "../icons/Waves/Waves";
import MainWrapper from "./MainStyles";

const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <h5 className="main-wrapper__title">
        Lorem ipsum dolor sit amet, consectetur
      </h5>
      <p className="main-wrapper__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <Button
        type="primary"
        content="SIGN UP NOW"
        callback={() => console.log("test")}
      />
      <div className="main-wrapper__buttons-set">
        <Button
          type="secondary"
          content="Cryptos"
          callback={() => console.log("Cryptos")}
        />
        <Button
          type="secondary"
          content="NFTs"
          callback={() => console.log("NFTs")}
        />
        <Button
          type="secondary"
          content="Games"
          callback={() => console.log("Games")}
        />
      </div>
      <div className="main-wrapper__wave-component">
        <Waves />
      </div>
    </MainWrapper>
  );
};

export default Main;
