import React, { FC } from "react";
import { Actor } from "../../../types/actorTypes";
import { Card} from "react-bootstrap";
import {  PersonalCard,CardSubtitle, CardText, CardImgTabl } from "./PersonalInfo.styled";
import { useTranslation } from "react-i18next";

const BASE_IMG = "https://image.tmdb.org/t/p/w500";

interface PersonalInfoProps{
    actor:  Actor
  }
  

const PersonalInfoTabl: FC<PersonalInfoProps> = ({actor}) => {
const { id, name, profile_path, known_for_department, gender, birthday, place_of_birth, also_known_as }=actor;   
const { t } = useTranslation();
  return (     
   <>
  
   <PersonalCard key={id}>
        <CardImgTabl variant='top' src={`${BASE_IMG}${profile_path}`} alt={name} />
          
          <Card.Body>
              <CardSubtitle>{t("actor.know")}</CardSubtitle>
              <CardText>{known_for_department}</CardText>
              <CardSubtitle>{t("actor.gender")}</CardSubtitle>
              <CardText>{gender === 1 ? "Female" : "Male"}</CardText>
              <CardSubtitle>{t("actor.birthday")}</CardSubtitle>
              <CardText>{birthday}</CardText>
              <CardSubtitle>{t("actor.place")}</CardSubtitle>
              <CardText>{place_of_birth}</CardText>
              <CardSubtitle>{t("actor.also")}</CardSubtitle>
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
