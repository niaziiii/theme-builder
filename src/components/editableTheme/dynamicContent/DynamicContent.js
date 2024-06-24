import { componentsRef } from "@/utils/home/home.utils";
import Form from "./form/Form";
import Map from "./map/Map";
import Search from "./search/Search";
import Popup from "./popup/Popup";
import Facebook from "./facebook/Facebook";
import InstagramPage from "./instagramPage/InstagramPage";
import Countdown from "./Countdown/Countdown";

const DynamicBlockElements = {
  [componentsRef.default.dynamicContent.Form]: Form,
  [componentsRef.default.dynamicContent.Map]: Map,
  [componentsRef.default.dynamicContent.Search]: Search,
  [componentsRef.default.dynamicContent.Popup]: Popup,
  [componentsRef.default.dynamicContent.Facebook]: Facebook,
  [componentsRef.default.dynamicContent.InstagramPage]: InstagramPage,
  [componentsRef.default.dynamicContent.Countdown]: Countdown,
};
export default DynamicBlockElements;
