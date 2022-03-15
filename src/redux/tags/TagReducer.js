import { TAG_ACTIONS } from "./TagTypes";

const initialState = {
  tagLoading: false,
  tagData: [],
  tagError: "",
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_ACTIONS.FETCH_TAG_REQUEST: {
      return {
        ...state,
        tagLoading: true,
      };
    }
    case TAG_ACTIONS.FETCH_TAG_SUCCESS: {
      return {
        ...state,
        tagLoading: false,
        tagData: action.payload,
        tagError: "",
      };
    }
    case TAG_ACTIONS.FETCH_TAG_FAILURE: {
      return {
        ...state,
        tagLoading: false,
        tagData: [],
        tagError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default tagReducer;
