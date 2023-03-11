import { useFetch } from "../../service/fetchData";
import HeaderCoinCarrousel from "../HeaderCoinCarrousel/HeaderCoinCarrousel";
import CoinSynch from "../icons/CoinSynch/CoinSynch";
import HamburgerMenu from "../icons/HamburgerMenu/HamburgerMenu";
import { HeaderWrapper } from "./HeaderStyles";

const Header = (): JSX.Element => {
  const [data] = useFetch('/latest');

  return (
    <HeaderWrapper>
      <section className="header-wrapper__logo-and-menu-section">
        <CoinSynch width={94.48} height={16} />
        <HeaderCoinCarrousel cryptos={data} />
        <HamburgerMenu width={18} height={18} />
      </section>
    </HeaderWrapper>
  );
};

export default Header;
