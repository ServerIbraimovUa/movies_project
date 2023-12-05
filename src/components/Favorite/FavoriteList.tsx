import  { FC } from "react";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { Movies } from "../../types/homeTypes";

interface FavoriteListProps {
  cards: Movies[];
}
const FavoriteList: FC<FavoriteListProps> =({cards}) => {
  return (<ul>
    { cards.map((card: Movies) => (<FavoriteItem key={card.id} card={card} />)) }
    </ul>);
};

export default FavoriteList;
