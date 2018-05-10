const initState = null;

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case "USER.LOGOUT":
      return initState;

    case 'USER.LOGIN':
    case 'USER.SET':
      return action.data.user;

    default:
      return state;
  }
};

export default userReducer;
