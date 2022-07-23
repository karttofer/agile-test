// Dependencies
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import ImgComponent from './ImgComponent';
import LinkComponent from './LinkComponent';

// Assets
import DownArrow from '../assets/img/down-arrow.svg';

const Starcomponent = ({ color }) => {
  const [star, setStar] = useState(0);

  const changeRating = (newRating) => {
    setStar(newRating);
  };

  return (
    <div className="shop__star-ratings">
      <StarRatings
        rating={star}
        starRatedColor={color}
        starHoverColor={color}
        numberOfStars={5}
        changeRating={(e) => changeRating(e)}
        name="rating"
        starDimension={'15'}
        starSpacing={'1'}
      />
      <LinkComponent text="(300)" />
      <ImgComponent src={DownArrow} />
    </div>
  );
};
export default Starcomponent;
