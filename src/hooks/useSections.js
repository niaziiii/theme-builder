import {
  addSectionHandler,
  removeSectionHandler,
  updateSectionHandler,
} from "@/redux/slices/sectionSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useSections = () => {
  const getSections = () => useSelector((state) => state.sections);
  const dispatch = useDispatch();
  const sections = getSections();

  const addSection = (data) => {
    dispatch(addSectionHandler(data));
  };

  const removeSection = (i) => {
    dispatch(removeSectionHandler(i));
  };
  const updateSection = (i, data) => {
    dispatch(updateSectionHandler({ index: i, payload: data }));
  };

  return {
    sections,
    addSection,
    removeSection,
    updateSection,
  };
};

export default useSections;
