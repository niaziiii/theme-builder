import { themeColors } from "@/utils/theme/theme.utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  colors: null,
};

const themeSlice = createSlice({
  name: "section",
  initialState: initialState,
  reducers: {
    setThemeHandler: (state, action) => {
      state.name = action.payload;
    },
    setThemeColorsHandler: (state, action) => {
      state.colors = themeColors[action.payload];
    },
    setThemeColorGlobal: (state, action) => {
      state.colors = action.payload;
    },
  },
});

export default themeSlice;
export const { setThemeHandler, setThemeColorsHandler, setThemeColorGlobal } =
  themeSlice.actions;
