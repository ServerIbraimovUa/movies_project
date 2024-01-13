import React, { FC } from "react";
import { Actor } from "../../../types/actorTypes";
import {CardImg, Info, Heading, CardSubtitle, CardText } from "./PersonalInfo.styled";

const BASE_IMG = "https://image.tmdb.org/t/p/w500";

interface PersonalInfoProps{
    actor:  Actor
  }
  

const PersonalInfo: FC<PersonalInfoProps> = ({actor}) => {
const { id, name, profile_path, known_for_department, gender, birthday, place_of_birth, also_known_as }=actor;   

  return ( 
    <>
    <Heading>{name}</Heading>
    <Info key={id}>

      <CardImg  src={`${BASE_IMG}${profile_path}`} alt={name} />

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
            <CardText key={index}>{item}</CardText>
          );
        })}

    </Info></>  
   
  );
};

export default PersonalInfo;
