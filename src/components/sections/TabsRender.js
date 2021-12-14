import React, { useState, useEffect } from "react";
import BetSlip from "./BetSlip";
import BetStats from "./BetStats";
import GamesCarousel from "./GamesCarousel";
import BetTabs from "./BetTabs";
import TeamCarousel from "./TeamCarousel";
import { axiosWithAuth } from "../AxiosWithAuth";
import { useSelector } from "react-redux";
import ValorantVerify from "./ValorantVerify";
import WarzoneVerify from "./WarzoneVerify";
import FortniteVerify from "./FortniteVerify";
import { GetBetData } from "../../utils/hooks/getBetData";

const TabsRender = () => {
  const currentgame = useSelector((state) => state.currentgame);
  const [verifyData, setVerifyData] = useState([]);
  const [data] = GetBetData();

  useEffect(() => {
    const id = localStorage.getItem("id");
    axiosWithAuth()
      .get(`/user/${id}`)
      .then((response) => {
        setVerifyData([
          Boolean(response.data.FN_BOY_VERIFIED),
          Boolean(response.data.WZ_BOY_VERIFIED),
          Boolean(response.data.VAL_BOY_VERIFIED),
        ]);
      })
      .catch((err) => {
        console.log("error getting appliance list", err);
      });
  }, []);

  const gameCompSelector = (currentgamename) => {
    if (currentgamename === "FN") {
      return <FortniteVerify verify={verifyData[0]} betsarray={data} />;
    }
    if (currentgamename === "WZ") {
      return <WarzoneVerify verify={verifyData[1]} />;
    }
    if (currentgamename === "VAL") {
      return <ValorantVerify verify={verifyData[2]} />;
    }
  };

  return (
    <main tw="flex flex-col w-full mb-5">
      <section className="shadow" tw="w-full bg-gray-900">
        <BetTabs />

        <div
          className="shadow"
          tw="m-5 flex flex-col justify-center rounded-sm"
        >
          <TeamCarousel />
          <GamesCarousel />
          <TeamCarousel />
        </div>
        <div tw="m-5 flex justify-center h-96">
          {gameCompSelector(currentgame[1])}
        </div>
        <section tw="flex w-full p-5 pt-0">
          <div className="shadow" tw="flex bg-gray-900 rounded-sm w-3/4 mr-5">
            <BetStats />
          </div>

          <div
            className="shadow"
            tw="flex justify-center w-1/4 h-full rounded-sm overflow-hidden"
          >
            <BetSlip />
          </div>
        </section>
      </section>
    </main>
  );
};
export default TabsRender;
