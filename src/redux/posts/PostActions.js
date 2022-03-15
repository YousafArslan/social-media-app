import axios from "axios";
import { POST_ACTIONS } from "./PostTypes";

export const request = (action) => {
  return {
    type: action,
  };
};

export const success = (action, data, info) => {
  return {
    type: action,
    payload: data,
    info: info,
  };
};

export const failure = (action, error) => {
  return {
    type: action,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(request(POST_ACTIONS.FETCH_POSTS_REQUEST));
    axios
      .get("https://dummyapi.io/data/v1/post?limit=50", {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        const posts = response.data;

        dispatch(success(POST_ACTIONS.FETCH_POSTS_SUCCESS, posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failure(POST_ACTIONS.FETCH_POSTS_FAILURE, errorMsg));
      });
  };
};

export const fetchUserPosts = (id) => {
  return (dispatch) => {
    dispatch(request(POST_ACTIONS.FETCH_USERS_POST_REQUEST));
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}/post?limit=10`, {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        const posts = response.data;
        dispatch(success(POST_ACTIONS.FETCH_USERS_POST_SUCCESS, posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failure(POST_ACTIONS.FETCH_USERS_POST_FAILURE, errorMsg));
      });
  };
};
export const fetchTagPosts = (tag) => {
  tag = tag.trim();
  return (dispatch) => {
    dispatch(request(POST_ACTIONS.FETCH_TAGS_POST_REQUEST));
    axios
      .get(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`, {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        const posts = response.data;
        dispatch(success(POST_ACTIONS.FETCH_TAGS_POST_SUCCESS, posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failure(POST_ACTIONS.FETCH_TAGS_POST_FAILURE, errorMsg));
      });
  };
};

export const fetchComments = (id) => {
  return (dispatch) => {
    dispatch(request(POST_ACTIONS.FETCH_COMMENTS_REQUEST));
    axios
      .get(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`, {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        const comments = response.data.data;

        dispatch(success(POST_ACTIONS.FETCH_COMMENTS_SUCCESS, comments, id));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(failure(POST_ACTIONS.FETCH_COMMENTS_FAILURE, errorMsg));
      });
  };
};
