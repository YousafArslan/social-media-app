import axios from "axios";
import { USERINFO_ACTIONS } from "./UserInfoTypes";

export const userinfoRequest = (action) => {
  return {
    type: action,
  };
};

export const userinfoSuccess = (action, data, info) => {
  return {
    type: action,
    payload: data,
    info: info,
  };
};

export const userinfoFailure = (action, error) => {
  return {
    type: action,
    payload: error,
  };
};

export const fetchUserInfo = (id) => {
  return (dispatch) => {
    dispatch(userinfoRequest(USERINFO_ACTIONS.FETCH_USERINFO_REQUEST));
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "6183b478f1d3014eabdb2a48",
        },
      })
      .then((response) => {
        dispatch(
          userinfoSuccess(
            USERINFO_ACTIONS.FETCH_USERINFO_SUCCESS,
            response.data
          )
        );
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(
          userinfoFailure(USERINFO_ACTIONS.FETCH_USERINFO_FAILURE, errorMsg)
        );
      });
  };
};
