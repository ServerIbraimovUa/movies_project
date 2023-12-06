import React, { FC } from "react";

interface ISeeMoreBtnProps {
  onClick: () => void;
  hasMoreReviews: boolean;
}

const SeeMoreBtn: FC<ISeeMoreBtnProps> = ({ onClick, hasMoreReviews }) => {
  return (
    <div>{hasMoreReviews && <button onClick={onClick}>See more</button>}</div>
  );
};

export default SeeMoreBtn;
