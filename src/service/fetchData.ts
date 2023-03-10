import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getLatestCryptos = async (): Promise<any> => {
  const currencies = await axios
    .get(baseUrl + "/latest")
    .then((response) => response.data);

  return currencies;
};

export const addNewSubscription = async (email: string): Promise<any> => {
  const currencies = await axios
    .post(baseUrl + "/subscription-list", { email })
    .then((response) => response.status);

  return currencies;
};
