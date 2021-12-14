import React, { useState, useEffect } from "react";
import Bets from "./Bets";
import BetData from "./BetData";
import VerifyUsername from "./VerifyUsername";

export default function ValorantVerify(props) {
  const VerifySelector = (verified, bets) => {
    if (verified === true) {
      console.log("hello");
      return <Bets betData={BetData()} />;
    } else {
      return <VerifyUsername />;
    }
  };
  return VerifySelector(props.verify, props.betsarray);
}
