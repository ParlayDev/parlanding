const betsReducer = (state = [0, "KILLFEST"], action) => {
  switch (action.type) {
    case "NEXTBET":
      if (state[1] === "KILLFEST") {
        return (state = [state[0] + 1, (state[1] = "KILLFEST+TOP")]);
      }
      if (state[1] === "KILLFEST+TOP") {
        return (state = [state[0] + 1, (state[1] = "KILLFEST+WIN")]);
      }
      if (state[1] === "KILLFEST+WIN") {
        return (state = [state[0] + 1, (state[1] = "KILLFEST")]);
      } else {
        return [(state[0] = 0), (state[1] = "KILLFEST")];
      }
    case "PREVBET":
      if (state[1] === "KILLFEST") {
        return (state = [state[0] - 1, (state[1] = "KILLFEST+WIN")]);
      }
      if (state[1] === "KILLFEST+WIN") {
        return (state = [state[0] - 1, (state[1] = "KILLFEST+TOP")]);
      }
      if (state[1] === "KILLFEST+TOP") {
        return (state = [state[0] - 1, (state[1] = "KILLFEST")]);
      } else {
        return [(state[0] = 0), (state[1] = "KILLFEST")];
      }
    default:
      return state;
  }
};

export default betsReducer;
