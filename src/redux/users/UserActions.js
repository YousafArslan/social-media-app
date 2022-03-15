import axios from "axios";
import { USER_ACTIONS } from "./UserTypes";

export const userRequest = (action) => {
  return {
    type: action,
  };
};

export const userSuccess = (action, data, info) => {
  return {
    type: action,
    payload: data,
    info: info,
  };
};

export const userFailure = (action, error) => {
  return {
    type: action,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest(USER_ACTIONS.FETCH_USERS_REQUEST));
    axios
      .get("https://dummyapi.io/data/v1/user?limit=100", {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        const users = response.data;

        dispatch(userSuccess(USER_ACTIONS.FETCH_USERS_SUCCESS, users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(userFailure(USER_ACTIONS.FETCH_USERS_FAILURE, errorMsg));
      });
  };
};
