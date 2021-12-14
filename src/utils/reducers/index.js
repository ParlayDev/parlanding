import gamesReducer from "./GamesReducer";
import teamsReducer from "./TeamsReducer";
import { killsReducer } from "./KillsReducer";
import betsReducer from "./BetsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentgame: gamesReducer,
  currentteam: teamsReducer,
  kills: killsReducer,
  bets: betsReducer,
});

export default rootReducer;
