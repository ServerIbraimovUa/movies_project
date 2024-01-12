import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { useLocation } from "react-router-dom";
import { CreditsListMob, HeadingMob, LinkCredit, ListGroupItemCredit } from "./ActorCredits.styled";
import { useTranslation } from "react-i18next";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCreditsMob: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <HeadingMob>{t("actor.acting")}</HeadingMob>
      <CreditsListMob>
        {credits.map((credit:Credits) => {
          const { id, title} = credit;
          return (
            <LinkCredit to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroupItemCredit>{title}</ListGroupItemCredit>
            </LinkCredit>
          );
        })}
      </CreditsListMob>
    </>
  );
};

export default ActorCreditsMob;
