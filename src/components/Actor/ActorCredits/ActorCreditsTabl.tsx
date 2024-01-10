import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { useLocation } from "react-router-dom";
import { CreditsListTabl, HeadingTabl, LinkCredit, ListGroupItemCredit } from "./ActorCredits.styled";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCreditsTabl: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  return (
    <>
      <HeadingTabl>Acting</HeadingTabl>
      <CreditsListTabl>
        {credits.map((credit:Credits) => {
          const { id, title} = credit;
          return (
            <LinkCredit to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroupItemCredit>{title}</ListGroupItemCredit>
            </LinkCredit>
          );
        })}
      </CreditsListTabl>
    </>
  );
};

export default ActorCreditsTabl;
