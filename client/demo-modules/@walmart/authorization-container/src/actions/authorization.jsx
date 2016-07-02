import { UPDATE } from "../constants/authorization";
import getAuthData from "../api/authorization";

export default {
  update: () => {
    return (dispatch) => {
      getAuthData()
        .then((data) => {
          dispatch({
            ... data,
            type: UPDATE
          });
        });
    };
  }
};
