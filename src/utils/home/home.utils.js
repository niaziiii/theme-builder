import { APP_THEMES } from "../theme/theme.utils";
import { getData, sectionsData } from "./dumy.utils";
export const homePageComponentsRef = {
  BANNER: "BANNER",
  COVER: "COVER",
  TEXT_COVER: "TEXT-COVER",
  HERO_SECTION: "HERO-SECTION",
  SOW_INFO: "SOW-INFO",
  PRODUCT_CATEGORY: "PRODUCT-CATEGORY",
  DEAL_OF_THE_DAY: "DEAL-OF-THE-DAY",
};

export var componentsRef = {
  default: {
    structure: {
      Banner: "_structure-Banner",
      BigBoxes: "_structure-Big-Boxes",
      ProductCarousel: "_structure-Product-Carousel",
      Coulmns: "_structure-Coulmns",
      Cover: "_structure-Cover",
      Features: "_structure-Features",
      ImageGallery: "_structure-Image-Gallery",
      ImageText: "_structure-Image-Text",
      ImagesWall: "_structure-Images-Wall",
      Masonry: "_structure-Masonry",
      MediaList: "_structure-Media-List",
      Numbers: "_structure-Numbers",
      Parallax: "_structure-Parallax",
      Text: "_structure-Text",
      TextCover: "_structure-Text-Cover",
      TextImage: "_structure-Text-Image",
      Title: "_structure-Title",
      TitleImage: "_structure-Title-Image",
    },
    feature: {
      ShowCase: "_feature-Show-Case",
      Comparisons: "_feature-Comparisons",
      Team: "_feature-Team",
      CallToAction: "_feature-Call-To-Action",
      References: "_feature-References",
      Accordion: "_feature-Accordion",
      FeaturesGrid: "_feature-Features-Grid",
      TableOfContent: "_feature-Table-Of-Content",
      PriceList: "_feature-Price-List",
      Items: "_feature-Items",
      Tabs: "_feature-Tabs",
      Timelines: "_feature-Timelines",
      Steps: "_feature-Steps",
      Quotes: "_features-Quotes",
    },
    dynamicContent: {
      Form: "_dynamicContent-Form",
      Map: "_dynamicContent-Map",
      Search: "_dynamicContent-Search",
      Popup: "_dynamicContent-Popup",
      Facebook: "_dynamicContent-Facebook",
      InstagramPage: "_dynamicContent-Instagram-Page",
      Countdown: "_dynamicContent-Countdown",
    },
    innerContent: {
      Button: "_innerContent-Button",
      InnerImage: "_innerContent-Image",
      Video: "_innerContent-Video",
      Separator: "_innerContent-Separator",
      Alert: "_innerContent-Alert",
      Rating: "_innerContent-Rating",
      Card: "_innerContent-Card",
      Share: "_innerContent-Share",
      SocialMedia: "_innerContent-Social-Media",
      Search: "_innerContent-Search",
      TextHighlight: "_innerContent-Text-Highlight",
      Chart: "_innerContent-Chart",
      ProgressBar: "_innerContent-Progress-Bar",
      Bedge: "_innerContent-Bedge",
      Blockquote: "_innerContent-Blockquote",
      Appointment: "_innerContent-Appointment",
      Newsletter: "_innerContent-Newsletter",
      DonationButton: "_innerContent-Donation-Button",
      AddToCartButton: "_innerContent-Add-To-Cart-Button",
    },
  },
  [APP_THEMES.sowa]: {
    COVER: "COVER",
    TEXT_COVER: "TEXT_COVER",
    BANNER: "BANNER",
    HERO_SECTION: "HERO-SECTION",
    SOW_INFO: "SOW-INFO",
    DEAL_OF_THE_DAY: "DEAL-OF-THE-DAY",
    PRODUCT_CATEGORY: "PRODUCT-CATEGORY",
  },
  [APP_THEMES.eut]: {
    WELCOME: "WELCOME",
    ORDER_INFO: "ORDER-INFO",
    CARDS: "CARDS",
    ACCOUNT_INFO: "ACCOUNT-INFO",
    DONATE: "DONATE",
    PRODUCT_CAROUSEL: "PRODUCT-CAROUSEL",
  },
};

