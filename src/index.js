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

import * as bugsActions from './store/bugs';
import * as membersActions from './store/members';
import { getMember } from './store/members';
import { getBug } from './store/bugs';
import configureStore from './store/configureStore';
const store = configureStore();

// ! using Redux Toolkit

store.dispatch(
  bugsActions.addBug({
    description: 'Bug1',
  })
);

store.dispatch((dispatch, getState) => {
  dispatch({ type: 'error', payload: { message: 'an error occured.' } });
});

store.dispatch({
  type: 'apiCallBegan',
  payload: {
    url: '/bugs',
    onSuccess: 'bugsRecived',
    onError: 'apiRequestFailed',
  },
});

/*
store.dispatch(
  bugsActions.addBug({
    description: 'Bug2',
  })
);

store.dispatch(
  bugsActions.addBug({
    description: 'Bug3',
  })
);

store.dispatch(
  membersActions.addMember({
    name: 'ahmad',
  })
);

store.dispatch(
  membersActions.addMember({
    name: 'hamid',
  })
);

store.dispatch(
  membersActions.addBugToMember({
    id: 2,
    bugId: 1,
  })
);

store.dispatch(
  membersActions.addBugToMember({
    id: 2,
    bugId: 2,
  })
);

store.dispatch(
  membersActions.addBugToMember({
    id: 1,
    bugId: 3,
  })
);

const member2BugIds = getMember(2)(store.getState()).bugIds;

const member2Bugs = member2BugIds.map((bugId) => {
  return getBug(bugId)(store.getState());
});

console.log(member2Bugs);
*/
// const bug1 = getBug(state, 1);
// state.entities.bugs.
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
