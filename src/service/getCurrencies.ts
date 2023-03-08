import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getAllCurrencies = async () => {
  const currencies = await axios
    .get(baseUrl + "/cryptos")
    .then((response) => response.data);

  console.log(currencies);
  return currencies;
};
