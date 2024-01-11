import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface ISeeMoreBtnProps {
  onClick: () => void;
  hasMoreReviews: boolean;
}

const SeeMoreBtn: FC<ISeeMoreBtnProps> = ({ onClick, hasMoreReviews }) => {
  const { t } = useTranslation();
  return (
    <div>{hasMoreReviews && <button onClick={onClick}>{t("seemore.seemore")}</button>}</div>
  );
};

export default SeeMoreBtn;
