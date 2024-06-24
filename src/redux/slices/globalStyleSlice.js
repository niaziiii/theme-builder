import { defaultGlobalValues } from "@/utils/editAble/style.utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paragraph: {
    fontSize: defaultGlobalValues.paragraph.fontSize,
    padding: defaultGlobalValues.paragraph.padding,
    margin: defaultGlobalValues.paragraph.margin,
    fontFamily: defaultGlobalValues.paragraph.fontFamily,
  },
  heading: {
    fontSize: defaultGlobalValues.heading.fontSize,
    padding: defaultGlobalValues.heading.padding,
    margin: defaultGlobalValues.heading.margin,
    fontFamily: defaultGlobalValues.heading.fontFamily,
  },
  button: {
    fontSize: defaultGlobalValues.button.fontSize,
    padding: defaultGlobalValues.button.padding,
    margin: defaultGlobalValues.button.margin,
    primaryStyle: defaultGlobalValues.button.primaryStyle,
    secondaryStyle: defaultGlobalValues.button.secondaryStyle,
    fontFamily: defaultGlobalValues.button.fontFamily,
    borderRadius: defaultGlobalValues.button.borderRadius,
  },
};

const styleSlice = createSlice({
  name: "style",
  initialState: initialState,
  reducers: {
    setGlobalbalParagraphFontSize: (state, action) => {
      state.paragraph.fontSize = action.payload;
    },
    setGlobalbalHeadingFontSize: (state, action) => {
      state.heading.fontSize = action.payload;
    },
    setGlobalbalButtonFontSize: (state, action) => {
      state.button.fontSize = action.payload;
    },
    setGlobalbalParagraphPadding: (state, action) => {
      state.paragraph.padding = action.payload;
    },
    setGlobalbalHeadingPadding: (state, action) => {
      state.heading.padding = action.payload;
    },
    setGlobalbalButtonPadding: (state, action) => {
      state.button.padding = action.payload;
    },
    setGlobalbalParagraphMargin: (state, action) => {
      state.paragraph.margin = action.payload;
    },
    setGlobalbalHeadingMargin: (state, action) => {
      state.heading.margin = action.payload;
    },
    setGlobalbalButtonMargin: (state, action) => {
      state.button.margin = action.payload;
    },
    setGlobalbalParagraphFontFamily: (state, action) => {
      state.paragraph.fontFamily = action.payload;
    },
    setGlobalbalHeadingFontFamily: (state, action) => {
      state.heading.fontFamily = action.payload;
    },
    setGlobalbalButtonFontFamily: (state, action) => {
      state.button.fontFamily = action.payload;
    },
    setGlobalbalButtonPrimaryStyle: (state, action) => {
      state.button.primaryStyle = action.payload;
    },
    setGlobalbalButtonSecondaryStyle: (state, action) => {
      state.button.secondaryStyle = action.payload;
    },
    setGlobalbalButtonBorderRadius: (state, action) => {
      state.button.borderRadius = action.payload;
    },
  },
});

export default styleSlice;
export const {
  setGlobalbalButtonFontSize,
  setGlobalbalHeadingFontSize,
  setGlobalbalParagraphFontSize,
  setGlobalbalButtonPadding,
  setGlobalbalHeadingPadding,
  setGlobalbalParagraphPadding,
  setGlobalbalButtonMargin,
  setGlobalbalHeadingMargin,
  setGlobalbalParagraphMargin,
  setGlobalbalParagraphFontFamily,
  setGlobalbalButtonPrimaryStyle,
  setGlobalbalButtonSecondaryStyle,
  setGlobalbalHeadingFontFamily,
  setGlobalbalButtonFontFamily,
  setGlobalbalButtonBorderRadius,
} = styleSlice.actions;
