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
    const { url, method, data, onSuccess, onError, onStart } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    axios
      .request({
        baseURL: 'http://localhost:9002/api', // we should store this somewhere in our application configuration file
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
          dispatch(actions.apiCallFailed(error.message));
          // specific error handling
          if (onError) dispatch({ type: onError, payload: error.message });
        }
      );
    if (onError) dispatch({ type: onError });
  };

export default api;
