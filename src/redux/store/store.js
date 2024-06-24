import { configureStore, combineReducers } from "@reduxjs/toolkit";
import styleSlice from "@/redux/slices/globalStyleSlice";
import sectionSlice from "@/redux/slices/sectionSlice";
import themeSlice from "@/redux/slices/themeSlice";

const rootReducer = combineReducers({
  style: styleSlice.reducer,
  sections: sectionSlice.reducer,
  theme: themeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