export const SowaBlocks = [
  {
    id: "sw-banner1",
    name: "Banner",
    refComponent: componentsRef.SOWA.BANNER,
    image: "/block-test.svg",
    data: getData(sectionsData.sowa, componentsRef.SOWA.BANNER),
  },
  {
    id: "sw-herosection",
    name: "Hero Section",
    refComponent: componentsRef.SOWA.HERO_SECTION,
    data: {
      style: {},
    },
    image: "/block-test.svg",
  },
  {
    id: "2sw",
    name: "Info",
    refComponent: componentsRef.SOWA.SOW_INFO,
    data: getData(sectionsData.sowa, componentsRef.SOWA.SOW_INFO),

    image: "/block-test.svg",
  },
  {
    id: "4sw",
    name: "SW DOTD",
    refComponent: componentsRef.SOWA.DEAL_OF_THE_DAY,
    data: getData(sectionsData.sowa, componentsRef.SOWA.DEAL_OF_THE_DAY),
    image: "/block-test.svg",
  },
  {
    id: "3sw",
    name: "Product Category",
    refComponent: componentsRef.SOWA.PRODUCT_CATEGORY,
    data: {
      style: {},
    },
    image: "/block-test.svg",
  },
  {
    id: "3sw",
    name: "Text Cover",
    refComponent: componentsRef.SOWA.TEXT_COVER,
    data: {
      style: {},
    },
    image: "/block-test.svg",
  },
];

export const EUTBlocks = [
  {
    id: "eut-1",
    name: "Well come",
    refComponent: componentsRef[APP_THEMES.eut].WELCOME,
    image: "/block-test.svg",
  },
  {
    id: "eut-2",
    name: "Order Info",
    refComponent: componentsRef[APP_THEMES.eut].ORDER_INFO,
    image: "/block-test.svg",
  },
  {
    id: "eut-3",
    name: "Cards",
    refComponent: componentsRef[APP_THEMES.eut].CARDS,
    image: "/block-test.svg",
  },
  {
    id: "eut-4",
    name: "Account Info",
    refComponent: componentsRef[APP_THEMES.eut].ACCOUNT_INFO,
    image: "/block-test.svg",
  },
  {
    id: "eut-5",
    name: "Donate",
    refComponent: componentsRef[APP_THEMES.eut].DONATE,
    image: "/block-test.svg",
  },
  {
    id: "eut-6",
    name: "Product Carousel",
    refComponent: componentsRef[APP_THEMES.eut].PRODUCT_CAROUSEL,
    image: "/block-test.svg",
  },
];

const structureComponentsBlocks = [
  {
    id: "structure-1",
    name: "Banner",
    refComponent: componentsRef.default.structure.Banner,
    image: "/block_svgs/Structure_svgs/s_banner.svg",
  },
  {
    id: "structure-2",
    name: "Big-Boxes",
    refComponent: componentsRef.default.structure.BigBoxes,
    image: "/block_svgs/Structure_svgs/s_color_blocks_2.svg",
  },
  {
    id: "structure-3",
    name: "Product-Carousel",
    refComponent: componentsRef.default.structure.ProductCarousel,
    image: "/block_svgs/Structure_svgs/s_image_gallery.svg",
  },
  {
    id: "structure-4",
    name: "Coulmns",
    refComponent: componentsRef.default.structure.Coulmns,
    image: "/block_svgs/Structure_svgs/s_three_columns.svg",
  },
  {
    id: "structure-5",
    name: "Cover",
    refComponent: componentsRef.default.structure.Cover,
    image: "/block_svgs/Structure_svgs/s_cover.svg",
  },
  {
    id: "structure-6",
    name: "Features",
    refComponent: componentsRef.default.structure.Features,
    image: "/block_svgs/Structure_svgs/s_features.svg",
  },
  {
    id: "structure-7",
    name: "Image-Gallery",
    refComponent: componentsRef.default.structure.ImageGallery,
    image: "/block_svgs/Structure_svgs/s_image_gallery.svg",
  },
  {
    id: "structure-8",
    name: "Image-Text",
    refComponent: componentsRef.default.structure.ImageText,
    image: "/block_svgs/Structure_svgs/s_image_text.svg",
  },
  {
    id: "structure-9",
    name: "Images-Wall",
    refComponent: componentsRef.default.structure.ImagesWall,
    image: "/block_svgs/Structure_svgs/s_images_wall.svg",
  },
  {
    id: "structure-10",
    name: "Masonry",
    refComponent: componentsRef.default.structure.Masonry,
    image: "/block_svgs/Structure_svgs/s_masonry_block.svg",
  },
  {
    id: "structure-11",
    name: "Media-List",
    refComponent: componentsRef.default.structure.MediaList,
    image: "/block_svgs/Structure_svgs/s_media_list.svg",
  },
  {
    id: "structure-12",
    name: "Numbers",
    refComponent: componentsRef.default.structure.Numbers,
    image: "/block_svgs/Structure_svgs/s_numbers.svg",
  },
  {
    id: "structure-13",
    name: "Parallax",
    refComponent: componentsRef.default.structure.Parallax,
    image: "/block_svgs/Structure_svgs/s_parallax.svg",
  },
  {
    id: "structure-14",
    name: "Text",
    refComponent: componentsRef.default.structure.Text,
    image: "/block_svgs/Structure_svgs/s_text_block.svg",
  },
  {
    id: "structure-15",
    name: "Text-Cover",
    refComponent: componentsRef.default.structure.TextCover,
    image: "/block_svgs/Structure_svgs/s_text_cover.svg",
  },
  {
    id: "structure-16",
    name: "Text-Image",
    refComponent: componentsRef.default.structure.TextImage,
    image: "/block_svgs/Structure_svgs/s_text_image.svg",
  },
  {
    id: "structure-17",
    name: "Title",
    refComponent: componentsRef.default.structure.Title,
    image: "/block_svgs/Structure_svgs/s_title.svg",
  },
  {
    id: "structure-18",
    name: "Title-Image",
    refComponent: componentsRef.default.structure.TitleImage,
    image: "/block_svgs/Structure_svgs/s_picture.svg",
  },
];

