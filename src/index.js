//! FUNCTION COMPOSITION
/*
import { compose, pipe } from 'lodash/fp';
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const input = '   Javascript   ';

// USING COMPOSE FROM LODASH FOR MAKING THINGS CLEANER
const composeTransform = compose(wrapInDiv, toLowerCase, trim);
const composeResult = composeTransform(input);
// USING PIPE FROM LODASH FOR MAKNIG THINGS CLEANER AND IN THE ORDER
const pipeTransform = pipe(trim, toLowerCase, wrapInDiv);
const pipeResult = pipeTransform(input)

//FUNCTION COMPOSITION
const result = wrapInDiv(toLowerCase(trim(input)));
*/

import * as prodcutsActions from './store/products';
import * as bugsActions from './store/bugs';
import { getUnresolvedBugs } from './store/bugs';
import configureStore from './store/configureStore';
const store = configureStore();

// ! using Redux Toolkit

store.dispatch(
  prodcutsActions.addProduct({
    name: 'product1',
  })
);
store.dispatch(
  prodcutsActions.addProduct({
    name: 'product2',
  })
);

store.dispatch(
  bugsActions.addBug({
    description: 'Bug1',
  })
);

// store.dispatch(
//   bugsActions.resolveBug({
//     id: 1,
//   })
// );

const unresolvedBugs1 = getUnresolvedBugs(store.getState());
const unresolvedBugs2 = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs1 === unresolvedBugs2);
// !creting custom Redux
/*
import * as actions from './store/actionTypes';
import store from './custom-store/store';

store.subscribe(() => {
  console.log('STORE CHANGED', store.getState());
});

store.dispatch({
  type: actions.ADD_BUG,
  payload: {
    description: 'Bug1',
  },
});

store.dispatch({
  type: actions.REMOVE_BUG,
  payload: {
    id: 1,
  },
});
*/
