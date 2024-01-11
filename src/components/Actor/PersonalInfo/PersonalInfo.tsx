import React, { FC } from "react";
import { Actor } from "../../../types/actorTypes";
import { Card} from "react-bootstrap";
import { useTranslation } from "react-i18next";


const BASE_IMG = "https://image.tmdb.org/t/p/w500";

interface PersonalInfoProps{
    actor:  Actor
  }
  

const PersonalInfo: FC<PersonalInfoProps> = ({actor}) => {
const { id, name, profile_path, known_for_department, gender, birthday, place_of_birth, also_known_as }=actor;   
const { t } = useTranslation();

  return ( 

   <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={`${BASE_IMG}${profile_path}`} alt={name} />
      <Card.Body>
        <Card.Title>{t("actor.info")}</Card.Title>       
        <Card.Subtitle>{t("actor.know")}</Card.Subtitle>   
        <Card.Text>{known_for_department}</Card.Text>  
        <Card.Subtitle>{t("actor.gender")}</Card.Subtitle>
        <Card.Text>{gender === 1 ? "Female" : "Male"}</Card.Text>  
        <Card.Subtitle>{t("actor.birthday")}</Card.Subtitle> 
        <Card.Text>{birthday}</Card.Text> 
        <Card.Subtitle>{t("actor.place")}</Card.Subtitle>
        <Card.Text>{place_of_birth}</Card.Text>   
        <Card.Subtitle>{t("actor.also")}</Card.Subtitle>
        {also_known_as && 
        also_known_as.map((item:string, index:number)=>{
          return (
            <Card.Text key={index}>{item}</Card.Text>
          )
        })
      }      
      </Card.Body>
    </Card>
   
   
  );
};

export default PersonalInfo;
