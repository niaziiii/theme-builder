"use client";
import Welcome from "@/themes/eut/home/welcome/Welcome";
import OrderInformation from "@/themes/eut/home/orderInfo/OrderInfo";
import Cards from "@/themes/eut/home/cards/Cards";
import { componentsRef } from "@/utils/home/home.utils";
import AccountInfo from "@/themes/eut/home/accountInfo/AccountInfo";
import Donate from "@/themes/eut/home/donate/Donate";
import ProductCarousel from "@/themes/eut/home/productCarousel/ProductCarousel";
import { APP_THEMES } from "@/utils/theme/theme.utils";

const EutHomePageElements = {
  [componentsRef[APP_THEMES.eut].WELCOME]: Welcome,
  [componentsRef[APP_THEMES.eut].ORDER_INFO]: OrderInformation,
  [componentsRef[APP_THEMES.eut].CARDS]: Cards,
  [componentsRef[APP_THEMES.eut].ACCOUNT_INFO]: AccountInfo,
  [componentsRef[APP_THEMES.eut].DONATE]: Donate,
  [componentsRef[APP_THEMES.eut].PRODUCT_CAROUSEL]: ProductCarousel,
};

export default EutHomePageElements;
