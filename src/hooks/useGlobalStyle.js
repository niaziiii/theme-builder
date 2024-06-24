import {
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
} from "@/redux/slices/globalStyleSlice";
import { globalSupportiveKeys } from "@/utils/editAble/style.utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useGlobalStyle = () => {
  const getStyle = () => useSelector((state) => state.style);
  const dispatch = useDispatch();
  const style = getStyle();

  const updateGlobalFontSize = (key, data) => {
    if (key == globalSupportiveKeys.paragraph) {
      dispatch(setGlobalbalParagraphFontSize(data));
    }

    if (key == globalSupportiveKeys.heading) {
      dispatch(setGlobalbalHeadingFontSize(data));
    }

    if (key == globalSupportiveKeys.button) {
      dispatch(setGlobalbalButtonFontSize(data));
    }
  };
  const updateGlobalPadding = (key, data) => {
    if (key == globalSupportiveKeys.paragraph) {
      dispatch(setGlobalbalParagraphPadding(data));
    }

    if (key == globalSupportiveKeys.heading) {
      dispatch(setGlobalbalHeadingPadding(data));
    }

    if (key == globalSupportiveKeys.button) {
      dispatch(setGlobalbalButtonPadding(data));
    }
  };
  const updateGlobalMargin = (key, data) => {
    if (key == globalSupportiveKeys.paragraph) {
      dispatch(setGlobalbalParagraphMargin(data));
    }

    if (key == globalSupportiveKeys.heading) {
      dispatch(setGlobalbalHeadingMargin(data));
    }

    if (key == globalSupportiveKeys.button) {
      dispatch(setGlobalbalButtonMargin(data));
    }
  };
  const updateGlobalFontFamily = (key, data) => {
    if (key == globalSupportiveKeys.paragraph) {
      dispatch(setGlobalbalParagraphFontFamily(data));
    }

    if (key == globalSupportiveKeys.heading) {
      dispatch(setGlobalbalHeadingFontFamily(data));
    }

    if (key == globalSupportiveKeys.button) {
      dispatch(setGlobalbalButtonFontFamily(data));
    }
  };
  const updateGlobalButtonPrimaryStyle = (data) => {
    dispatch(setGlobalbalButtonPrimaryStyle(data));
  };
  const updateGlobalButtonSecondaryStyle = (data) => {
    dispatch(setGlobalbalButtonSecondaryStyle(data));
  };
  const updateGlobalBorderRadius = (key, data) => {
    if (key == globalSupportiveKeys.button) {
      dispatch(setGlobalbalButtonBorderRadius(data));
    }
  };

  return {
    style,
    updateGlobalFontSize,
    updateGlobalPadding,
    updateGlobalMargin,
    updateGlobalFontFamily,
    updateGlobalButtonPrimaryStyle,
    updateGlobalButtonSecondaryStyle,
    updateGlobalBorderRadius,
  };
};

export default useGlobalStyle;
