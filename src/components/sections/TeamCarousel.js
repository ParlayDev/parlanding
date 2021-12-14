import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Val from "../../assets/images/valorant-logo.png";
import Wz from "../../assets/images/COD2.jpg";
import Fn from "../../assets/images/fn3.jpg";
import { useSelector, useDispatch } from "react-redux";
import { nextteam, prevteam } from "../../utils/actions/TeamsActions";

const TeamCarousel = () => {
  const currentteam = useSelector((state) => state.currentteam);
  const dispatch = useDispatch();

  const games = [
    {
      key: 1,
      content: "Solo",
    },
    {
      key: 2,
      content: "Duo",
    },
    {
      key: 3,
      content: "Trio",
    },
    {
      key: 4,
      content: "Squad",
    },
  ];

  return (
    <main tw="flex w-full">
      <button
        className="shadow"
        tw="bg-purple-900 focus:outline-none border-t-2 border-b-2 border-solid border-black"
        style={{ width: "5%", height: "50px" }}
        onClick={() => {
          dispatch(prevteam());
        }}
      >
        Select
      </button>

      <div style={{ width: "90%", height: "50px" }}>
        <Carousel
          slides={games}
          goToSlide={currentteam[0]}
          offsetRadius={3}
          animationConfig={config.slow}
        />
      </div>
      <button
        className="shadow"
        tw="bg-purple-900 focus:outline-none border-t-2 border-b-2 border-solid border-black"
        style={{ width: "5%", height: "50px" }}
        onClick={() => {
          dispatch(nextteam());
        }}
      >
        select
      </button>
    </main>
  );
};

export default TeamCarousel;
