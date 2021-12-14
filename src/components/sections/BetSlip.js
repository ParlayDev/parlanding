import React from "react";
import { useSelector } from "react-redux";
import { GetBetData } from "../../utils/hooks/getBetData";
import { axiosWithAuth } from "../AxiosWithAuth";

function BetSlip(props) {
  const game = useSelector((state) => state.currentgame);
  const team = useSelector((state) => state.currentteam);
  const kills = useSelector((state) => state.kills);
  const bet = useSelector((state) => state.bets);
  const [solo, duo, trio, squad] = GetBetData();

  const indexpicker = (selection) => {
    if (selection === "solo") {
      return solo;
    } else if (selection === "duo") {
      return duo;
    } else if (selection === "trio") {
      return trio;
    } else if (selection === "squad") {
      return squad;
    } else if (selection === "KILLFEST") {
      return 0;
    } else if (selection === "KILLFEST+TOP") {
      return 10;
    } else if (selection === "KILLFEST+WIN") {
      return 20;
    }
  };

  const handleBetClick = () => {
    // betid=outcomeid and wagered ammount
    axiosWithAuth()
      .post("games/boy/makeBet", { outcomeID: 961, amount: 200 })
      .then((response) => {
        console.log("bet resssss", response);
      })
      .catch((err) => {
        console.log("error placing bet", err);
      });
  };

  return (
    <main tw="flex flex-col bg-gray-900 rounded-sm w-full">
      <div>WAGER SLIP</div>
      <div>
        {solo === undefined
          ? "loading"
          : console.log(
              indexpicker(team[1])[indexpicker(bet[1]) + (kills - 3)]
            )}
      </div>

      <div tw="flex justify-center border-t-2 border-b-2 border-white py-2">
        <button tw="flex justify-center w-1/2">{team[1]}</button>
        <button tw="flex justify-center w-1/2">{game[1]}</button>
      </div>
      <section tw="border-2 border-white m-2 rounded-md flex">
        <div tw="flex flex-col w-1/2">
          <div></div>
        </div>
      </section>
      <section tw="flex flex-col">
        <div tw="flex">
          <div tw="flex w-1/2 bg-red-200 justify-center">Wagered</div>
          <div tw="flex w-1/2 justify-center">{100}</div>
        </div>
        <div tw="flex">
          <div tw="flex w-1/2 bg-red-200 justify-center">Earnings</div>
          <div tw="flex w-1/2 justify-center">
            {solo === undefined
              ? "loading"
              : 100 *
                indexpicker(team[1])[indexpicker(bet[1]) + (kills - 3)].price
                  .decimalOdd}
          </div>
        </div>
      </section>

      <div tw="flex justify-center">
        <button tw="bg-purple-900 p-2 rounded-md my-2" onClick={handleBetClick}>
          Login To Place Bet
        </button>
      </div>
    </main>
  );
}

export default BetSlip;
