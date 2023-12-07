const { default: axios } = require('axios');

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
    if (action.type !== 'apiCallBegan') return next(action);
    // for showing this dispatch in our redux devtools
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    axios
      .request({
        baseURL: 'http://localhost:9001/api', // we should store this somewhere in our application configuration file
        url, // /bugs
        method, // get
        data, // {}
      })
      .then(
        (data) => dispatch({ type: onSuccess, payload: data }),
        (error) => dispatch({ type: onError, payload: error })
      );
  };

export default api;
