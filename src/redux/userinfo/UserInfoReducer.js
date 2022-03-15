import { USERINFO_ACTIONS } from "./UserInfoTypes";

const initialState = {
  userinfoLoading: false,
  userinfoData: [],
  userinfoError: "",
};

const userinfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO_ACTIONS.FETCH_USERINFO_REQUEST: {
      return {
        ...state,
        userinfoLoading: true,
      };
    }
    case USERINFO_ACTIONS.FETCH_USERINFO_SUCCESS: {
      return {
        ...state,
        userinfoLoading: false,
        userinfoData: action.payload,
        userinfoError: "",
      };
    }
    case USERINFO_ACTIONS.FETCH_USERINFO_FAILURE: {
      return {
        ...state,
        userinfoLoading: false,
        userinfoData: [],
        userinfoError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userinfoReducer;
