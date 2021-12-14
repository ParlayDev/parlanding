import React, { useEffect } from "react";
import axios from "axios";

export const axiosWithAuth = () => {
  const AUTH_TOKEN = localStorage.getItem("pauthorization");
  return axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
      "Content-Type": "application/json",
      pauthorization: AUTH_TOKEN,
    },
  });
};
