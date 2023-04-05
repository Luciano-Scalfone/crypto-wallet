import axios from "axios";
import { useEffect, useState } from "react";
import { CryptoType, UserTypes } from "../interfaces/ComponentPropsTypes";
import bcrypt from "bcryptjs";

const baseUrl = "http://localhost:8080";

export const useFetch = (endPoint: string): CryptoType[] => {
  const [data, setData] = useState<CryptoType[]>([]);

  useEffect(() => {
    const fetchLatestCryptos = async () => {
      const cryptos = await axios
        .get(`${baseUrl}${endPoint}`)
        .then((response) => response.data);

      setData(cryptos);
    };

    fetchLatestCryptos();
  }, [endPoint]);

  return data;
};

export const addNewSubscription = async (email: string): Promise<number> => {
  const subscription = await axios
    .post(baseUrl + "/subscription-list", { email })
    .then((response) => response.status);

  return subscription;
};

export const addNewUser = async (user: object): Promise<number> => {
  const response = await axios
    .post(baseUrl + "/users", user)
    .then((response) => response.status);

  return response;
};

export const loginUser = async (credentials: UserTypes): Promise<boolean> => {
  const user = await axios
    .get(baseUrl + "/users", { params: { email: credentials?.email } })
    .then((response) => response.data);

  if (!user || !user.legth) return false;

  const isCorrectPasssword = bcrypt.compareSync(
    credentials?.password,
    user[0]?.password
  );

  return isCorrectPasssword;
};
