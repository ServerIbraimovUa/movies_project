import React, { FC } from "react";
import { Actor } from "../../../types/actorTypes";
import { Card} from "react-bootstrap";
import {  PersonalCard,CardSubtitle, CardText, CardImgTabl } from "./PersonalInfo.styled";

const BASE_IMG = "https://image.tmdb.org/t/p/w500";

interface PersonalInfoProps{
    actor:  Actor
  }
  

const PersonalInfoTabl: FC<PersonalInfoProps> = ({actor}) => {
const { id, name, profile_path, known_for_department, gender, birthday, place_of_birth, also_known_as }=actor;   

  return (     
   <>
  
   <PersonalCard key={id}>
        <CardImgTabl variant='top' src={`${BASE_IMG}${profile_path}`} alt={name} />
          
          <Card.Body>
              <CardSubtitle>Known For</CardSubtitle>
              <CardText>{known_for_department}</CardText>
              <CardSubtitle>Gender</CardSubtitle>
              <CardText>{gender === 1 ? "Female" : "Male"}</CardText>
              <CardSubtitle>Birthday</CardSubtitle>
              <CardText>{birthday}</CardText>
              <CardSubtitle>Place of birth</CardSubtitle>
              <CardText>{place_of_birth}</CardText>
              <CardSubtitle>Also known as</CardSubtitle>
              {also_known_as &&
                  also_known_as.map((item: string, index: number) => {
                      return (
                          <Card.Text key={index}>{item}</Card.Text>
                      );
                  })}

          </Card.Body>

      </PersonalCard></>
   
   
  );
};

export default PersonalInfoTabl;
