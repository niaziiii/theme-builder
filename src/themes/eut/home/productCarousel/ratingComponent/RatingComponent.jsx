import { useState } from "react";
import StarRatings from "react-star-ratings";

const StarRating = () => {
  const [rating, setRating] = useState(4);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      changeRating={changeRating}
      numberOfStars={6}
      name="rating"
      starDimension="20px"
      starSpacing="5px"
    />
  );
};

export default StarRating;