const featureComponentsBlocks = [
  {
    id: "feature-1",
    name: "Show-Case",
    refComponent: componentsRef.default.feature.ShowCase,
    image: "/block_svgs/Features_svgs/s_showcase.svg",
  },
  {
    id: "feature-2",
    name: "Comparisons",
    refComponent: componentsRef.default.feature.Comparisons,
    image: "/block_svgs/Features_svgs/s_comparisons.svg",
  },
  {
    id: "feature-3",
    name: "Team",
    refComponent: componentsRef.default.feature.Team,
    image: "/block_svgs/Features_svgs/s_company_team.svg",
  },
  {
    id: "feature-4",
    name: "Call-To-Action",
    refComponent: componentsRef.default.feature.CallToAction,
    image: "/block_svgs/Features_svgs/s_call_to_action.svg",
  },
  {
    id: "feature-5",
    name: "References",
    refComponent: componentsRef.default.feature.References,
    image: "/block_svgs/Features_svgs/s_references.svg",
  },
  {
    id: "feature-6",
    name: "Accordion",
    refComponent: componentsRef.default.feature.Accordion,
    image: "/block-test.svg",
  },
  {
    id: "feature-7",
    name: "Features-Grid",
    refComponent: componentsRef.default.feature.FeaturesGrid,
    image: "/block_svgs/Features_svgs/s_features_grid.svg",
  },
  {
    id: "feature-8",
    name: "Table-Of-Content",
    refComponent: componentsRef.default.feature.TableOfContent,
    image: "/block_svgs/Features_svgs/s_table_of_content.svg",
  },
  {
    id: "feature-9",
    name: "Pricelist",
    refComponent: componentsRef.default.feature.PriceList,
    image: "/block_svgs/Features_svgs/s_showcase.svg",
  },
  {
    id: "feature-10",
    name: "Items",
    refComponent: componentsRef.default.feature.Items,
    image: "/block_svgs/Features_svgs/s_product_catalog.svg",
  },
  {
    id: "feature-11",
    name: "Tabs",
    refComponent: componentsRef.default.feature.Tabs,
    image: "/block_svgs/Features_svgs/s_tabs.svg",
  },
  {
    id: "feature-12",
    name: "Timelines",
    refComponent: componentsRef.default.feature.Timelines,
    image: "/block_svgs/Features_svgs/s_timeline.svg",
  },
  {
    id: "feature-13",
    name: "Steps",
    refComponent: componentsRef.default.feature.Steps,
    image: "/block_svgs/Features_svgs/s_process_steps.svg",
  },
  {
    id: "feature-14",
    name: "Quotes",
    refComponent: componentsRef.default.feature.Quotes,
    image: "/block_svgs/Features_svgs/s_quotes_carousel.svg",
  },
];

export const dynamicComponentsBlocks = [
  {
    id: "dynamicContent-1",
    name: "Form",
    refComponent: componentsRef.default.dynamicContent.Form,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-2",
    name: "Map",
    refComponent: componentsRef.default.dynamicContent.Map,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-1",
    name: "Search",
    refComponent: componentsRef.default.dynamicContent.Search,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-1",
    name: "Popup",
    refComponent: componentsRef.default.dynamicContent.Popup,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-1",
    name: "Facebook",
    refComponent: componentsRef.default.dynamicContent.Facebook,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-1",
    name: "InstagramPage",
    refComponent: componentsRef.default.dynamicContent.InstagramPage,
    image: "/block-test.svg",
  },
  {
    id: "dynamicContent-1",
    name: "Countdown",
    refComponent: componentsRef.default.dynamicContent.Countdown,
    image: "/block-test.svg",
  },
];

