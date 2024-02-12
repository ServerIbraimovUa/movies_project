import  { FC } from "react";
import FavoriteList from "../components/Favorite/FavoriteList";
import { Container } from "react-bootstrap";
const FavoritePage: FC = () => {

  return (
    <Container style={{ backgroundColor: "F5F5F5" }}>
      <FavoriteList />
    </Container>
  );
};

export default FavoritePage;
