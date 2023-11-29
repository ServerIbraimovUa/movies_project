import React, { FC, useEffect, useState } from "react";
import { getActorById, getActorCredits} from "../services/api";
import { Col, Container, Row } from "react-bootstrap";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

import { Actor, Credits } from "../types/actorTypes";

import Biography from "../components/Actor/Biography/Biography";
import PersonalInfo from "../components/Actor/PersonalInfo/PersonalInfo";
import CreditsSlick from "../components/Actor/CreditsSlick/CreditsSlick";

import ActorCredits from "../components/Actor/ActorCredits/ActorCredits";
import { useParams } from "react-router-dom";
import { number } from "yup";



const ActorPage: FC = () => {
  const [actor, setActor] = useState<Actor>({});
  const [credits, setCredits] = useState<Credits[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const { actorId } = useParams();


  useEffect(()=>{
    const details = async () => {
      try {
        const results = await getActorById(10297);       
        setActor(results);
        setLoading(true);
        console.log(results);

      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    details();

    const MovieCredits = async ()=>{
      try{
        const result = await getActorCredits (10297);
        setLoading(true);
        setCredits(result);
        
      }catch (error){
        setError(true);
        setLoading(true);
      }
    }
    MovieCredits();

  },[])  

  const sortedCredits = (arr:Credits[]): Credits[] => {
    return arr.sort((a,b) => Number(b.vote_average) - Number(a.vote_average)).slice(0,15);
  };

  return (
    <section>
     
      <Container>

      {loading ? 
      <Row>
      <Col lg={3} md={5} sm={'auto'} xs={'auto'}>
        <PersonalInfo actor={actor} />
      </Col>  
      <Col lg={9} md={7} sm={'auto'} xs={'auto'}>
        <Row><Biography actor={actor} /> </Row> 
        <Row><CreditsSlick credits={sortedCredits(credits)}/></Row>
        <Row><ActorCredits credits={credits}/></Row>                    
      </Col>
      </Row> 
      : <Loading/>}
        
      {error && <Error />}
      
       </Container>
    </section>
  );
};

export default ActorPage;
