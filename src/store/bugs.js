import { createSelector, createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

//! REDUX TOOLKIT CREATESLICE
let lastId = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload.data;
      bugs.loading = false;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    addBug: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    removeBug: (bugs, action) => {
      return bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
    resolveBug: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

export const {
  addBug,
  removeBug,
  resolveBug,
  bugsReceived,
  bugRequested,
  bugsRequestFailed,
} = slice.actions;
export default slice.reducer;

//! ACTION CREATORS FOR CALLING APIS
// export const loadBugs = createAction('loadBugs')

const url = '/bugs';
export const loadBugs = () =>
  apiCallBegan({
    url,
    onStart: bugRequested.type,
    onError: bugsRequestFailed.type,
    onSuccess: bugsReceived.type,
  });
//! SELECTORS
// export const getBug = (state, id) =>
//   state.entities.bugs.find((bug) => bug.id === id);

export const getBug = (bugId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.find((bug) => bug.id === bugId)
  );

//! memoized selectors
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);
//actions
/*
export const addBug = createAction('ADD_BUG');
export const removeBug = createAction('REMOVE_BUG');
export const resolveBug = createAction('RESOLVE_BUG');
*/
//! REDUX TOOLKIT REDUCER
/*
let createId = 0;

export default createReducer(
  //initial state value
  [],
  {
    [addBug.type]: (bugs, action) => {
      // we can use mutable code because Redux Toolkit uses Immer under the hood
      bugs.push({
        id: ++createId,
        description: action.payload.description,
        resolved: false,
      });
    },
    [removeBug.type]: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },
    [resolveBug.type]: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  }
);
*/
//! in Redux Toolkit we don't need actionTypes anymore
// actionTypes

/*
  const actions = {
    ADD_BUG: 'ADD_BUG',
    REMOVE_BUG: 'REMOVE_BUG',
    RESOLVE_BUG: 'RESOLVE_BUG',
  };
  */
//!REDUX REDUCER
/*
  creating unique id for each bug
  let createId = 0;
  function bugReducer(state = [], action) {
    switch (action.type) {
      case actions.ADD_BUG:
        return [
        ...state,
        {
          id: ++createId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.RESOLVE_BUG:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}
*/

//! REDUX (action creators)
/*
function addBug(description) {
  store.dispatch({
    type: actions.ADD_BUG,
    payload: {
      description,
    },
  });
}

function removeBug(id) {
  store.dispatch({
    type: actions.REMOVE_BUG,
    payload: {
      id,
    },
  });
}

function resolveBug(id) {
  store.dispatch({
    type: actions.RESOLVE_BUG,
    payload: {
      id,
    },
  });
}
export default bugReducer
export { removeBug, resolveBug, addBug };
*/
