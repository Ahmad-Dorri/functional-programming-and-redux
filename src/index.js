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

// ! using Redux
/*
import store from './store/store';
import { addBug, resolveBug } from './store/actions';

store.subscribe(() => {
  console.log('subscribed', store.getState());
});

addBug('hello');
resolveBug(1);
*/

// !creting custom Redux
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
