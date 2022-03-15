import axios from "axios";
import { TAG_ACTIONS } from "./TagTypes";

export const tagRequest = (action) => {
  return {
    type: action,
  };
};

export const tagSuccess = (action, data, info) => {
  return {
    type: action,
    payload: data,
    info: info,
  };
};

export const tagFailure = (action, error) => {
  return {
    type: action,
    payload: error,
  };
};

export const fetchTags = () => {
  return (dispatch) => {
    dispatch(tagRequest(TAG_ACTIONS.FETCH_TAG_REQUEST));
    axios
      .get("https://dummyapi.io/data/v1/tag?limit=10", {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        dispatch(tagSuccess(TAG_ACTIONS.FETCH_TAG_SUCCESS, response.data.data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(tagFailure(TAG_ACTIONS.FETCH_TAG_FAILURE, errorMsg));
      });
  };
};
