let initState = {};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "BALANCE":
      return {
        ...state,
        balance: payload,
      };
    case "USER_REWARD":
      return {
        ...state,
        reward: payload,
      };
    case "USER_NFTS":
      return {
        ...state,
        ownNfts: payload,
      };

    default:
      return state;
  }
};
