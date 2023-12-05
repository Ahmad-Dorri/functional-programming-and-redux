import configureStore from './configureStore';
const store = configureStore();
// actionTypes
const actions = {
  ADD_BUG: 'ADD_BUG',
  REMOVE_BUG: 'REMOVE_BUG',
  RESOLVE_BUG: 'RESOLVE_BUG',
};

// reducer
// creating unique id for each bug
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

// action creators

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

export default bugReducer;
export { removeBug, resolveBug, addBug };
