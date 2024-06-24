import { componentsRef } from "@/utils/home/home.utils";
import Accordion from "./accordion/Accordion";
import CallToAction from "./callToAction/CallToAction";
import Comparisons from "./comparisons/Comparisons";
import FeatureGrid from "./featureGrid/FeatureGrid";
import Items from "./items/Items";
import PriceList from "./priceList/PriceList";
import Quotes from "./quotes/Quotes";
import References from "./references/References";
import ShowCase from "./showCase/ShowCase";
import Steps from "./steps/Steps";
import TableOfContent from "./tableOfContent/TableOfContent";
import Tabs from "./tabs/Tabs";
import Teams from "./teams/Teams";
import Timeline from "./timeline/Timeline";

const FeatureBlockElements = {
  [componentsRef.default.feature.ShowCase]: ShowCase,
  [componentsRef.default.feature.Accordion]: Accordion,
  [componentsRef.default.feature.CallToAction]: CallToAction,
  [componentsRef.default.feature.Comparisons]: Comparisons,
  [componentsRef.default.feature.FeaturesGrid]: FeatureGrid,
  [componentsRef.default.feature.Items]: Items,
  [componentsRef.default.feature.PriceList]: PriceList,
  [componentsRef.default.feature.Quotes]: Quotes,
  [componentsRef.default.feature.References]: References,
  [componentsRef.default.feature.Steps]: Steps,
  [componentsRef.default.feature.TableOfContent]: TableOfContent,
  [componentsRef.default.feature.Tabs]: Tabs,
  [componentsRef.default.feature.Team]: Teams,
  [componentsRef.default.feature.Timelines]: Timeline,
};

export default FeatureBlockElements;
