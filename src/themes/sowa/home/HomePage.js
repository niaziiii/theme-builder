"use client";

import TextCover from "@/themes/sowa/home/textCover/TextCover";
import Cover from "@/themes/sowa/home/cover/Cover";
import Banner from "@/themes/sowa/home/Banner/Banner";
import { componentsRef } from "@/utils/home/home.utils";
import HeroSection from "@/themes/sowa/home/HeroSection/HeroSection";
import SowaInfo from "@/themes/sowa/home/SowaInfo/SowaInfo";
import ProductCategory from "@/themes/sowa/home/ProductCategory/ProductCategory";
import DealOfTheDay from "@/themes/sowa/home/DealOfTheDay/DealOfTheDay";
import { APP_THEMES } from "@/utils/theme/theme.utils";

const SowaHomePageElements = {
  [componentsRef[APP_THEMES.sowa].COVER]: Cover,
  [componentsRef[APP_THEMES.sowa].TEXT_COVER]: TextCover,
  [componentsRef[APP_THEMES.sowa].BANNER]: Banner,
  [componentsRef[APP_THEMES.sowa].HERO_SECTION]: HeroSection,
  [componentsRef[APP_THEMES.sowa].SOW_INFO]: SowaInfo,
  [componentsRef[APP_THEMES.sowa].PRODUCT_CATEGORY]: ProductCategory,
  [componentsRef[APP_THEMES.sowa].DEAL_OF_THE_DAY]: DealOfTheDay,
};

export default SowaHomePageElements;
