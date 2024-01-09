import React, { FC } from "react";
import { Actor } from "../../../types/actorTypes";
import {CardImgMob, Info, CardSubtitleMob, CardTextMob, HeadingMob } from "./PersonalInfo.styled";

const BASE_IMG = "https://image.tmdb.org/t/p/w500";

interface PersonalInfoProps{
    actor:  Actor
  }
  

const PersonalInfoMob: FC<PersonalInfoProps> = ({actor}) => {
const { id, name, profile_path, known_for_department, gender, birthday, place_of_birth, also_known_as }=actor;   

  return ( 
    <>
    <HeadingMob>{name}</HeadingMob>
    <Info key={id}>

      <CardImgMob src={`${BASE_IMG}${profile_path}`} alt={name} />

      <CardSubtitleMob>Known For</CardSubtitleMob>
      <CardTextMob>{known_for_department}</CardTextMob>
      <CardSubtitleMob>Gender</CardSubtitleMob>
      <CardTextMob>{gender === 1 ? "Female" : "Male"}</CardTextMob>
      <CardSubtitleMob>Birthday</CardSubtitleMob>
      <CardTextMob>{birthday}</CardTextMob>
      <CardSubtitleMob>Place of birth</CardSubtitleMob>
      <CardTextMob>{place_of_birth}</CardTextMob>
      <CardSubtitleMob>Also known as</CardSubtitleMob>
      {also_known_as &&
        also_known_as.map((item: string, index: number) => {
          return (
            <CardTextMob key={index}>{item}</CardTextMob>
          );
        })}

    </Info></>  
   
  );
};

export default PersonalInfoMob;
