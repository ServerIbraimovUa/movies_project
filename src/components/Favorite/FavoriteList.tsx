import React, { FC, useEffect, useState } from "react";
import { Movies } from "../../types/homeTypes";
import FavoriteItem from "./FavoriteItem/FavoriteItem";

interface FavoriteListProps {
  cards: Movies[];
}
const FavoriteList: FC<FavoriteListProps> =(cards) => {
  return { cards.map(card => <FavoriteItem  card={card}/>) };
};

export default FavoriteList;
