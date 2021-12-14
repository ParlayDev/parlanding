import React, { useState, useEffect } from "react";
import Bets from "./Bets";
import BetData from "./BetData";
import VerifyUsername from "./VerifyUsername";

export default function WarzoneVerify(props) {
  const VerifySelector = (verified) => {
    if (verified === true) {
      return <Bets betData={BetData()} />;
    } else {
      return <VerifyUsername />;
    }
  };
  return VerifySelector(props.verify);
}
