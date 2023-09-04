import React, {useState} from 'react';
import Star from './star';
import createArray from '../../utils/create-array';


export default function StarRating({style = {}, totalStars = 5, ...props }) {
  const [selectedStars] = useState(3);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}