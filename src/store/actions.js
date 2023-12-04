import store from './store';
import * as actions from './actionTypes';

export function addBug(description) {
  store.dispatch({
    type: actions.ADD_BUG,
    payload: {
      description,
    },
  });
}

export function removeBug(id) {
  store.dispatch({
    type: actions.REMOVE_BUG,
    payload: {
      id,
    },
  });
}

export function resolveBug(id) {
  store.dispatch({
    type: actions.RESOLVE_BUG,
    payload: {
      id,
    },
  });
}
