import { useEffect, useState } from "react";
import { useFetch } from "../../service/fetchData";
import TableArow from "../icons/TableArow/RightArow";
import { FakeTableBodyCellWrapper, TopCryptosWrapper } from "./TopCryptosStyle";

const FAKE_TABLE_HEADER = ["crypto", "actions"];

const TopCryptos = (): JSX.Element => {
  const [data] = useFetch("/cryptos");
  const [mappedData, setMappedData] = useState<any[]>([]);

  const handleFakeTableArowClick = (event: any) => {
    const targetClasses = event?.currentTarget?.classList;
    const svgClass = "top-cryptos-wrapper__body-svg-element";

    [...targetClasses].includes(svgClass)
      ? targetClasses.remove(svgClass)
      : targetClasses.add(svgClass);
  };

  useEffect(() => {
    const fakeTableConfig = data.map(
      ({ id, name, code, exchange, var_bid }: any) => {
        return {
          id,
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
                      {crypto[element]}
                    </FakeTableBodyCellWrapper>
                  );
                })}
              </div>
            );
          })}
      </div>
    </TopCryptosWrapper>
  );
};

export default TopCryptos;