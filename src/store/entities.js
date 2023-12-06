import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from './bugs';
import productsReducer from './products';
import membersReducer from './members';

export default combineReducers({
  bugs: bugsReducer,
  products: productsReducer,
  members: membersReducer,
});
