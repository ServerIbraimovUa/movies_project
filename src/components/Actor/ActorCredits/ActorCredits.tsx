import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { useLocation } from "react-router-dom";
import { Heading, LinkCredit, ListGroupItemCredit } from "./ActorCredits.styled";
import { ListGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCredits: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>

      <Heading>{t("actor.know")}</Heading>
      <ListGroup>
        {credits.map((credit:Credits) => {
          const { id, title} = credit;
          return (
            <LinkCredit to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroupItemCredit>{title}</ListGroupItemCredit>
            </LinkCredit>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ActorCredits;