export const innerComponentsBlocks = [
  {
    id: "innerContent-1",
    name: "Button",
    refComponent: componentsRef.default.innerContent.Button,
    image: "/block_svgs/InnerContent_svgs/s_button.svg",
  },
  {
    id: "innerContent-2",
    name: "Image",
    refComponent: componentsRef.default.innerContent.InnerImage,
    image: "/block_svgs/InnerContent_svgs/s_image.svg",
  },
  {
    id: "innerContent-3",
    name: "Video",
    refComponent: componentsRef.default.innerContent.Video,
    image: "/block_svgs/InnerContent_svgs/s_video.svg",
  },
  {
    id: "innerContent-4",
    name: "Separator",
    refComponent: componentsRef.default.innerContent.Separator,
    image: "/block_svgs/InnerContent_svgs/s_hr.svg",
  },
  {
    id: "innerContent-5",
    name: "Alert",
    refComponent: componentsRef.default.innerContent.Alert,
    image: "/block_svgs/InnerContent_svgs/s_alert.svg",
    // data : getData(sectionsData.sowa , componentsRef.SOWA.innerContent.Alert)
  },
  {
    id: "innerContent-6",
    name: "Rating",
    refComponent: componentsRef.default.innerContent.Rating,
    image: "/block_svgs/InnerContent_svgs/s_rating.svg",
  },
  {
    id: "innerContent-7",
    name: "Card",
    refComponent: componentsRef.default.innerContent.Card,
    image: "/block_svgs/InnerContent_svgs/s_card.svg",
  },
  {
    id: "innerContent-8",
    name: "Share",
    refComponent: componentsRef.default.innerContent.Share,
    image: "/block_svgs/InnerContent_svgs/s_share.svg",
  },
  {
    id: "innerContent-9",
    name: "Social-Media",
    refComponent: componentsRef.default.innerContent.SocialMedia,
    image: "/block_svgs/InnerContent_svgs/s_social_media.svg",
  },
  {
    id: "innerContent-10",
    name: "Search",
    refComponent: componentsRef.default.innerContent.Search,
    image: "/block_svgs/InnerContent_svgs/s_searchbar_inline.svg",
  },
  {
    id: "innerContent-11",
    name: "Text-Highlight",
    refComponent: componentsRef.default.innerContent.TextHighlight,
    image: "/block_svgs/InnerContent_svgs/s_text_highlight.svg",
  },
  {
    id: "innerContent-12",
    name: "Chart",
    refComponent: componentsRef.default.innerContent.Chart,
    image: "/block_svgs/InnerContent_svgs/s_chart.svg",
  },
  {
    id: "innerContent-12",
    name: "ProgressBar",
    refComponent: componentsRef.default.innerContent.ProgressBar,
    image: "/block_svgs/InnerContent_svgs/s_progress_bar.svg",
  },
  {
    id: "innerContent-13",
    name: "Bedge",
    refComponent: componentsRef.default.innerContent.Bedge,
    image: "/block_svgs/InnerContent_svgs/s_badge.svg",
  },
  {
    id: "innerContent-14",
    name: "Blockquote",
    refComponent: componentsRef.default.innerContent.Blockquote,
    image: "/block_svgs/InnerContent_svgs/s_blockquote.svg",
  },
  {
    id: "innerContent-15",
    name: "Appointment",
    refComponent: componentsRef.default.innerContent.Appointment,
    image: "/block-test.svg",
  },
  {
    id: "innerContent-16",
    name: "Newsletter",
    refComponent: componentsRef.default.innerContent.Newsletter,
    image: "/block-test.svg",
  },
  {
    id: "innerContent-17",
    name: "Donation-Button",
    refComponent: componentsRef.default.innerContent.DonationButton,
    image: "/block_svgs/InnerContent_svgs/s_donation_button.svg",
  },
  {
    id: "innerContent-18",
    name: "Add-To-Cart-Button",
    refComponent: componentsRef.default.innerContent.AddToCartButton,
    image: "/block_svgs/InnerContent_svgs/s_add_to_cart.svg",
  },
];

export const defaultBlocks = {
  structure: [...structureComponentsBlocks],
  feature: [...featureComponentsBlocks],
  dynamicContents: [...dynamicComponentsBlocks],
  innerContent: [...innerComponentsBlocks],
};
