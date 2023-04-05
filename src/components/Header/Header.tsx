import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext";
import { useFetch } from "../../service/fetchData";
import HeaderCoinCarrousel from "../HeaderCoinCarrousel/HeaderCoinCarrousel";
import CoinSynch from "../icons/CoinSynch/CoinSynch";
import HamburgerMenu from "../icons/HamburgerMenu/HamburgerMenu";
import { HeaderWrapper } from "./HeaderStyles";

const Header: React.FC = () => {
  const data = useFetch("/latest");
  const { showTrayMenu, setShowTrayMenu } = useContext(ModalsContext);

  return (
    <HeaderWrapper>
      <section className="header-wrapper__logo-and-menu-section">
        <CoinSynch width={94.48} height={16} />
        <HeaderCoinCarrousel cryptos={data} />
        <div onClick={() => setShowTrayMenu(!showTrayMenu)}>
          <HamburgerMenu width={18} height={18} />
        </div>
      </section>
    </HeaderWrapper>
  );
};

export default Header;
