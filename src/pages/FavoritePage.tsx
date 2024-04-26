import  { FC } from "react";
import FavoriteList from "../components/Favorite/FavoriteList";
import { Container } from "react-bootstrap";
import UpcomingListSlick from "../components/UpcomingList/UpcomingListSlick";
const FavoritePage: FC = () => {

  return (
    <Container style={{ backgroundColor: "F5F5F5" }}>
      <UpcomingListSlick />
      <FavoriteList />
    </Container>
  );
};

export default FavoritePage;
