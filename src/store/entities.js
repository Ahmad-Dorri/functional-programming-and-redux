import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from './bugs';
import productsReducer from './products';
export default combineReducers({
  bugs: bugsReducer,
  products: productsReducer,
});
