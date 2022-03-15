import { POST_ACTIONS } from "./PostTypes";

const initialState = {
  postLoading: false,
  postData: [],
  postError: "",

  commentLoading: false,
  commentData: [],
  commentError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCH_POSTS_REQUEST:
      return {
        ...state,
        postLoading: true,
      };

    case POST_ACTIONS.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postData: action.payload,
        postError: "",
      };
    case POST_ACTIONS.FETCH_POSTS_FAILURE:
      return {
        ...state,
        postLoading: false,
        postData: [],
        postError: action.payload,
      };
    case POST_ACTIONS.FETCH_USERS_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case POST_ACTIONS.FETCH_USERS_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postData: action.payload,
        postError: "",
      };
    case POST_ACTIONS.FETCH_USERS_POST_FAILURE:
      return {
        ...state,
        postLoading: false,
        postData: [],
        postError: action.payload,
      };
    case POST_ACTIONS.FETCH_TAGS_POST_REQUEST:
      return {
        ...state,
        postLoading: true,
      };
    case POST_ACTIONS.FETCH_TAGS_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        postData: action.payload,
        postError: "",
      };
    case POST_ACTIONS.FETCH_USERS_POST_FAILURE:
      return {
        ...state,
        postLoading: false,
        postData: [],
        postError: action.payload,
      };
    case POST_ACTIONS.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        commentLoading: true,
      };
    case POST_ACTIONS.FETCH_COMMENTS_SUCCESS:
      const index = (state.postData.data || []).findIndex(
        (post) => post.id === action.info
      );
      if (index + 1) {
        state.postData.data[index] = {
          ...state.postData.data[index],
          commentData: action.payload,
        };
        state.postData = {
          ...state.postData,
          index: index,
        };
      }
      return {
        ...state,
        commentLoading: false,
        commentError: "",
      };
    case POST_ACTIONS.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        commentLoading: false,
        commentData: [],
        commentError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
