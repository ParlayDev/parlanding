import React, { useEffect, useState, useRef } from "react";
import { axiosWithAuth } from "../../components/AxiosWithAuth";

export const GetBetData = () => {
  const [betsArray, setbetsArray] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/games/boy/FN_bets")
      .then((response) => {
        const res = response.data;
        setbetsArray(res);
      })
      .catch((err) => {
        console.log("error getting appliance list", err);
      });
  }, []);

  return betsArray;
};
