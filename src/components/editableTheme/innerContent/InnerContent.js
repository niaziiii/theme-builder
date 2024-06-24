import { componentsRef } from "@/utils/home/home.utils";
import Button from "./button/Button";
// import InnerImage from "./image/Image";
import InnerImage from "./image/Image";
import Video from "./video/Video";
import Separator from "./separator/Separator";
import Alert from "./alert/Alert";
import Rating from "./rating/Rating";
import Card from "./card/Card";
import Share from "./share/Share";
import SocialMedia from "./socialMedia/SocialMedia";
import Search from "./search/Search";
import TextHighlight from "./textHighlight/TextHighlight";
import Chart from "./chart/Chart";
import ProgressBar from "./progressBar/ProgressBar";
import Bedge from "./bedge/Bedge";
import Blockquote from "./blockquote/Blockquote";
import Appointment from "./appointment/Appointment";
import Newsletter from "./newsletter/Newsletter";
import DonationButton from "./donationButton/DonationButton";
import AddToCartButton from "./addToCart/AddToCartButton";
const InnerBlockElements = {
    [componentsRef.default.innerContent.Button] : Button,
    [componentsRef.default.innerContent.InnerImage] : InnerImage,
    [componentsRef.default.innerContent.Video] : Video,
    [componentsRef.default.innerContent.Separator] : Separator,
    [componentsRef.default.innerContent.Alert] : Alert,
    [componentsRef.default.innerContent.Rating] : Rating,
    [componentsRef.default.innerContent.Card] : Card,
    [componentsRef.default.innerContent.Share] : Share,
    [componentsRef.default.innerContent.SocialMedia] : SocialMedia,
    [componentsRef.default.innerContent.Search] : Search,
    [componentsRef.default.innerContent.TextHighlight] : TextHighlight,
    [componentsRef.default.innerContent.Chart] : Chart,
    [componentsRef.default.innerContent.ProgressBar] : ProgressBar,
    [componentsRef.default.innerContent.Bedge] : Bedge,
    [componentsRef.default.innerContent.Blockquote] : Blockquote,
    [componentsRef.default.innerContent.Appointment] : Appointment,
    [componentsRef.default.innerContent.Newsletter] : Newsletter,
    [componentsRef.default.innerContent.DonationButton] : DonationButton,
    [componentsRef.default.innerContent.AddToCartButton] : AddToCartButton

}
export default InnerBlockElements;