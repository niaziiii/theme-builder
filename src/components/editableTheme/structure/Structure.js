import { componentsRef } from "@/utils/home/home.utils";
import Banner from "./banner/Banner";
import BigBoxes from "./bigBoxes/BigBoxes";
import ProductCarousel from "./carousel/ProductCarousel";
import Coulmns from "./coulmns/Coulmns";
import Cover from "./cover/Cover";
import Features from "./features/Features";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageText from "./imageText/ImageText";
import ImagesWall from "./imagesWall/ImagesWall";
import Masonry from "./masonry/Masonry";
import MediaList from "./mediaList/MediaList";
import Numbers from "./numbers/Numbers";
import Parallax from "./parallax/Parallax";
import Text from "./text/Text";
import TextCover from "./textCover/TextCover";
import TextImage from "./textImage/TextImage";
import Title from "./title/Title";
import TitleImage from "./titleImage/TitleImage";

const StructureBlockElements = {
  [componentsRef.default.structure.Banner]: Banner,
  [componentsRef.default.structure.BigBoxes]: BigBoxes,
  [componentsRef.default.structure.ProductCarousel]: ProductCarousel,
  [componentsRef.default.structure.Coulmns]: Coulmns,
  [componentsRef.default.structure.Cover]: Cover,
  [componentsRef.default.structure.Features]: Features,
  [componentsRef.default.structure.ImageGallery]: ImageGallery,
  [componentsRef.default.structure.ImageText]: ImageText,
  [componentsRef.default.structure.ImagesWall]: ImagesWall,
  [componentsRef.default.structure.Masonry]: Masonry,
  [componentsRef.default.structure.MediaList]: MediaList,
  [componentsRef.default.structure.Numbers]: Numbers,
  [componentsRef.default.structure.Parallax]: Parallax,
  [componentsRef.default.structure.Text]: Text,
  [componentsRef.default.structure.TextCover]: TextCover,
  [componentsRef.default.structure.TextImage]: TextImage,
  [componentsRef.default.structure.Title]: Title,
  [componentsRef.default.structure.TitleImage]: TitleImage,
};

export default StructureBlockElements;
