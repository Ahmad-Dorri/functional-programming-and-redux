const { default: axios } = require('axios');
import * as actions from '../api';
/*
const action = {
  url: '/bugs',
  method: 'get',
  data: {},
  onSuccess: 'bugsRecived',
  onError: 'apiRequestFailed'
}
*/
const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    // for showing this dispatch in our redux devtools
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    axios
      .request({
        baseURL: 'http://localhost:9001/api', // we should store this somewhere in our application configuration file
        url, // /bugs
        method, // get
        data, // {}
        onSuccess,
        onError,
      })
      .then(
        (data) => {
          //general
          dispatch(actions.apiCallSuccess(data));
          //specific
          if (onSuccess) dispatch({ type: onSuccess, payload: data });
        },
        (error) => {
          // general error handling
          dispatch(actions.apiCallFailed(error));
          // specific error handling
          if (onError) dispatch({ type: onError, payload: error });
        }
      );
  };

export default api;
