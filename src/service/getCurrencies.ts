import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getLatestCryptos = async () => {
  const currencies = await axios
    .get(baseUrl + "/latest")
    .then((response) => response.data);

  return currencies;
};
