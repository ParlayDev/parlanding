import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const BetData = (bets) => {
  const currentgame = useSelector((state) => state.currentgame);
  const team = useSelector((state) => state.currentteam);

  const BetSelector = (bets, team) => {
    let top = "";
    if (team[1] === "solo") {
      top = "10";
    } else if (team[1] === "duo" || team[1] === "trio") {
      top = "5";
    } else if (team[1] === "squad") {
      top = "3";
    }
    return [
      {
        bet: "KILLFEST",
        betdescription:
          "Pick your challenge! Can you get over X ammount of kills?",
        image:
          "https://www.logolynx.com/images/logolynx/ba/ba4665954a08a496286f49d28b82eaf2.jpeg",
      },
      {
        bet: `KILLFEST + TOP ${top}`,
        betdescription:
          "Can you get X ammount of kills AND place within the top 10?",
        image:
          "https://image.freepik.com/free-vector/headshot-skull-logo-template_130779-56.jpg",
      },
      {
        bet: "KILLFEST + WINNER",
        betdescription:
          "Can you get over X ammount of kills and score the victory?",
        image:
          "https://images-platform.99static.com/flBrkJFYSVZVTvBTcIOgRlIeeRQ=/265x140:1385x1260/500x500/top/smart/99designs-contests-attachments/99/99597/attachment_99597950",
      },
    ];
  };

  return BetSelector(bets, team);
};
export default BetData;
