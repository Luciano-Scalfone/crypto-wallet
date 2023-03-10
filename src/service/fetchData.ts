import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:8080";

export const useFetch = (endPoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLatestCryptos = async () => {
      const cryptos = await axios
      .get(`${baseUrl}${endPoint}`)
      .then((response) => response.data);

      setData(cryptos);
    };

    fetchLatestCryptos();
  }, [endPoint]);

  return [data];
};

export const addNewSubscription = async (email: string): Promise<any> => {
  const currencies = await axios
    .post(baseUrl + "/subscription-list", { email })
    .then((response) => response.status);

  return currencies;
};
