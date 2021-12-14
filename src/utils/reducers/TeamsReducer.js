const teamsReducer = (state = [0, "solo"], action) => {
  switch (action.type) {
    case "NEXTTEAM":
      if (state[1] === "solo") {
        return (state = [state[0] + 1, (state[1] = "duo")]);
      }
      if (state[1] === "duo") {
        return (state = [state[0] + 1, (state[1] = "trio")]);
      }
      if (state[1] === "trio") {
        return (state = [state[0] + 1, (state[1] = "squad")]);
      }
      if (state[1] === "squad") {
        return (state = [state[0] + 1, (state[1] = "solo")]);
      } else {
        return [(state[0] = 0), (state[1] = "solo")];
      }
    case "PREVTEAM":
      if (state[1] === "solo") {
        return (state = [state[0] - 1, (state[1] = "squad")]);
      }
      if (state[1] === "duo") {
        return (state = [state[0] - 1, (state[1] = "solo")]);
      }
      if (state[1] === "trio") {
        return (state = [state[0] - 1, (state[1] = "duo")]);
      }
      if (state[1] === "squad") {
        return (state = [state[0] - 1, (state[1] = "trio")]);
      } else {
        return [(state[0] = 0), (state[1] = "solo")];
      }
    default:
      return state;
  }
};

export default teamsReducer;
