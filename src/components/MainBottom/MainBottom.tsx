import Button from "../Button/Button";
import MainBottomWrapper from "./MainBottomStyles";

const MainBottom = (): JSX.Element => {
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
        <input className="main-bottom-wrapper__input" />
      </label>
      <Button type="primary" content="Subscribe" callback={() => console.log('subscribe')} size={{width: '100%', height: '40px'}}/>
    </MainBottomWrapper>
  );
};

export default MainBottom;
