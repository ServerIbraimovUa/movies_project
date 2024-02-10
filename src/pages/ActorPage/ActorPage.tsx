import React, { FC, useEffect, useState } from "react";
import { getActorById, getActorCredits } from "../../services/api";
import { Col, Container, Row} from "react-bootstrap";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

import { Actor, Credits } from "../../types/actorTypes";

import { useParams } from "react-router-dom";
import UpcomingListSlick from "../../components/UpcomingList/UpcomingListSlick";

import PersonalInfo from "../../components/Actor/PersonalInfo/PersonalInfo";
import CreditsSlick from "../../components/Actor/CreditsSlick/CreditsSlick";
import Biography from "../../components/Actor/Biography/Biography";
import ActorCredits from "../../components/Actor/ActorCredits/ActorCredits";

const ActorPage: FC = () => {
  const [actor, setActor] = useState<Actor>({});
  const [credits, setCredits] = useState<Credits[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  

  const { actorId } = useParams(); 
  
  useEffect(() => {
    const details = async () => {
      try {
        const results = await getActorById(Number(actorId));
        setActor(results);
        setLoading(true);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    details();

    const MovieCredits = async () => {
      try {
        const result = await getActorCredits(Number(actorId));
        setLoading(true);
        setCredits(result);
      } catch (error) {
        setError(true);
        setLoading(true);
      }
    };
    MovieCredits();
  }, [actorId]);

  const sortedCredits = (arr: Credits[]): Credits[] => {
    return arr
      .sort((a, b) => Number(b.vote_average) - Number(a.vote_average))
      .slice(0, 15);
  };

  return (
   <section>
      <Container className="p-3 container">
        {loading ? (
        
        <>          
       
        <Row className = "mx-auto">
          <UpcomingListSlick />
        </Row> 
        
        <Row>
             <Col lg={3} md={5} sm={"auto"} xs={"auto"} >            
             <PersonalInfo actor = {actor}/>          
            </Col> 
            <Col lg={9} md={7} sm={"auto"} xs={"auto"}>
              <Row>
               <Biography actor = {actor}/>
              </Row>   
              <Row className = "mx-auto">
                <CreditsSlick credits = {sortedCredits(credits)}/>                          
              </Row> 
             <Row className = "mx-auto">
                <ActorCredits credits = {credits}/>              
              </Row> 
            </Col>
          </Row></>
        ) : (
          <Loading />
        )}

        {error && <Error />}
      </Container>
      </section>
  );
};

export default ActorPage;
