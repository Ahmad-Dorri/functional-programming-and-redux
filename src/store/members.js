import { createSelector, createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'members',
  initialState: [],
  reducers: {
    addMember: (members, action) => {
      members.push({
        id: ++lastId,
        name: action.payload.name,
        bugIds: [],
      });
    },
    addBugToMember: (members, action) => {
      const idx = members.findIndex(
        (member) => member.id === action.payload.id
      );
      members[idx].bugIds.push(action.payload.bugId);
    },
  },
});
//! couldn't do this
// export const getMember = createSelector(
//   (state) => state.entities.members,
//   (members, id) => members.find((member) => member.id === id)
// );

// export const getMember = (state, id) =>
//   state.entities.members.find((member) => member.id === id);

export const getMember = (memberId) =>
  createSelector(
    (state) => state.entities.members,
    (members) => members.find((member) => member.id === memberId)
  );

export default slice.reducer;
export const { addBugToMember, addMember } = slice.actions;
