import React, { FC } from "react";
import { ICast } from "../../../types/movieDetailsTypes";
import CastItem from "../CastItem/CastItem";
import { StyledCastList } from "./CastList.styled";

interface CastProps {
  cast: ICast[];
}

const CastList: FC<CastProps> = ({ cast }) => {
  return (
    <StyledCastList>
      {cast &&
        cast.map(({ id, name, profile_path }) => {
          return (
            <CastItem
              key={id}
              id={id}
              name={name}
              profile_path={profile_path}
            />
          );
        })}
    </StyledCastList>
  );
};

export default CastList;
