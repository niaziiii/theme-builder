import {
  setThemeHandler,
  setThemeColorsHandler,
  setThemeColorGlobal,
} from "@/redux/slices/themeSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useTheme = () => {
  const getTheme = () => useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const theme = getTheme();

  const addTheme = (name) => {
    dispatch(setThemeHandler(name));
  };

  const addThemeColors = (key) => {
    dispatch(setThemeColorsHandler(key));
  };

  const addThemeColorGlobal = (key, obj) => {
    if (key === "bg") {
      dispatch(
        setThemeColorGlobal({
          ...theme.colors,
          bg: {
            ...theme.colors.bg,
            ...obj,
          },
        })
      );
    }
    if (key === "bg") {
      dispatch(
        setThemeColorGlobal({
          ...theme.colors,
          bg: {
            ...theme.colors.bg,
            ...obj,
          },
        })
      );
    }
    if (key === "text") {
      dispatch(
        setThemeColorGlobal({
          ...theme.colors,
          text: {
            ...theme.colors.text,
            ...obj,
          },
        })
      );
    }
  };

  return {
    theme,
    addTheme,
    addThemeColors,
    addThemeColorGlobal,
  };
};

export default useTheme;
