let createId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BUG':
      return [
        ...state,
        {
          id: ++createId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case 'REMOVE_BUG':
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
