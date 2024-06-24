"use client";
import React, { useMemo } from "react";
import EditAbleWrapper from "@/components/layout/EditAbleWrapper";
import DropAbleSection from "@/components/common/dragAndDrop/DropAbleSection";
import useSections from "@/hooks/useSections";
import SowaHomePageElements from "@/themes/sowa/home/HomePage";
import ThemePage from "../chooseTheme/ChooseTheme";
import useTheme from "@/hooks/useTheme";
import EutHomePageElements from "@/themes/eut/home/HomePage";
import { APP_THEMES } from "@/utils/theme/theme.utils";
import StructureBlockElements from "@/components/editableTheme/structure/Structure";
import FeatureBlockElements from "@/components/editableTheme/features/Features";
import InnerBlockElements from "@/components/editableTheme/innerContent/InnerContent";
import DynamicBlockElements from "@/components/editableTheme/dynamicContent/DynamicContent";

const HomePage = () => {
  const { sections } = useSections();
  const { theme } = useTheme();

  const CurrentElements = useMemo(() => {
    const Components = {
      [APP_THEMES.sowa]: SowaHomePageElements,
      [APP_THEMES.eut]: EutHomePageElements,
    };

    return {
      ...Components[theme.name],
      ...StructureBlockElements,
      ...FeatureBlockElements,
      ...InnerBlockElements,
      ...DynamicBlockElements
    };
  }, [theme.name]);

  if (!theme.name) return <ThemePage />;

  return (
    <EditAbleWrapper>
      <DropAbleSection sections={sections} Elements={CurrentElements} />
    </EditAbleWrapper>
  );
};

export default HomePage;
