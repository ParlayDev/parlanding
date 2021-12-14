export const killsReducer = (state = 3, action) => {
  switch (action.type) {
    case "KILLS":
      return (state = parseInt(action.kills));
    default:
      return state;
  }
};
