//! USING REDUX
/*
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import bugReducer from './bugs';


export default function configureStore() {
  const store = createStore(bugReducer, devToolsEnhancer({ trace: true }));
  return store;
}
*/

//! USING REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export default function () {
  return configureStore({
    reducer: reducers,
  });
}
