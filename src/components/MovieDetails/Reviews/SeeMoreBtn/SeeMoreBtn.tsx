import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { MoreBtnStyled } from "./SeeMoreBtn.styled";

interface ISeeMoreBtnProps {
  onClick: () => void;
  hasMoreReviews: boolean;
}

const SeeMoreBtn: FC<ISeeMoreBtnProps> = ({ onClick, hasMoreReviews }) => {
  const { t } = useTranslation();
  return (
    <MoreBtnStyled>
      {hasMoreReviews && (
        <button onClick={onClick} className="see-more-btn">
          {t("seemore.seemore")}
        </button>
      )}
    </MoreBtnStyled>
  );
};

export default SeeMoreBtn;
