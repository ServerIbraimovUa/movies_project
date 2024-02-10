import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { useLocation } from "react-router-dom";
import { Heading, LinkCredit, ListGroupCredit, ListGroupItemCredit } from "./ActorCredits.styled";
import { useTranslation } from "react-i18next";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCredits: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>

      <Heading>{t("actor.acting")}</Heading>
      <ListGroupCredit>
        {credits.map((credit:Credits) => {
          const { id, title} = credit;
          return (
            <LinkCredit to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroupItemCredit>{title}</ListGroupItemCredit>
            </LinkCredit>
          );
        })}
      </ListGroupCredit>

    </>
  );
};

export default ActorCredits;
