import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    refComponent: null,
    result: {
      name: "",
      data: [],
    },
  },
];

const sectionSlice = createSlice({
  name: "section",
  initialState: [],
  reducers: {
    addSectionHandler: (state, action) => {
      state.push(action.payload);
    },
    removeSectionHandler: (state, action) => {
      const index = action.payload;
      return state.filter((_, i) => i !== index);
    },
    updateSectionHandler: (state, action) => {
      const index = action.payload.index;
      const payload = action.payload.payload;
      state[index] = payload;
    },
  },
});

export default sectionSlice;
export const { addSectionHandler, removeSectionHandler, updateSectionHandler } =
  sectionSlice.actions;
