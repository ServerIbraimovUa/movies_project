import React, { FC, useState } from "react";
import { Actor } from "../../../types/actorTypes";
import { BiographyTextTabl, Button,HeadingTabl, HeadingTablName } from "./Biography.styled";
import { useTranslation } from "react-i18next";


interface BiographyProps{
    actor:  Actor
  }
  

    const BiographyTabl: FC<BiographyProps> = ({actor}) => {
      const { t } = useTranslation();
    const { name, biography }=actor;
    const [showMore, setShowMore] = useState(false);
    

    const truncateString = (s: any, w: number) : any => {
     if(!s) return ;
     
     return s.length> w ? s.slice(0, w) + "..." : s; 
    }

    const text= truncateString(biography, 1000);

    
  return (
   <>
   <HeadingTablName>{name}</HeadingTablName>
   <HeadingTabl>{t("actor.biografi")}</HeadingTabl>
   
   {biography &&   
   <>
   <p>{showMore ? biography : text} </p>
   <BiographyTextTabl>
    {biography.length > 1000 &&
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </Button>  
     }
  </BiographyTextTabl>
    </>    
   }
   </>
  );
};

export default BiographyTabl;
