import React, { useContext, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";
import { useSelector, useDispatch } from "react-redux";
import { nextgame, prevgame } from "../../utils/actions/GamesActions";

const GamesCarousel = () => {
  const currentgame = useSelector((state) => state.currentgame);
  const dispatch = useDispatch();

  const games = [
    {
      key: 1,
      content: <img src={Fn} />,
      name: "FN",
    },
    {
      key: 2,
      content: <img src={Val} />,
      name: "VAL",
    },
    {
      key: 3,
      content: <img src={Wz} />,
      name: "WZ",
    },
    {
      key: 4,
      content: <img src={Fn} />,
      name: "FN",
    },
    {
      key: 5,
      content: <img src={Val} />,
      name: "VAL",
    },
    {
      key: 6,
      content: <img src={Wz} />,
      name: "WZ",
    },
  ];

  return (
    <main tw="flex w-full">
      <button
        className="shadow"
        tw="bg-purple-900 focus:outline-none border-t-2 border-b-2 border-solid border-black"
        style={{ width: "5%", height: "200px" }}
        onClick={() => {
          dispatch(prevgame(games[currentgame[0] - 1].name));
        }}
      >
        Select
      </button>

      <div
        className="shadow"
        tw="border-t-2 border-b-2 border-solid border-black h-full"
        style={{ width: "90%", height: "200px" }}
      >
        <Carousel
          slides={games}
          goToSlide={currentgame[0]}
          offsetRadius={3}
          animationConfig={config.slow}
        />
      </div>
      <button
        className="shadow"
        tw="bg-purple-900 focus:outline-none border-t-2 border-b-2 border-solid border-black"
        style={{ width: "5%", height: "200px" }}
        onClick={() => {
          dispatch(nextgame(games[currentgame[0] + 1].name));
        }}
      >
        select
      </button>
    </main>
  );
};

export default GamesCarousel;
