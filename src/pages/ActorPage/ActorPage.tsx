import React, { FC, useEffect, useState } from "react";
import { getActorById, getActorCredits } from "../../services/api";
import { Col, Row} from "react-bootstrap";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

import { Actor, Credits } from "../../types/actorTypes";

import { useParams } from "react-router-dom";
import UpcomingListSlick from "../../components/UpcomingList/UpcomingListSlick";

import { ActorPageContainer} from "./ActorPage.styled";
import PersonalInfoMob from "../../components/Actor/PersonalInfo/PersonalInfoMob";
import {useMediaQuery} from 'react-responsive';
import PersonalInfoDesk from "../../components/Actor/PersonalInfo/PersonalInfoDesk";
import PersonalInfoTabl from "../../components/Actor/PersonalInfo/PersonalInfoTabl";
import BiographyMob from "../../components/Actor/Biography/BiographyMob";
import BiographyDesk from "../../components/Actor/Biography/BiographyDesk";
import BiographyTabl from "../../components/Actor/Biography/BiographyTabl";
import CreditsSlickMob from "../../components/Actor/CreditsSlick/CreditsSlickMob";
import CreditsSlickTabl from "../../components/Actor/CreditsSlick/CreditSlickTabl";
import CreditsSlickDesk from "../../components/Actor/CreditsSlick/CreditSlickDesk";
import ActorCreditsMob from "../../components/Actor/ActorCredits/ActorCreditsMob";
import ActorCreditsTabl from "../../components/Actor/ActorCredits/ActorCreditsTabl";
import ActorCreditsDesk from "../../components/Actor/ActorCredits/ActorCreditsDesk";

const ActorPage: FC = () => {
  const [actor, setActor] = useState<Actor>({});
  const [credits, setCredits] = useState<Credits[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const isMobile = useMediaQuery({minWidth : 375, maxWidth: 1023});
  const isTablet = useMediaQuery({minWidth : 1023, maxWidth : 1439});
  const isDesktop = useMediaQuery({minWidth :1440});

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
   
      <ActorPageContainer className = "mx-auto">
        {loading ? (
        
        <>          
       
        <Row className = "mx-auto">
          <UpcomingListSlick />
        </Row>
        
        <Row>
            <Col lg={3} md={5} sm={"auto"} xs={"auto"} >
            
            {isMobile && <PersonalInfoMob actor = {actor}/>}
            {isTablet && <PersonalInfoTabl actor = {actor}/>}
            {isDesktop && <PersonalInfoDesk actor = {actor}/>}
        
            </Col>
            <Col lg={9} md={7} sm={"auto"} xs={"auto"} className = "mx-auto">
              <Row>
              {isMobile && <BiographyMob actor = {actor}/>}
              {isTablet && <BiographyTabl actor = {actor}/>}
              {isDesktop && <BiographyDesk actor = {actor}/>}
              </Row>
              <Row className = "mx-auto">
              {isMobile && <CreditsSlickMob credits = {sortedCredits(credits)}/>}
              {isTablet && <CreditsSlickTabl credits = {sortedCredits(credits)}/>}
              {isDesktop && <CreditsSlickDesk credits = {sortedCredits(credits)}/>}               
              </Row>
              <Row className = "mx-auto">
              {isMobile && <ActorCreditsMob credits = {credits}/>}
              {isTablet && <ActorCreditsTabl credits = {credits}/>}
              {isDesktop && <ActorCreditsDesk credits = {credits}/>}    
              </Row>
            </Col>
          </Row></>
        ) : (
          <Loading />
        )}

        {error && <Error />}
      </ActorPageContainer>
  
  );
};

export default ActorPage;
