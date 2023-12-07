const tostify = (store) => (next) => (action) => {
  if (action.type === 'error') {
    console.log('Tostify: ', action.payload.message);
  }
  next(action);
};

export default tostify;
