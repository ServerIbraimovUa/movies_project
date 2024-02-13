import React, { FC, useEffect, useState } from 'react';
import { getActorById, getActorCredits } from '../../services/api';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

import { Actor, Credits } from '../../types/actorTypes';

import { useParams } from 'react-router-dom';
import UpcomingListSlick from '../../components/UpcomingList/UpcomingListSlick';

import PersonalInfo from '../../components/Actor/PersonalInfo/PersonalInfo';
import CreditsSlick from '../../components/Actor/CreditsSlick/CreditsSlick';
import Biography from '../../components/Actor/Biography/Biography';
import ActorCredits from '../../components/Actor/ActorCredits/ActorCredits';
import { ActorPageContainer, BiographyContainer, PersonalInfoContainer } from './ActorPage.styled';


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
      <div className="main-container">
        {loading ? (
          <>        
              <UpcomingListSlick />   
              <ActorPageContainer>   
                <PersonalInfoContainer>
                <PersonalInfo actor={actor} />
                </PersonalInfoContainer>
              <BiographyContainer>
                <Biography actor={actor} />           
                <CreditsSlick credits={sortedCredits(credits)} />            
                <ActorCredits credits={credits} />
              </BiographyContainer>
              </ActorPageContainer> 
          </>
        ) : (
          <Loading />
        )}

        {error && <Error />}
      </div>
    </section>
  );
};

export default ActorPage;
