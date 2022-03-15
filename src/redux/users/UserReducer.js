import { USER_ACTIONS } from "./UserTypes";

const initialState = {
  userLoading: false,
  userData: [],
  userError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.FETCH_USERS_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }
    case USER_ACTIONS.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        userData: action.payload,
        userError: "",
      };
    }
    case USER_ACTIONS.FETCH_USERS_FAILURE: {
      return {
        ...state,
        userLoading: false,
        userData: [],
        userError: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
