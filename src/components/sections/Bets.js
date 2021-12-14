import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { kills } from "../../utils/actions/KillsActions";

const Bets = (props) => {
  const dispatch = useDispatch();
  const killz = useSelector((state) => state.kills);
  const BetsBuilder = (bets) => {
    const arr = [];
    bets.forEach((bet, index) => {
      arr.push({
        key: index,
        content: (
          <section tw="flex justify-between bg-gray-800 border-2 border-gray-900 h-full">
            <img tw="w-1/4" src={bet.image} alt="Valorant logo" />
            <section tw="flex flex-col justify-between w-1/2 p-2 border-r-2 border-gray-900 overflow-hidden items-center">
              <h3 tw="flex">{bet.bet}</h3>
              <div tw="flex h-3/4">{bet.betdescription}</div>

              <div tw="w-full">
                <input
                  tw="w-full"
                  type="range"
                  id="volume"
                  name="volume"
                  min="3"
                  max="12"
                  onChange={(e) => {
                    dispatch(kills(e.target.value));
                  }}
                />
              </div>
            </section>
            <section tw="flex py-2">
              <div tw="flex flex-col m-2">
                <div>Kills</div>
                <div>{killz}</div>
              </div>
              <div tw="flex m-2">max</div>
            </section>
            <section tw="flex py-2 bg-gray-700">
              <span
                className="text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="w-10 h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </section>
          </section>
        ),
      });
    });
    return arr;
  };

  return (
    <VerticalCarousel
      slides={BetsBuilder(props.betData)}
      offsetRadius={8}
      showNavigation={false}
      animationConfig={config.slow}
    />
  );
};

export default Bets;
