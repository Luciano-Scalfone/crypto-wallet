import { useEffect, useState } from "react";
import { useFetch } from "../../service/fetchData";
import Button from "../Button/Button";
import TableArow from "../icons/TableArow/RightArow";
import { FakeTableBodyCellWrapper, TopCryptosWrapper } from "./TopCryptosStyle";

const FAKE_TABLE_HEADER = ["crypto", "actions"];

const TopCryptos = (): JSX.Element => {
  const [data] = useFetch("/cryptos");
  const [mappedData, setMappedData] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(true);

  const handleFakeTableArowClick = (event: any) => {
    const targetClasses = event?.currentTarget?.classList;
    const svgClass = "top-cryptos-wrapper__body-svg-element";

    classHandlerHelper(targetClasses, svgClass);
  };

  const handleViewMoreButtonClick = () => {
    const viewMoreWrapper: any = document.querySelector(
      ".top-cryptos-wrapper__view-more-wrapper"
    )?.classList;
    const className = "top-cryptos-wrapper__view-more-wrapper__view-toggle";

    classHandlerHelper(viewMoreWrapper, className);

    setShowMore(!showMore);
  };

  const classHandlerHelper = (domToken: DOMTokenList, className: string) => {
    Array.from(domToken).includes(className)
      ? domToken?.remove(className)
      : domToken?.add(className);
  };

  useEffect(() => {
    const fakeTableConfig = data.map(
      ({ id, name, code, exchange, var_bid }: any) => {
        return {
          id,
          name,
          crypto: `${name} ${code}`,
          price: exchange.USD,
          change: var_bid,
        };
      }
    );

    setMappedData(fakeTableConfig);
  }, [data]);

  return (
    <TopCryptosWrapper>
      <h5 className="top-cryptos-wrapper__title">Top Cryptos</h5>
      <div className="top-cryptos-wrapper__view-more-wrapper  top-cryptos-wrapper__view-more-wrapper__view-toggle">
        <div className="top-cryptos-wrapper__table-wrapper">
          {data &&
            FAKE_TABLE_HEADER.map((element, index) => {
              return (
                <div
                  className="top-cryptos-wrapper__column"
                  key={`${element}-${index}`}
                >
                  <span className="top-cryptos-wrapper__header-element">
                    {element}
                  </span>
                  {mappedData?.map((crypto) => {
                    if (element === "actions") {
                      return (
                        <FakeTableBodyCellWrapper>
                          <div onClick={handleFakeTableArowClick}>
                            <TableArow width="16px" height="9px" />
                          </div>
                        </FakeTableBodyCellWrapper>
                      );
                    }

                    return (
                      <FakeTableBodyCellWrapper>
                        <img
                          src={require(`../../assets/${crypto.name}.png`)}
                          width="24px"
                        />
                        {crypto[element]}
                      </FakeTableBodyCellWrapper>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      <Button
        type="text-only"
        content={showMore ? "View more +" : "View less"}
        callback={handleViewMoreButtonClick}
      />
    </TopCryptosWrapper>
  );
};

export default TopCryptos;
