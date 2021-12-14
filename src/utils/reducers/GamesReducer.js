const gamesReducer = (state = [0, "FN"], action) => {
  switch (action.type) {
    case "NEXTGAME":
      if (state[1] === "FN") {
        return (state = [state[0] + 1, (state[1] = "VAL")]);
      }
      if (state[1] === "VAL") {
        return (state = [state[0] + 1, (state[1] = "WZ")]);
      }
      if (state[1] === "WZ") {
        return (state = [state[0] + 1, (state[1] = "FN")]);
      } else {
        return [(state[0] = 0), (state[1] = "FN")];
      }
    case "PREVGAME":
      if (state[1] === "FN") {
        return (state = [state[0] - 1, (state[1] = "WZ")]);
      }
      if (state[1] === "VAL") {
        return (state = [state[0] - 1, (state[1] = "FN")]);
      }
      if (state[1] === "WZ") {
        return (state = [state[0] - 1, (state[1] = "VAL")]);
      } else {
        return [(state[0] = 0), (state[1] = "FN")];
      }
    default:
      return state;
  }
};

export default gamesReducer;
