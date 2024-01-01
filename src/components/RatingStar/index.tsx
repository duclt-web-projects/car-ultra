'use client';

import dynamic from 'next/dynamic';
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
});

const RatingStar = ({ rating = 5 }: { rating?: number }) => {
  return (
    <StarRatings
      rating={rating}
      starDimension='16px'
      starRatedColor='#fcbf0c'
    />
  );
};

export default RatingStar;
