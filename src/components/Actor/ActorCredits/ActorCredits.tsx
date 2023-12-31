import React, { FC } from "react";
import { Credits } from "../../../types/actorTypes";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

interface ActorCreditsProps {
  credits: Credits[];
}

const ActorCredits: FC<ActorCreditsProps> = ({ credits }) => {
  const location = useLocation();
  return (
    <>
      <h2>Acting</h2>
      <ListGroup>
        {credits.map((credit) => {
          const { id, title, release_date } = credit;
          return (
            <Link to={`/movie/${id}`} state={{ from: location }} key={id}>
              <ListGroup.Item>{title}</ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ActorCredits;
