import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";

import { useTranslation } from "react-i18next";
import { BiographyText, Button, Heading, HeadingName } from "./Biography.styled";


interface BiographyProps{
    actor:  Actor
  }
    const Biography: FC<BiographyProps> = ({actor}) => {
    const {name, biography }=actor;
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <HeadingName>{name}</HeadingName>
   <Heading>{t("actor.biografi")}</Heading>
   
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <BiographyText>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </BiographyText>
    </>    
   }
   </>
  );
};

export default Biography;
